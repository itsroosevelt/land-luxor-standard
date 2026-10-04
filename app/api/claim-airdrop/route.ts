import { NextRequest, NextResponse } from 'next/server';
import { Connection, Keypair, PublicKey, Transaction } from '@solana/web3.js';
import { getAssociatedTokenAddress, createTransferInstruction } from '@solana/spl-token';
import { db } from '@/lib/firebase-admin';

// Configuration
const LXR_TOKEN_MINT = new PublicKey('7Qm6qUCXGZfGBYYFzq2kTbwTDah5r3d9DcPJHRT8Wdth');
const AIRDROP_AMOUNT = 150 * 10 ** 9; // Assuming 9 decimals, adjust if different

export async function POST(req: NextRequest) {
    try {
        const { userWalletAddress } = await req.json();

        if (!userWalletAddress) {
            return NextResponse.json({ error: 'Wallet address required' }, { status: 400 });
        }

        const userPubkey = new PublicKey(userWalletAddress);

        // 1. Check if user already claimed in Firebase (if db is available)
        if (db) {
            const claimRef = db.collection('airdropClaims').doc(userWalletAddress);
            const claimDoc = await claimRef.get();

            if (claimDoc.exists) {
                return NextResponse.json({ error: 'Airdrop already claimed for this wallet' }, { status: 403 });
            }
        } else {
            console.warn("Firebase not initialized. Bypassing duplicate check.");
        }

        // 2. Prepare the Hot Wallet
        const hotWalletPrivateKeyString = process.env.HOT_WALLET_PRIVATE_KEY;
        if (!hotWalletPrivateKeyString) {
            return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
        }

        const secretKeyArray = Uint8Array.from(hotWalletPrivateKeyString.split(',').map(Number));
        const hotWalletKeypair = Keypair.fromSecretKey(secretKeyArray);
        const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');

        // 3. Get ATAs (Associated Token Accounts)
        const sourceATA = await getAssociatedTokenAddress(LXR_TOKEN_MINT, hotWalletKeypair.publicKey);
        const destinationATA = await getAssociatedTokenAddress(LXR_TOKEN_MINT, userPubkey);

        const transaction = new Transaction();
        const { blockhash } = await connection.getLatestBlockhash('confirmed');
        transaction.recentBlockhash = blockhash;
        
        // The user will be the fee payer
        transaction.feePayer = userPubkey;

        // Check if destination ATA exists
        const destAccountInfo = await connection.getAccountInfo(destinationATA);
        
        if (!destAccountInfo) {
            // Import this at the top if missing, or use inline require to avoid breaking imports
            const splToken = require('@solana/spl-token');
            transaction.add(
                splToken.createAssociatedTokenAccountInstruction(
                    userPubkey, // payer
                    destinationATA, // ata
                    userPubkey, // owner
                    LXR_TOKEN_MINT // mint
                )
            );
        }

        // Add transfer instruction
        const splToken = require('@solana/spl-token');
        transaction.add(
            splToken.createTransferInstruction(
                sourceATA,
                destinationATA,
                hotWalletKeypair.publicKey, // owner of source
                AIRDROP_AMOUNT,
                []
            )
        );

        // Partially sign with the hot wallet
        transaction.partialSign(hotWalletKeypair);

        // Serialize the partially signed transaction to base64
        const serializedTransaction = transaction.serialize({ requireAllSignatures: false });
        const base64Transaction = serializedTransaction.toString('base64');

        // Note: We don't mark as claimed in the DB yet. 
        // The frontend will send the signed transaction to the blockchain, 
        // and then notify another endpoint that the claim succeeded, OR we listen to the blockchain.

        return NextResponse.json({ 
            success: true, 
            transaction: base64Transaction 
        });

    } catch (error: any) {
        console.error('Airdrop error:', error);
        return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
    }
}

'use client';

import { useEffect, useState } from 'react';
import { Connection, PublicKey, SystemProgram, TransactionMessage, VersionedTransaction, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import { Copy, ExternalLink } from 'lucide-react';

const TREASURY_WALLET = "FEARFtN9VueEFVDCahtoWGu1A8Xdsmr2et3iWqAVo6hg";
const RPC_URL = "https://api.mainnet-beta.solana.com";

export function BlinkComponent() {
  const { publicKey, signTransaction, connect, connected, wallets, select } = useWallet();
  const [selectedAmount, setSelectedAmount] = useState<number>(0.1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleConnect = async () => {
    try {
      const phantomWallet = wallets.find(w => w.adapter.name === 'Phantom');
      if (phantomWallet) {
        select(phantomWallet.adapter.name);
      }
    } catch (err) {
      setError('Failed to connect wallet');
      console.error('Connect error:', err);
    }
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(TREASURY_WALLET);
    setError(null);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  const amounts = [0.1, 0.5, 1.0];

  const handleTransaction = async (amount: number) => {
    if (!publicKey || !signTransaction) {
      setError("Please connect your wallet first");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const connection = new Connection(RPC_URL);

      // Create transfer instruction
      const instruction = SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: new PublicKey(TREASURY_WALLET),
        lamports: Math.floor(amount * LAMPORTS_PER_SOL),
      });

      // Get latest blockhash
      const { blockhash } = await connection.getLatestBlockhash();

      // Create transaction message
      const message = new TransactionMessage({
        payerKey: publicKey,
        recentBlockhash: blockhash,
        instructions: [instruction],
      }).compileToV0Message();

      // Create versioned transaction
      const transaction = new VersionedTransaction(message);

      // Sign transaction
      const signedTx = await signTransaction(transaction);

      // Send transaction
      const signature = await connection.sendTransaction(signedTx);

      // Wait for confirmation
      await connection.confirmTransaction(signature);

      setSuccess(true);
      setSelectedAmount(0.1);

      // Reset message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to process donation";
      setError(errorMessage);
      console.error("Donation error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Presets */}
      <div className="space-y-3">
        <p className="text-white/60 text-sm font-medium">Select Amount</p>
        <div className="grid grid-cols-3 gap-3">
          {amounts.map((amount) => (
            <button
              key={amount}
              onClick={() => setSelectedAmount(amount)}
              disabled={isLoading}
              className={`py-3 px-4 rounded-lg font-bold text-sm transition-all ${
                selectedAmount === amount
                  ? "bg-blue-600 text-white border border-blue-500"
                  : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10"
              } disabled:opacity-50`}
            >
              {amount} SOL
            </button>
          ))}
        </div>
      </div>

      {/* Custom Amount */}
      <div>
        <label className="block text-white/60 text-sm font-medium mb-2">
          Custom Amount (SOL)
        </label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={selectedAmount}
          onChange={(e) => setSelectedAmount(parseFloat(e.target.value) || 0)}
          disabled={isLoading}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
          placeholder="Enter custom amount"
        />
      </div>

      {/* Status Messages */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      {success && (
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-3">
          <p className="text-green-400 text-sm">✓ Thank you for supporting Luxor! 🚀</p>
        </div>
      )}

      {/* Donate Button */}
      <button
        onClick={() => {
          if (!publicKey) {
            handleConnect();
          } else {
            handleTransaction(selectedAmount);
          }
        }}
        disabled={isLoading}
        className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
          !isLoading
            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/50"
            : "bg-blue-600/50 text-white/70 cursor-not-allowed"
        }`}
      >
        {isLoading
          ? "Processing..."
          : !publicKey
            ? "Connect Wallet"
            : `Donate ${selectedAmount} SOL`}
      </button>

      {/* Treasury Address Info */}
      <div className="bg-white/5 border border-white/10 rounded-lg p-4">
        <p className="text-white/60 text-xs font-medium mb-2">Treasury Address</p>
        <div className="flex items-center justify-between gap-2">
          <p className="text-white text-sm font-mono break-all">{TREASURY_WALLET}</p>
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={handleCopyAddress}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              title="Copy address"
            >
              <Copy size={16} className="text-white/60 hover:text-white" />
            </button>
            <a
              href={`https://solscan.io/address/${TREASURY_WALLET}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              title="View on Solscan"
            >
              <ExternalLink size={16} className="text-white/60 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ActionGetResponse, ActionPostRequest, ActionPostResponse, createPostResponse, ACTIONS_CORS_HEADERS } from "@solana/actions";
import { Connection, PublicKey, SystemProgram, Transaction, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { NextResponse } from 'next/server';

const TREASURY_WALLET = "FEARFtN9VueEFVDCahtoWGu1A8Xdsmr2et3iWqAVo6hg";

export const GET = async (req: Request) => {
  try {
    const url = new URL(req.url);

    const payload: ActionGetResponse = {
      title: "Support Luxor Development",
      icon: new URL("/assets/icons/lxr_logo.png", url.origin).toString(),
      description: "Contribute SOL to the Luxor Treasury via Squads Multisig",
      label: "Contribute",
      links: {
        actions: [
          {
            type: "transaction",
            label: "0.1 SOL",
            href: new URL(`/api/actions/donate?amount=0.1`, url.origin).toString()
          },
          {
            type: "transaction",
            label: "0.5 SOL",
            href: new URL(`/api/actions/donate?amount=0.5`, url.origin).toString()
          },
          {
            type: "transaction",
            label: "1 SOL",
            href: new URL(`/api/actions/donate?amount=1`, url.origin).toString()
          },
          {
            type: "transaction",
            label: "Custom Amount",
            href: new URL(`/api/actions/donate?amount={amount}`, url.origin).toString(),
            parameters: [
              {
                name: "amount",
                label: "SOL Amount",
                required: true
              }
            ]
          }
        ]
      }
    };

    return NextResponse.json(payload, { headers: ACTIONS_CORS_HEADERS });
  } catch (err) {
    console.error("GET /api/actions/donate error:", err);
    return NextResponse.json(
      { error: "Failed to fetch action" },
      { status: 500, headers: ACTIONS_CORS_HEADERS }
    );
  }
};

export const OPTIONS = async () => {
  return new Response(null, { headers: ACTIONS_CORS_HEADERS });
};

export const POST = async (req: Request) => {
  try {
    const body: ActionPostRequest = await req.json();
    const url = new URL(req.url);
    const amountParam = url.searchParams.get("amount");

    if (!amountParam) {
      return NextResponse.json(
        { error: "Missing amount parameter" },
        { status: 400, headers: ACTIONS_CORS_HEADERS }
      );
    }

    const amount = parseFloat(amountParam);
    if (isNaN(amount) || amount <= 0) {
      return NextResponse.json(
        { error: "Invalid amount" },
        { status: 400, headers: ACTIONS_CORS_HEADERS }
      );
    }

    let userPubkey: PublicKey;
    try {
      userPubkey = new PublicKey(body.account);
    } catch (err) {
      return NextResponse.json(
        { error: "Invalid account public key" },
        { status: 400, headers: ACTIONS_CORS_HEADERS }
      );
    }

    const connection = new Connection(
      process.env.NEXT_PUBLIC_RPC_URL || "https://api.mainnet-beta.solana.com"
    );

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: userPubkey,
        toPubkey: new PublicKey(TREASURY_WALLET),
        lamports: Math.floor(amount * LAMPORTS_PER_SOL)
      })
    );

    transaction.feePayer = userPubkey;

    try {
      const latestBlockhash = await connection.getLatestBlockhash();
      transaction.recentBlockhash = latestBlockhash.blockhash;
    } catch (err) {
      console.error("Failed to get recent blockhash:", err);
      return NextResponse.json(
        { error: "Network error" },
        { status: 500, headers: ACTIONS_CORS_HEADERS }
      );
    }

    const payload: ActionPostResponse = await createPostResponse({
      fields: {
        type: "transaction",
        transaction,
        message: `Thank you for supporting Luxor with ${amount} SOL! 🚀`
      }
    });

    return NextResponse.json(payload, { headers: ACTIONS_CORS_HEADERS });
  } catch (err) {
    console.error("POST /api/actions/donate error:", err);
    return NextResponse.json(
      { error: "Failed to create transaction" },
      { status: 500, headers: ACTIONS_CORS_HEADERS }
    );
  }
};

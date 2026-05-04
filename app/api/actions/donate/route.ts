import {
  ActionGetResponse,
  ActionPostRequest,
  ActionPostResponse,
  ACTIONS_CORS_HEADERS,
  BLOCKCHAIN_IDS,
} from "@solana/actions";
import {
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
  SystemProgram,
  TransactionMessage,
  VersionedTransaction,
} from "@solana/web3.js";

const BLOCKCHAIN = BLOCKCHAIN_IDS.mainnet;
const TREASURY_WALLET = "FEARFtN9VueEFVDCahtoWGu1A8Xdsmr2et3iWqAVo6hg";

const headers = {
  ...ACTIONS_CORS_HEADERS,
  "x-blockchain-ids": BLOCKCHAIN,
  "x-action-version": "2.4",
};

export const OPTIONS = async () => {
  return new Response(null, { headers });
};

export const GET = async (req: Request) => {
  try {
    const payload: ActionGetResponse = {
      type: "action",
      icon: new URL("/assets/icons/lxr_logo.png", req.url).toString(),
      title: "Support Luxor Development",
      description: "Contribute SOL to the Luxor Treasury via Squads Multisig",
      label: "Donate SOL",
      links: {
        actions: [
          {
            type: "transaction",
            label: "0.1 SOL",
            href: "/api/actions/donate?amount=0.1",
          },
          {
            type: "transaction",
            label: "0.5 SOL",
            href: "/api/actions/donate?amount=0.5",
          },
          {
            type: "transaction",
            label: "1 SOL",
            href: "/api/actions/donate?amount=1",
          },
          {
            type: "transaction",
            label: "Custom Amount",
            href: "/api/actions/donate?amount={amount}",
            parameters: [
              {
                name: "amount",
                label: "Enter SOL amount",
                required: true,
                type: "number",
              },
            ],
          },
        ],
      },
    };

    return Response.json(payload, { headers, status: 200 });
  } catch (err) {
    console.error("GET error:", err);
    return Response.json(
      { error: "Failed to fetch action metadata" },
      { headers, status: 500 }
    );
  }
};

export const POST = async (req: Request) => {
  try {
    const url = new URL(req.url);
    const amountParam = url.searchParams.get("amount");

    if (!amountParam) {
      return Response.json(
        { error: "Missing amount parameter" },
        { headers, status: 400 }
      );
    }

    const amount = parseFloat(amountParam);
    if (isNaN(amount) || amount <= 0) {
      return Response.json(
        { error: "Invalid amount" },
        { headers, status: 400 }
      );
    }

    const body: ActionPostRequest = await req.json();
    const payer = new PublicKey(body.account);
    const receiver = new PublicKey(TREASURY_WALLET);

    const connection = new Connection(
      process.env.NEXT_PUBLIC_RPC_URL || "https://api.mainnet-beta.solana.com"
    );

    // Create transfer instruction
    const instruction = SystemProgram.transfer({
      fromPubkey: payer,
      toPubkey: receiver,
      lamports: Math.floor(amount * LAMPORTS_PER_SOL),
    });

    // Get latest blockhash
    const { blockhash } = await connection.getLatestBlockhash();

    // Create transaction message
    const message = new TransactionMessage({
      payerKey: payer,
      recentBlockhash: blockhash,
      instructions: [instruction],
    }).compileToV0Message();

    // Create versioned transaction
    const transaction = new VersionedTransaction(message);

    // Serialize transaction to base64
    const serializedTransaction = Buffer.from(
      transaction.serialize()
    ).toString("base64");

    const payload: ActionPostResponse = {
      type: "transaction",
      transaction: serializedTransaction,
      message: `Thank you for supporting Luxor with ${amount} SOL! 🚀`,
    };

    return Response.json(payload, { headers, status: 200 });
  } catch (err) {
    console.error("POST error:", err);
    return Response.json(
      { error: "Failed to create transaction" },
      { headers, status: 500 }
    );
  }
};

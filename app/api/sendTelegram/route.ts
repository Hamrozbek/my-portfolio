import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json();

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    console.log("TOKEN:", token);
    console.log("CHAT:", chatId);

    if (!token || !chatId) {
        return NextResponse.json(
            { success: false, error: "Bot token or chat ID missing" },
            { status: 500 }
        );
    }

    const text = `📩 New message from Portfolio:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

    try {
        const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text }),
        });

        const data = await res.json();
        console.log("Telegram response:", data);

        if (!res.ok) {
            throw new Error("Telegram API error");
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Server error:", err);
        return NextResponse.json(
            { success: false, error: "Server error" },
            { status: 500 }
        );
    }
}

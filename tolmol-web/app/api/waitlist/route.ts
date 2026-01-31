import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email } = body;

        // 1. Setup Auth
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });
        const sheets = google.sheets({ version: "v4", auth });
        const spreadsheetId = process.env.GOOGLE_SHEET_ID;

        // 2. READ the Sheet to check duplicates
        const readResponse = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: "Sheet1!A:A", // Read only Column A (Emails)
        });

        const existingEmails = readResponse.data.values?.flat() || []; // Convert 2D array to simple list

        if (existingEmails.includes(email)) {
            // 🛑 STOP! Duplicate found.
            return NextResponse.json(
                { message: "You are already on the list!" },
                { status: 409 } // 409 = Conflict
            );
        }

        // 3. WRITE if new
        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: "Sheet1!A:B",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [[email, new Date().toISOString()]],
            },
        });

        return NextResponse.json({ success: true, message: "Welcome to the club!" });

    } catch (error: any) {
        console.error("Sheet Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
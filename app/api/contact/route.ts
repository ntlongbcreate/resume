// app/api/contact/route.ts
import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Config SMTP (Gmail example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "longnt2302@gmail.com",
        pass: "ojyg vbex sews bczb",
      },
    });

    await transporter.sendMail({
      from: email,
      to: "longnt2302@gmail.com",
      subject: `Contact form from ${name}`,
      text: message,
    });

    return NextResponse.json({ success: true, message: "Mail sent successfully" });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

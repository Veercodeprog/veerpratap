// src/app/api/email/route.ts

import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const mailOptions: Mail.Options = {
      from: `"${name}" <${email}>`,

      to: process.env.MY_EMAIL,
      subject: `New Message from ${name} (${email})`,
      text: message as string,
    };

    const sendMailPromise = () =>
      new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve("Email sent");
          } else {
            reject(err.message);
          }
        });
      });

    await sendMailPromise();

    return NextResponse.json({ success: true, message: "Email sent" });
  } catch (error: any) {
    console.error("❌ Email Error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}

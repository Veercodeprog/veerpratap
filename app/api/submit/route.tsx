// ✅ src/app/api/submit/route.ts (App Router format)

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  console.log("📥 Received Form Data:", { name, email, message });

  return NextResponse.json({
    success: true,
    message: "Form data received!",
    data: { name, email, message },
  });
}

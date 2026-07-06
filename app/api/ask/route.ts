import { NextRequest, NextResponse } from 'next/server';

const TO_EMAIL = 'phillip.yiu.pong.yuen@gmail.com';

export async function POST(request: NextRequest) {
  try {
    const { email, question } = await request.json();

    if (!email || !question) {
      return NextResponse.json({ error: 'Email and question are required' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Phil Yuen Portfolio <onboarding@resend.dev>',
        to: [TO_EMAIL],
        reply_to: email,
        subject: `Ask me anything — question from ${email}`,
        text: `From: ${email}\n\n${question}`,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send question' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

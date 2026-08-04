import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, name, email, message } = body;

    // Validate required fields
    if (type !== 'newsletter' && (!name || !email)) {
      return NextResponse.json(
        { ok: false, error: 'Name and email are required fields.' },
        { status: 400 }
      );
    }

    if (type === 'newsletter' && !email) {
      return NextResponse.json(
        { ok: false, error: 'Email address is required for newsletter subscription.' },
        { status: 400 }
      );
    }

    // Console log received inquiry (can integrate Resend / Nodemailer via process.env.SMTP_KEY)
    console.log(`[AYURAGREEN INQUIRY - ${type?.toUpperCase() || 'GENERAL'}]`, {
      timestamp: new Date().toISOString(),
      recipient: 'info@ayuragreenescapes.com',
      payload: body,
    });

    return NextResponse.json(
      {
        ok: true,
        message: 'Inquiry successfully received by AyuraGreen Escapes DMC.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { ok: false, error: 'Internal Server Error. Please try again later.' },
      { status: 500 }
    );
  }
}

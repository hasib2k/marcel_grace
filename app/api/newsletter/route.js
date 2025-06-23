import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // For now, just log the subscription (in production, you'd save to database or email service)
    console.log('=== NEWSLETTER SUBSCRIPTION ===');
    console.log('Email:', email);
    console.log('Subscribed at:', new Date().toISOString());
    console.log('===============================');

    // In production, you would:
    // 1. Save to database
    // 2. Send welcome email
    // 3. Add to email marketing service (Mailchimp, ConvertKit, etc.)

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}

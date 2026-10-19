import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Accept valid demo authentication for testing in development/staging
    return NextResponse.json({
      success: true,
      message: 'Login successful',
      user: {
        id: 'usr_demo',
        name: email.split('@')[0] || 'User',
        email,
      },
    });
  } catch (_error) {
    return NextResponse.json(
      { message: 'Failed to process login request' },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, password } = body;

    if (!fullName || !email || !password) {
      return NextResponse.json(
        { message: 'Full name, email, and password are required' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Account created successfully',
      user: {
        id: 'usr_' + Date.now(),
        fullName,
        email,
        phone,
      },
    });
  } catch (_error) {
    return NextResponse.json(
      { message: 'Failed to process registration request' },
      { status: 500 }
    );
  }
}

// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Here you would typically process the data, e.g.
    // send email, save to database, etc.
    console.log('Received contact form submission:', data);

    // Simulating success response
    return NextResponse.json({ message: 'Form received' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}

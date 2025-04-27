import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const headers = request.headers;
  const ip =
    headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    headers.get('x-real-ip') ||
    headers.get('x-vercel-forwarded-for')?.split(',')[0].trim() ||
    '0.0.0.0';

  return NextResponse.json({ ip });
}

import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import {
  ADMIN_COOKIE,
  SESSION_MAX_AGE,
  adminConfigured,
  checkPassword,
  makeSessionToken,
} from '../../../lib/admin';
import { OVERRIDES_COOKIE } from '../../../lib/flags';

export async function POST(request: NextRequest) {
  if (!adminConfigured()) {
    return NextResponse.json(
      { error: 'Admin is not configured. Set the ADMIN_PASSWORD environment variable.' },
      { status: 503 },
    );
  }

  const body = await request.json().catch(() => null);
  const password = typeof body?.password === 'string' ? body.password : '';

  if (!checkPassword(password)) {
    return NextResponse.json({ error: 'Wrong password.' }, { status: 401 });
  }

  const store = await cookies();
  store.set(ADMIN_COOKIE, makeSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: SESSION_MAX_AGE,
    path: '/',
  });
  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  const store = await cookies();
  store.delete(ADMIN_COOKIE);
  store.delete(OVERRIDES_COOKIE);
  return NextResponse.json({ ok: true });
}

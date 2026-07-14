import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { isAdmin } from '../../../lib/admin';
import { FLAG_DEFS, FlagKey, OVERRIDES_COOKIE } from '../../../lib/flags';

const YEAR = 60 * 60 * 24 * 365;

/** Set (value: boolean) or clear (value: null) a per-browser flag override. */
export async function POST(request: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Not signed in.' }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const key = body?.key as string | undefined;
  const value = body?.value as boolean | null | undefined;

  if (!key || !(key in FLAG_DEFS) || (typeof value !== 'boolean' && value !== null)) {
    return NextResponse.json({ error: 'Invalid flag or value.' }, { status: 400 });
  }

  const store = await cookies();
  let overrides: Record<string, boolean> = {};
  try {
    overrides = JSON.parse(store.get(OVERRIDES_COOKIE)?.value ?? '{}');
  } catch {
    overrides = {};
  }

  if (value === null) {
    delete overrides[key as FlagKey];
  } else {
    overrides[key as FlagKey] = value;
  }

  if (Object.keys(overrides).length === 0) {
    store.delete(OVERRIDES_COOKIE);
  } else {
    store.set(OVERRIDES_COOKIE, JSON.stringify(overrides), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: YEAR,
      path: '/',
    });
  }
  return NextResponse.json({ ok: true, overrides });
}

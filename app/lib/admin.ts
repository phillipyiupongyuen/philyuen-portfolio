import 'server-only';
import { createHmac, timingSafeEqual } from 'crypto';
import { cookies } from 'next/headers';

export const ADMIN_COOKIE = 'phil_admin';
export const SESSION_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

function hmac(payload: string, key: string) {
  return createHmac('sha256', key).update(payload).digest('hex');
}

export function adminConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD);
}

export function checkPassword(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const a = Buffer.from(password);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

/** Token format: "<expiry-epoch-ms>.<hmac(expiry, ADMIN_PASSWORD)>" */
export function makeSessionToken(): string {
  const exp = String(Date.now() + SESSION_MAX_AGE * 1000);
  return `${exp}.${hmac(exp, process.env.ADMIN_PASSWORD!)}`;
}

export function verifySessionToken(token: string | undefined): boolean {
  const key = process.env.ADMIN_PASSWORD;
  if (!token || !key) return false;
  const [exp, sig] = token.split('.');
  if (!exp || !sig) return false;
  if (Number(exp) < Date.now()) return false;
  const expected = hmac(exp, key);
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function isAdmin(): Promise<boolean> {
  const store = await cookies();
  return verifySessionToken(store.get(ADMIN_COOKIE)?.value);
}

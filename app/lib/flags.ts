import 'server-only';
import { cookies } from 'next/headers';
import { isAdmin } from './admin';

/**
 * Feature-flag registry. Effective value is resolved in order:
 *   1. Admin browser override (set from /admin, cookie-scoped preview)
 *   2. FLAG_* environment variable ("true"/"false", set in Vercel — affects everyone)
 *   3. The default below (affects everyone)
 */
export const FLAG_DEFS = {
  'award-spotlight': {
    label: 'Good Design Award spotlight',
    description: 'The centred award section on the homepage',
    default: true,
  },
  'award-marquee': {
    label: 'Award marquee band',
    description: 'The rotated pink marquee on the homepage',
    default: true,
  },
  'claude-code-page': {
    label: 'Claude Code case study',
    description: 'The /claude-code page (404s when off)',
    default: true,
  },
  'screening-tool': {
    label: 'Screening Response Generator',
    description: 'The /tools/screening-response-gen page (404s when off)',
    default: true,
  },
} as const;

export type FlagKey = keyof typeof FLAG_DEFS;
export const FLAG_KEYS = Object.keys(FLAG_DEFS) as FlagKey[];
export const OVERRIDES_COOKIE = 'phil_flag_overrides';

export function envName(key: FlagKey): string {
  return 'FLAG_' + key.toUpperCase().replace(/-/g, '_');
}

export function envOverride(key: FlagKey): boolean | undefined {
  const raw = process.env[envName(key)];
  if (raw === 'true') return true;
  if (raw === 'false') return false;
  return undefined;
}

export async function cookieOverrides(): Promise<Partial<Record<FlagKey, boolean>>> {
  if (!(await isAdmin())) return {};
  const store = await cookies();
  const raw = store.get(OVERRIDES_COOKIE)?.value;
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const out: Partial<Record<FlagKey, boolean>> = {};
    for (const key of FLAG_KEYS) {
      if (typeof parsed[key] === 'boolean') out[key] = parsed[key] as boolean;
    }
    return out;
  } catch {
    return {};
  }
}

export async function getFlags(): Promise<Record<FlagKey, boolean>> {
  const overrides = await cookieOverrides();
  const out = {} as Record<FlagKey, boolean>;
  for (const key of FLAG_KEYS) {
    out[key] = overrides[key] ?? envOverride(key) ?? FLAG_DEFS[key].default;
  }
  return out;
}

export async function getFlag(key: FlagKey): Promise<boolean> {
  return (await getFlags())[key];
}

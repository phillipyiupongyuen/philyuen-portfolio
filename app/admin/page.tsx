import type { Metadata } from 'next';
import { adminConfigured, isAdmin } from '../lib/admin';
import { FLAG_DEFS, FLAG_KEYS, cookieOverrides, envName, envOverride } from '../lib/flags';
import AdminLogin from './AdminLogin';
import AdminDashboard, { FlagRow } from './AdminDashboard';

export const metadata: Metadata = {
  title: 'Admin | Phil Yuen',
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const admin = await isAdmin();

  if (!admin) {
    return <AdminLogin configured={adminConfigured()} />;
  }

  const overrides = await cookieOverrides();
  const rows: FlagRow[] = FLAG_KEYS.map((key) => {
    const env = envOverride(key);
    const override = overrides[key];
    return {
      key,
      label: FLAG_DEFS[key].label,
      description: FLAG_DEFS[key].description,
      defaultValue: FLAG_DEFS[key].default,
      envValue: env ?? null,
      envName: envName(key),
      override: override ?? null,
      effective: override ?? env ?? FLAG_DEFS[key].default,
    };
  });

  return <AdminDashboard rows={rows} />;
}

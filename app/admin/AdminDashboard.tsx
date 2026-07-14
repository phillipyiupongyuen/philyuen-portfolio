'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export interface FlagRow {
  key: string;
  label: string;
  description: string;
  defaultValue: boolean;
  envValue: boolean | null;
  envName: string;
  override: boolean | null;
  effective: boolean;
}

function Pill({ on }: { on: boolean }) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-[0.05em] text-white ${
        on ? 'bg-[#2400ff]' : 'bg-[#555] dark:bg-[#3a3833]'
      }`}
    >
      {on ? 'On' : 'Off'}
    </span>
  );
}

export default function AdminDashboard({ rows }: { rows: FlagRow[] }) {
  const router = useRouter();
  const [busyKey, setBusyKey] = useState<string | null>(null);

  const setOverride = async (key: string, value: boolean | null) => {
    setBusyKey(key);
    await fetch('/api/admin/flags', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key, value }),
    }).catch(() => null);
    setBusyKey(null);
    router.refresh();
  };

  const logout = async () => {
    await fetch('/api/admin/login', { method: 'DELETE' }).catch(() => null);
    router.refresh();
  };

  const btn = (active: boolean) =>
    `rounded-full border-2 px-3.5 py-1.5 text-xs font-extrabold transition-colors ${
      active
        ? 'border-[#2400ff] bg-[#2400ff] text-white'
        : 'border-[#0a0a0a] bg-transparent text-[#0a0a0a] hover:border-[#2400ff] hover:text-[#2400ff] dark:border-[#f4f2ec] dark:text-[#f4f2ec] dark:hover:border-[#9d8bff] dark:hover:text-[#9d8bff]'
    }`;

  return (
    <div
      className="min-h-screen bg-white text-[#0a0a0a] dark:bg-[#121210] dark:text-[#f4f2ec]"
      style={{ fontFamily: "var(--font-archivo), 'Helvetica Neue', sans-serif" }}
    >
      <nav className="flex items-center justify-between border-b-2 border-[#0a0a0a] px-6 py-5 dark:border-[#f4f2ec] md:px-12">
        <Link href="/" className="text-lg font-extrabold">
          Phil Yuen · Admin
        </Link>
        <div className="flex items-center gap-6 text-sm font-semibold">
          <Link href="/" className="transition-colors hover:text-[#2400ff] dark:hover:text-[#9d8bff]">
            ← Back to site
          </Link>
          <button
            onClick={logout}
            className="rounded-full border-2 border-[#0a0a0a] px-4 py-1.5 font-extrabold transition-colors hover:border-[#ff4f87] hover:text-[#ff4f87] dark:border-[#f4f2ec]"
          >
            Log out
          </button>
        </div>
      </nav>

      <main className="mx-auto w-full max-w-[860px] px-6 pb-20 pt-12">
        <h1 className="mb-2 text-3xl font-extrabold">Feature flags</h1>
        <p className="mb-8 max-w-[640px] text-[15px] leading-relaxed text-[#555] dark:text-[#b3afa6]">
          <strong>On / Off</strong> set a preview override that applies only in this browser — use it to try an
          experience before shipping it. <strong>Default</strong> clears the override. To change what everyone sees,
          set the flag&apos;s environment variable in Vercel (values <code className="font-mono">true</code>/
          <code className="font-mono">false</code>) and redeploy, or change the default in{' '}
          <code className="font-mono">app/lib/flags.ts</code>.
        </p>

        <div className="flex flex-col gap-4">
          {rows.map((row) => (
            <div
              key={row.key}
              className="rounded-xl border-2 border-[#0a0a0a] p-5 dark:border-[#f4f2ec] dark:bg-[#1a1918]"
            >
              <div className="mb-1 flex flex-wrap items-center justify-between gap-3">
                <div className="text-lg font-extrabold">{row.label}</div>
                <Pill on={row.effective} />
              </div>
              <div className="mb-3 text-sm text-[#555] dark:text-[#b3afa6]">{row.description}</div>
              <div className="mb-4 font-mono text-xs text-[#555] dark:text-[#b3afa6]">
                default: {String(row.defaultValue)} · env {row.envName}:{' '}
                {row.envValue === null ? 'not set' : String(row.envValue)} · this browser:{' '}
                {row.override === null ? 'no override' : String(row.override)}
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  disabled={busyKey === row.key}
                  onClick={() => setOverride(row.key, true)}
                  className={btn(row.override === true)}
                >
                  On
                </button>
                <button
                  disabled={busyKey === row.key}
                  onClick={() => setOverride(row.key, false)}
                  className={btn(row.override === false)}
                >
                  Off
                </button>
                <button
                  disabled={busyKey === row.key}
                  onClick={() => setOverride(row.key, null)}
                  className={btn(row.override === null)}
                >
                  Default
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

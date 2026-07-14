'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin({ configured }: { configured: boolean }) {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError('');
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    }).catch(() => null);
    setBusy(false);
    if (res?.ok) {
      router.refresh();
    } else {
      const data = await res?.json().catch(() => null);
      setError(data?.error ?? 'Something went wrong.');
    }
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-white px-6 text-[#0a0a0a] dark:bg-[#121210] dark:text-[#f4f2ec]"
      style={{ fontFamily: "var(--font-archivo), 'Helvetica Neue', sans-serif" }}
    >
      <form
        onSubmit={submit}
        className="w-full max-w-sm border-2 border-[#0a0a0a] bg-white p-8 dark:border-[#f4f2ec] dark:bg-[#1a1918]"
      >
        <h1 className="mb-1 text-2xl font-extrabold">Admin</h1>
        <p className="mb-6 text-sm text-[#555] dark:text-[#b3afa6]">
          This area is for Phil only.
        </p>
        {configured ? (
          <>
            <label htmlFor="admin-password" className="mb-2 block text-xs font-extrabold uppercase tracking-[0.1em]">
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              className="mb-4 w-full border-2 border-[#0a0a0a] bg-white px-3 py-2 text-base outline-none focus:border-[#2400ff] dark:border-[#f4f2ec] dark:bg-[#121210] dark:focus:border-[#9d8bff]"
            />
            {error && <p className="mb-4 text-sm font-semibold text-[#ff4f87]">{error}</p>}
            <button
              type="submit"
              disabled={busy || !password}
              className="w-full rounded-full bg-[#0a0a0a] px-5 py-2.5 font-extrabold text-white transition-colors hover:bg-[#2400ff] disabled:opacity-50 dark:bg-[#f4f2ec] dark:text-[#0a0a0a] dark:hover:bg-[#9d8bff] dark:hover:text-white"
            >
              {busy ? 'Signing in…' : 'Sign in'}
            </button>
          </>
        ) : (
          <p className="text-sm leading-relaxed text-[#555] dark:text-[#b3afa6]">
            Admin is not configured yet. Set the <code className="font-mono font-bold">ADMIN_PASSWORD</code>{' '}
            environment variable (in Vercel: Project → Settings → Environment Variables), then redeploy.
          </p>
        )}
      </form>
    </div>
  );
}

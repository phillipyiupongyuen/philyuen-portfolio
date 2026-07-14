'use client';

import { useEffect, useState } from 'react';

function systemPrefersDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Light/dark toggle. Defaults to the system preference; an explicit choice is
 * stored in localStorage. Choosing the theme that matches the system clears
 * the stored value, so the site follows the OS again.
 */
export default function ThemeToggle({ className = '' }: { className?: string }) {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onSystemChange = (e: MediaQueryListEvent) => {
      if (!localStorage.theme) {
        document.documentElement.classList.toggle('dark', e.matches);
        setDark(e.matches);
      }
    };
    mq.addEventListener('change', onSystemChange);
    return () => mq.removeEventListener('change', onSystemChange);
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    if (next === systemPrefersDark()) {
      localStorage.removeItem('theme');
    } else {
      localStorage.theme = next ? 'dark' : 'light';
    }
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${className}`}
    >
      {/* Render both icons; CSS decides visibility so SSR markup never mismatches */}
      <svg
        className="hidden h-[18px] w-[18px] dark:block"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41" />
      </svg>
      <svg
        className="h-[18px] w-[18px] dark:hidden"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}

'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

type NavItem = 'work' | 'tool' | 'about' | 'ask';

const LINKS: { key: NavItem; label: string; href: string }[] = [
  { key: 'work', label: 'Work', href: '/#work' },
  { key: 'tool', label: 'Tool', href: '/tools/screening-response-gen' },
  { key: 'about', label: 'About', href: '/#about' },
  { key: 'ask', label: 'Get in touch', href: '/#ask' },
];

export default function WarmNav({ active }: { active: NavItem }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-[#e8e1d6] dark:border-[#37322b] px-6 py-5 md:px-16">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="text-[22px] font-semibold tracking-tight text-[#211a13] dark:text-[#ece5da]"
          style={{ fontFamily: 'var(--font-newsreader), serif' }}
        >
          Phil Yuen
        </Link>

        <div className="hidden md:flex items-center gap-9 text-[15px]">
          {LINKS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={
                item.key === active
                  ? 'font-semibold text-[#c2410c] dark:text-[#fb923c]'
                  : 'text-[#5d554b] dark:text-[#a89f92] hover:text-[#211a13] dark:hover:text-[#ece5da] transition-colors'
              }
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle className="text-[#5d554b] hover:text-[#211a13] dark:text-[#a89f92] dark:hover:text-[#ece5da]" />
        </div>

        <div className="md:hidden flex items-center gap-2">
        <ThemeToggle className="text-[#5d554b] dark:text-[#a89f92]" />
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-[#5d554b] dark:text-[#a89f92]"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-[15px]">
          {LINKS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setOpen(false)}
              className={item.key === active ? 'font-semibold text-[#c2410c] dark:text-[#fb923c]' : 'text-[#5d554b] dark:text-[#a89f92]'}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121210] sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="font-semibold text-lg tracking-tight hover:text-accent transition-colors">
            Phil Yuen
          </Link>
          <a
            href="https://good-design.org/projects/strongpro-ai-empowering-healthcare-heroes-for-healthier-communities/"
            target="_blank"
            rel="noopener noreferrer"
            title="Good Design Award — Social Impact, 2024"
            className="shrink-0 transition-opacity hover:opacity-70"
          >
            <Image
              src="/images/projects/good-design-award-badge.png"
              alt="Good Design Award Winner — Social Impact, 2024"
              width={552}
              height={231}
              className="h-6 w-auto dark:invert"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-accent">
            Work
          </Link>
          <Link href="/tools/screening-response-gen" className="text-sm text-gray-600 dark:text-gray-400 hover:text-accent">
            Tools
          </Link>
          <Link href="/claude-code" className="text-sm text-gray-600 dark:text-gray-400 hover:text-accent">
            Claude Code
          </Link>
          <Link href="/#about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-accent">
            About
          </Link>
          <a
            href="https://linkedin.com/in/phillipyuen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-accent"
          >
            LinkedIn
          </a>
          <ThemeToggle className="text-gray-600 dark:text-gray-400 hover:text-accent" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
        <ThemeToggle className="text-gray-600 dark:text-gray-400 hover:text-accent" />
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-600 dark:text-gray-400 hover:text-accent"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121210]">
          <div className="px-6 py-4 space-y-4">
            <Link
              href="/projects"
              className="block text-sm text-gray-600 dark:text-gray-400 hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Work
            </Link>
            <Link
              href="/tools/screening-response-gen"
              className="block text-sm text-gray-600 dark:text-gray-400 hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tools
            </Link>
            <Link
              href="/claude-code"
              className="block text-sm text-gray-600 dark:text-gray-400 hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Claude Code
            </Link>
            <Link
              href="/#about"
              className="block text-sm text-gray-600 dark:text-gray-400 hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <a
              href="https://linkedin.com/in/phillipyuen"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-gray-600 dark:text-gray-400 hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getFlag } from '../lib/flags';
import ClaudeCodeContent from './ClaudeCodeContent';

export const metadata: Metadata = {
  title: 'Claude Code Case Study | Phil Yuen',
  description: 'How I used Claude Code to scale my job search — 50+ tailored applications.',
};

export default async function ClaudeCodePage() {
  if (!(await getFlag('claude-code-page'))) notFound();
  return <ClaudeCodeContent />;
}

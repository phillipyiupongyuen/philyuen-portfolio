import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getFlag } from '../../lib/flags';
import ScreeningToolContent from './ScreeningToolContent';

export const metadata: Metadata = {
  title: 'Screening Response Generator | Phil Yuen',
  description: 'Paste a PM screening question, get two tailored draft answers powered by the Claude API.',
};

export default async function ScreeningToolPage() {
  if (!(await getFlag('screening-tool'))) notFound();
  return <ScreeningToolContent />;
}

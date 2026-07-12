import type { Metadata } from 'next';
import ChapterLayout from '../../components/ChapterLayout';

export const metadata: Metadata = {
  title: 'Revision3 (SBX) | Phil Yuen',
  description: 'Chapter 5 — Growth and compliance for the Canadian market.',
};

export default function Revision3Page() {
  return (
    <ChapterLayout
      num={5}
      years="2024 – 2025"
      title="Revision3 (SBX)"
      role="Product Manager"
      intro="Growth and compliance for the Canadian market."
      heroLabel="hero — product screenshot"
      bullets={['Lifted retention 25% and daily active users 30%.', 'Owned Canadian regulatory compliance.']}
      artifactLabels={['artifact', 'artifact']}
      prev={{ href: '/projects/cliniscribe-ai', kicker: '← Chapter 4 · 2024–25', title: 'CliniScribe AI' }}
      next={{ href: '/projects/sigma-healthcare', kicker: 'Chapter 6 · 2025–26 →', title: 'Sigma Healthcare' }}
    />
  );
}

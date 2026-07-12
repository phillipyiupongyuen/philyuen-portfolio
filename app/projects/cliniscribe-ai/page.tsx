import type { Metadata } from 'next';
import ChapterLayout from '../../components/ChapterLayout';

export const metadata: Metadata = {
  title: 'CliniScribe AI | Phil Yuen',
  description:
    'Chapter 4 — Voice-to-text clinical AI. Back to healthtech, this time at the head of the product function.',
};

export default function CliniScribePage() {
  return (
    <ChapterLayout
      num={4}
      years="2024 – 2025"
      title="CliniScribe AI"
      role="Head of Product"
      intro="Voice-to-text clinical AI — back to healthtech, this time at the head of the product function."
      heroLabel="hero — product screenshot"
      bullets={[
        "Shipped the company's first voice-to-text clinical AI API.",
        'Built an agentic platform that cut manual intervention 40%.',
      ]}
      artifactLabels={['artifact', 'artifact']}
      prev={{ href: '/projects/strongroom-ai', kicker: '← Chapter 3 · 2023–24', title: 'StrongRoom AI' }}
      next={{ href: '/projects/revision3', kicker: 'Chapter 5 · 2024–25 →', title: 'Revision3 (SBX)' }}
    />
  );
}

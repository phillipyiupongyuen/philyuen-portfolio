import type { Metadata } from 'next';
import ChapterLayout from '../../components/ChapterLayout';

export const metadata: Metadata = {
  title: 'StrongRoom AI | Phil Yuen',
  description:
    'Chapter 3 — AI-powered clinical decision support for aged care. 500% growth in six months and a Good Design Award.',
};

export default function StrongRoomPage() {
  return (
    <ChapterLayout
      num={3}
      years="2023 – 2024"
      title="StrongRoom AI"
      role="Group AI Product Manager"
      award="🏆 Good Design Award — Social Impact, 2024"
      intro="AI-powered clinical decision support for aged care."
      heroLabel="hero — product screenshot"
      bullets={[
        'Grew the platform 500% in six months — from 80 to 400 businesses.',
        'Won the Good Design Award (Social Impact) for clinical safety outcomes.',
        'Led a multi-squad roadmap across US and UK market expansion.',
      ]}
      differently="Invest in self-serve onboarding sooner — growth outpaced our implementation team."
      artifactLabels={['award / press photo', 'artifact']}
      prev={{ href: '/projects/phoria', kicker: '← Chapter 2 · 2022–23', title: 'Phoria' }}
      next={{ href: '/projects/cliniscribe-ai', kicker: 'Chapter 4 · 2024–25 →', title: 'CliniScribe AI' }}
    />
  );
}

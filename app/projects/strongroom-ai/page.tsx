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
      awardHref="https://good-design.org/projects/strongpro-ai-empowering-healthcare-heroes-for-healthier-communities/"
      intro="AI-powered clinical decision support for aged care."
      heroLabel="hero — product screenshot"
      heroImage={{
        src: '/images/projects/strongroom-hero.jpg',
        alt: 'StrongPro product screens — AI-powered clinical decision support platform',
      }}
      bullets={[
        'Grew the platform 500% in six months — from 80 to 400 businesses.',
        'Won the Good Design Award (Social Impact) for clinical safety outcomes.',
        'Led a multi-squad roadmap across US and UK market expansion.',
      ]}
      differently="Invest in self-serve onboarding sooner — growth outpaced our implementation team."
      artifactLabels={['award / press photo', 'artifact']}
      artifactImages={[
        {
          src: '/images/projects/strongroom-pharmacy.jpg',
          alt: 'StrongPro in use at a pharmacy — Good Design Award project photo',
        },
        {
          src: '/images/projects/strongroom-dashboard.jpg',
          alt: 'StrongPro analytics dashboard',
        },
      ]}
      prev={{ href: '/projects/phoria', kicker: '← Chapter 2 · 2022–23', title: 'Phoria' }}
      next={{ href: '/projects/cliniscribe-ai', kicker: 'Chapter 4 · 2024–25 →', title: 'CliniScribe AI' }}
    />
  );
}

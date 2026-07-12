import type { Metadata } from 'next';
import ChapterLayout from '../../components/ChapterLayout';

export const metadata: Metadata = {
  title: 'countfor.me | Phil Yuen',
  description: 'Chapter 7 — The current chapter: founding a hospitality fintech for the Japanese market.',
};

export default function CountForMePage() {
  return (
    <ChapterLayout
      num={7}
      years="2026 – present"
      title="countfor.me"
      role="Co-Founder & Product Lead"
      intro="The current chapter: founding a hospitality fintech for the Japanese market."
      heroLabel="hero — product screenshot"
      didTitle="What I'm doing"
      bullets={[
        'Own end-to-end product and commercial strategy for market entry.',
        'Built and lead a team of 8 university-funded volunteer interns.',
        'Running tight build–measure–learn loops with early users.',
      ]}
      differently="Too early to say — I'm in the trenches now. Ask me in a year."
      artifactLabels={['product screenshot', 'team photo']}
      prev={{ href: '/projects/sigma-healthcare', kicker: '← Chapter 6 · 2025–26', title: 'Sigma Healthcare' }}
      next={{
        href: 'mailto:phillip.yiu.pong.yuen@gmail.com',
        kicker: "That's the whole story →",
        title: '✉ Ask me anything',
        mailto: true,
      }}
    />
  );
}

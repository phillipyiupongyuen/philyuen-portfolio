import type { Metadata } from 'next';
import ChapterLayout from '../../components/ChapterLayout';

export const metadata: Metadata = {
  title: 'Sigma Healthcare | Phil Yuen',
  description: 'Chapter 6 — National pharmacy wholesaler modernising its data estate.',
};

export default function SigmaPage() {
  return (
    <ChapterLayout
      num={6}
      years="2025 – 2026"
      title="Sigma Healthcare"
      role="Senior Data Platform Product Manager"
      intro="National pharmacy wholesaler modernising its data estate."
      heroLabel="hero — platform / dashboard screenshot"
      bullets={[
        'Shipped a national Snowflake platform — Medallion architecture with dbt, Fivetran and Airflow.',
        'Owned the roadmap across Commercial, Finance and Supply Chain domains.',
        'Established governance and trust frameworks now steering national supply-chain decisions.',
      ]}
      differently="Bring business domain owners into the data modelling process earlier."
      artifactLabels={['architecture diagram', 'roadmap artifact']}
      prev={{ href: '/projects/revision3', kicker: '← Chapter 5 · 2024–25', title: 'Revision3 (SBX)' }}
      next={{ href: '/projects/countfor-me', kicker: 'Chapter 7 · 2026 →', title: 'countfor.me' }}
    />
  );
}

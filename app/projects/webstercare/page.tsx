import type { Metadata } from 'next';
import ChapterLayout from '../../components/ChapterLayout';

export const metadata: Metadata = {
  title: 'Webstercare | Phil Yuen',
  description:
    'Chapter 1 — Where a registered pharmacist became a product leader. Medication management software for aged care, used nationwide.',
};

export default function WebstercarePage() {
  return (
    <ChapterLayout
      num={1}
      years="2016 – 2022"
      title="Webstercare"
      role="Group Product Owner"
      intro="Where a registered pharmacist became a product leader. Medication management software for aged care, used nationwide."
      heroLabel="hero — product screenshot or team photo"
      bullets={[
        'Led a legacy platform migration across a national clinical provider network.',
        'Secured $5M in aged-care contracts and grew platform revenue 10%.',
        'Owned HIPAA/GDPR compliance for clinical data at scale.',
      ]}
      differently="Push for incremental migration earlier, instead of a big-bang cutover."
      artifactLabels={['artifact', 'artifact']}
      prev={{ href: '/#work', kicker: '← Start', title: 'Back to the timeline' }}
      next={{ href: '/projects/phoria', kicker: 'Chapter 2 · 2022–23 →', title: 'Phoria' }}
    />
  );
}

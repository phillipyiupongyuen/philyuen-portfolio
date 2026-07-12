import type { Metadata } from 'next';
import ChapterLayout from '../../components/ChapterLayout';

export const metadata: Metadata = {
  title: 'Phoria | Phil Yuen',
  description: 'Chapter 2 — AR and spatial computing, from clinical software to entirely new mediums.',
};

export default function PhoriaPage() {
  return (
    <ChapterLayout
      num={2}
      years="2022 – 2023"
      title="Phoria"
      role="Group Product Manager"
      intro="AR and spatial computing — from clinical software to entirely new mediums."
      heroLabel="hero — AR experience photo"
      bullets={[
        'Drove 20% adoption growth across AR and spatial computing products.',
        'Deployed immersive experiences at the Australian Museum.',
      ]}
      artifactLabels={['artifact', 'artifact']}
      prev={{ href: '/projects/webstercare', kicker: '← Chapter 1 · 2016–22', title: 'Webstercare' }}
      next={{ href: '/projects/strongroom-ai', kicker: 'Chapter 3 · 2023–24 →', title: 'StrongRoom AI' }}
    />
  );
}

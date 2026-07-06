import type { Metadata } from 'next';
import { Newsreader } from 'next/font/google';
import './globals.css';

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Phil Yuen | Product Manager & Builder',
  description:
    'Senior Product Manager. Healthtech → Data Platforms → AI. StrongRoom AI (500% growth, Good Design Award). Sigma Healthcare. countfor.me Co-Founder.',
  openGraph: {
    title: 'Phil Yuen | Product Manager',
    description: 'Senior Product Manager with 8+ years in healthtech, data platforms, and AI products.',
    url: 'https://philyuen.com',
    siteName: 'Phil Yuen',
    images: [
      {
        url: 'https://philyuen.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phil Yuen | Product Manager',
    description: 'Senior PM. Built $1.5M ARR products. Data platforms. Clinical software.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`antialiased ${newsreader.variable}`}>
        {children}
      </body>
    </html>
  );
}

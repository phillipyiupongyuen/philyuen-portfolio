import type { Metadata } from 'next';
import { Archivo, Newsreader } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
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

// Runs before paint: applies the stored theme, or the system preference when
// none is stored, so there is no light/dark flash on load.
const themeInitScript = `(function(){try{var t=localStorage.theme;var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`antialiased ${newsreader.variable} ${archivo.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

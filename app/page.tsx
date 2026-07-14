import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from './components/ThemeToggle';
import { getFlags } from './lib/flags';

const serif = { fontFamily: 'var(--font-newsreader), serif' };

const GOOD_DESIGN_AWARD_URL =
  'https://good-design.org/projects/strongpro-ai-empowering-healthcare-heroes-for-healthier-communities/';

const works = [
  {
    num: '07',
    href: '/projects/countfor-me',
    headline: 'Founding a hospo-fintech app for the Aussie & Japanese market.',
    company: 'countfor.me',
    role: 'Co-Founder & Product Lead',
    years: '2026 –',
    award: false,
  },
  {
    num: '06',
    href: '/projects/sigma-healthcare',
    headline: 'Shipped a national Snowflake data platform during a merger',
    company: 'Sigma Healthcare/Chemist Warehouse',
    role: 'Senior Data Platform PM',
    years: '2025 – 26',
    award: false,
  },
  {
    num: '05',
    href: '/projects/revision3',
    headline: 'Lifted retention 25% and DAU 30% in multiple regions',
    company: 'Revision3 (SBX)',
    role: 'Product Manager',
    years: '2024 – 25',
    award: false,
  },
  {
    num: '04',
    href: '/projects/cliniscribe-ai',
    headline: 'First voice-to-text physio AI API - manual work cut 40%.',
    company: 'CliniScribe AI',
    role: 'Head of Product',
    years: '2024 – 25',
    award: false,
  },
  {
    num: '03',
    href: '/projects/strongroom-ai',
    headline: 'Grew an AI clinical platform 500% in six months.',
    company: 'StrongRoom AI',
    role: 'Group AI Product Manager',
    years: '2023 – 24',
    award: true,
  },
  {
    num: '02',
    href: '/projects/phoria',
    headline: 'Took AR and spatial computing to the Australian Museum.',
    company: 'Phoria',
    role: 'Group Product Manager',
    years: '2022 – 23',
    award: false,
  },
  {
    num: '01',
    href: '/projects/webstercare',
    headline: 'Where a pharmacist became a product leader — $5M in contracts.',
    company: 'Webstercare',
    role: 'Group Product Owner',
    years: '2016 – 22',
    award: false,
  },
];

const facts = [
  { label: 'Speciality', value: 'Product · Data · AI', hover: 'blue' },
  { label: 'Background', value: 'Registered pharmacist', hover: 'pink' },
  { label: 'Location', value: 'Melbourne, AU', hover: 'blue' },
  { label: 'Experience', value: '8+ years', hover: 'pink' },
  { label: 'Proof', value: '$1.5M ARR built', hover: 'blue' },
  { label: 'Availability', value: 'Open to work', hover: 'pink' },
];

const careerMarquee =
  'Pharmacist ✳ Product Leader ✳ Founder ✳ Melbourne ✳ Healthtech ✳ Data ✳ AI ✳ Pharmacist ✳ Product Leader ✳ Founder ✳ Melbourne ✳ Healthtech ✳ Data ✳ AI ✳ ';

const awardMarquee =
  '🏆 Good Design Award Winner 2024 ✳ 500% growth in 6 months ✳ $5M contracts ✳ $1.5M ARR ✳ 🏆 Good Design Award Winner 2024 ✳ 500% growth in 6 months ✳ $5M contracts ✳ $1.5M ARR ✳ ';

export default async function Home() {
  const flags = await getFlags();
  return (
    <div
      className="min-h-screen bg-white dark:bg-[#121210] text-[#0a0a0a] dark:text-[#f4f2ec]"
      style={{ fontFamily: "var(--font-archivo), 'Helvetica Neue', sans-serif" }}
    >
      {/* Nav */}
      <nav className="sticky top-0 z-20 flex items-center justify-between gap-2 border-b-2 border-[#0a0a0a] dark:border-[#f4f2ec] bg-white dark:bg-[#121210] px-4 py-4 md:px-10 md:py-5">
        <div className="flex items-center gap-2 md:gap-4">
          <span className="whitespace-nowrap text-[15px] font-black tracking-[-0.01em] md:text-[17px]">
            Phil Yuen ✳
          </span>
          <a
            href={GOOD_DESIGN_AWARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Good Design Award — Social Impact, 2024"
            className="hidden shrink-0 transition-opacity hover:opacity-70 sm:block"
          >
            <Image
              src="/images/projects/good-design-award-badge.png"
              alt="Good Design Award Winner — Social Impact, 2024"
              width={552}
              height={231}
              className="h-5 w-auto dark:invert md:h-7"
            />
          </a>
        </div>
        <div className="flex items-center gap-3 text-sm font-bold md:gap-[30px]">
          <a href="#work" className="text-[#0a0a0a] dark:text-[#f4f2ec] transition-colors hover:text-[#2400ff] dark:hover:text-[#9d8bff]">
            Work
          </a>
          <a href="#about" className="text-[#0a0a0a] dark:text-[#f4f2ec] transition-colors hover:text-[#2400ff] dark:hover:text-[#9d8bff]">
            About
          </a>
          <a
            href="https://github.com/phillipyiupongyuen"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-[#0a0a0a] dark:text-[#f4f2ec] transition-colors hover:text-[#2400ff] dark:hover:text-[#9d8bff] sm:inline"
          >
            GitHub
          </a>
          <a
            href="mailto:phillip.yiu.pong.yuen@gmail.com"
            className="rounded-full bg-[#0a0a0a] px-4 py-2 text-white transition-colors hover:bg-[#2400ff] dark:bg-[#f4f2ec] dark:text-[#0a0a0a] dark:hover:bg-[#9d8bff] dark:hover:text-white md:px-5 md:py-[9px]"
          >
            Contact
          </a>
          <ThemeToggle className="text-[#0a0a0a] hover:text-[#2400ff] dark:text-[#f4f2ec] dark:hover:text-[#9d8bff]" />
        </div>
      </nav>

      {/* Marquee: career arc */}
      <div className="overflow-hidden border-b-2 border-[#0a0a0a] dark:border-[#f4f2ec] bg-[#2400ff] py-2.5 text-white">
        <div className="flex w-max animate-[mq_22s_linear_infinite]">
          <span className="whitespace-nowrap pr-10 text-[15px] font-extrabold uppercase tracking-[0.14em]">
            {careerMarquee}
          </span>
          <span aria-hidden className="whitespace-nowrap pr-10 text-[15px] font-extrabold uppercase tracking-[0.14em]">
            {careerMarquee}
          </span>
        </div>
      </div>

      {/* Statement hero */}
      <header className="mx-auto max-w-[1160px] animate-[riseUp_0.7s_cubic-bezier(0.22,1,0.36,1)_both] px-5 pb-16 pt-16 md:px-10 md:pb-20 md:pt-24">
        <h1 className="mb-10 text-[40px] font-extrabold leading-[1.12] tracking-[-0.025em] text-balance md:text-[72px]">
          <Image
            src="/images/phil-headshot.jpeg"
            alt="Phil Yuen"
            width={76}
            height={76}
            className="mr-1.5 inline-block h-12 w-12 rounded-full border-[2.5px] border-[#0a0a0a] dark:border-[#f4f2ec] object-cover align-[-9px] md:h-[76px] md:w-[76px] md:align-[-14px]"
            priority
          />
          <span>Melbourne-based </span>
          <span className="font-medium italic" style={serif}>
            product leader
          </span>
          <span> with a </span>
          <span className="inline-block -rotate-[1.2deg] bg-[#ff4f87] px-3.5 text-white">pharmacist&apos;s</span>
          <span> eye for safety and a </span>
          <span className="shadow-[inset_0_-0.22em_#d8f34e]">founder&apos;s itch to ship</span>
          <span> — real outcomes in </span>
          <span className="font-medium italic text-[#2400ff] dark:text-[#9d8bff]" style={serif}>
            regulated markets.
          </span>
        </h1>
        <div className="flex flex-wrap items-center gap-3.5">
          <a
            href="mailto:phillip.yiu.pong.yuen@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-[#2400ff] px-7 py-3.5 text-base font-extrabold text-white transition-[transform,background-color] duration-150 hover:-translate-y-0.5 hover:bg-[#ff4f87]"
          >
            ✉ Ask me anything
          </a>
          <a
            href="https://www.linkedin.com/in/phillipyuen/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#0a0a0a] dark:border-[#f4f2ec] px-[26px] py-3 text-base font-extrabold text-[#0a0a0a] dark:text-[#f4f2ec] transition-[transform,background-color,color] duration-150 hover:-translate-y-0.5 hover:bg-[#0a0a0a] hover:text-white dark:hover:bg-[#f4f2ec] dark:hover:text-[#0a0a0a]"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/phillipyiupongyuen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#0a0a0a] dark:border-[#f4f2ec] px-[26px] py-3 text-base font-extrabold text-[#0a0a0a] dark:text-[#f4f2ec] transition-[transform,background-color,color] duration-150 hover:-translate-y-0.5 hover:bg-[#0a0a0a] hover:text-white dark:hover:bg-[#f4f2ec] dark:hover:text-[#0a0a0a]"
          >
            GitHub ↗
          </a>
          <span className="ml-1.5 text-sm font-semibold text-[#555] dark:text-[#b3afa6]">Open to work + freelance digital strategy</span>
        </div>
      </header>

      {/* Work index */}
      <section id="work" className="mx-auto max-w-[1160px] px-5 pb-10 md:px-10">
        <div className="mb-2 flex items-baseline justify-between">
          <h2 className="m-0 text-[15px] font-extrabold uppercase tracking-[0.14em]">Work — 7 chapters</h2>
          <span className="text-sm font-semibold text-[#555] dark:text-[#b3afa6]">click a row for the full story</span>
        </div>

        <div className="border-t-2 border-[#0a0a0a] dark:border-[#f4f2ec]">
          {works.map((w) => (
            <Link
              key={w.num}
              href={w.href}
              className="group grid grid-cols-[48px_1fr_auto] items-center gap-4 border-b-2 border-[#0a0a0a] dark:border-[#f4f2ec] py-6 pl-3 pr-3 text-[#0a0a0a] dark:text-[#f4f2ec] transition-[background-color,color,padding-left] duration-[180ms] hover:bg-[#2400ff] hover:pl-7 hover:text-white md:grid-cols-[84px_1fr_auto] md:gap-6 md:py-[30px]"
            >
              <span className="font-mono text-[15px] font-bold text-[#ff4f87]">{w.num}</span>
              <span>
                <span className="block text-[22px] font-extrabold leading-[1.15] tracking-[-0.015em] text-inherit md:text-[30px]">
                  {w.headline}
                </span>
                <span className="mt-2 flex flex-wrap items-center gap-x-3.5 gap-y-1 text-sm font-semibold text-inherit opacity-[0.62]">
                  <span>{w.company}</span>
                  <span>·</span>
                  <span>{w.role}</span>
                  <span>·</span>
                  <span>{w.years}</span>
                  {w.award && <span className="font-extrabold text-[#ff4f87] opacity-100">🏆 Good Design Award</span>}
                </span>
              </span>
              <span className="text-[22px] font-extrabold text-inherit md:text-[30px]">↗</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Award marquee */}
      {flags['award-marquee'] && (
        <div className="my-12 rotate-[-1deg] scale-[1.02] overflow-hidden border-y-2 border-[#0a0a0a] dark:border-[#f4f2ec] bg-[#ff4f87] py-3 text-white">
          <div className="flex w-max animate-[mq_26s_linear_infinite_reverse]">
            <span className="whitespace-nowrap pr-10 text-base font-black uppercase tracking-[0.12em]">
              {awardMarquee}
            </span>
            <span aria-hidden className="whitespace-nowrap pr-10 text-base font-black uppercase tracking-[0.12em]">
              {awardMarquee}
            </span>
          </div>
        </div>
      )}

      {/* Good Design Award spotlight */}
      {flags['award-spotlight'] && (
        <section className="mx-auto max-w-[1160px] px-5 pb-6 pt-10 md:px-10">
          <a
            href={GOOD_DESIGN_AWARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-5 rounded-xl border-2 border-[#0a0a0a] dark:border-[#f4f2ec] bg-white dark:bg-[#1a1918] px-6 py-12 text-center transition-[background-color,color,box-shadow] duration-[180ms] hover:bg-[#2400ff] hover:text-white hover:shadow-[8px_8px_0_#ff4f87] md:py-16"
          >
            <Image
              src="/images/projects/good-design-award-badge.png"
              alt="Good Design Award Winner logo"
              width={552}
              height={231}
              className="h-14 w-auto transition-[filter] duration-[180ms] group-hover:invert dark:invert md:h-20"
            />
            <div className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#ff4f87] group-hover:text-[#ffd3e2]">
              Winner — Social Impact · 2024
            </div>
            <h2 className="m-0 max-w-[720px] text-[30px] font-extrabold leading-[1.1] tracking-[-0.02em] md:text-[44px]">
              Good Design Award
            </h2>
            <p className="m-0 max-w-[620px] text-[17px] leading-[1.6] text-[#555] dark:text-[#b3afa6] group-hover:text-white/80">
              StrongPro — AI empowering healthcare heroes for healthier communities. Recognised by Good Design
              Australia for clinical safety outcomes in aged care.
            </p>
            <span className="text-base font-extrabold underline decoration-2 underline-offset-4">
              Read about the award ↗
            </span>
          </a>
        </section>
      )}

      {/* About fact grid */}
      <section id="about" className="mx-auto max-w-[1160px] px-5 pb-[88px] pt-10 md:px-10">
        <h2 className="mb-5 mt-0 text-[15px] font-extrabold uppercase tracking-[0.14em]">A bit about me</h2>
        <div className="grid grid-cols-1 overflow-hidden border-2 border-[#0a0a0a] dark:border-[#f4f2ec] sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((f) => (
            <div
              key={f.label}
              className={`-mb-0.5 -mr-0.5 border-b-2 border-r-2 border-[#0a0a0a] dark:border-[#f4f2ec] px-7 py-[30px] transition-[background-color,color] duration-[180ms] hover:text-white ${
                f.hover === 'blue' ? 'hover:bg-[#2400ff]' : 'hover:bg-[#ff4f87]'
              }`}
            >
              <div className="font-mono text-xs font-bold uppercase tracking-[0.1em] opacity-55">{f.label}</div>
              <div className="mt-2 text-[24px] font-extrabold tracking-[-0.015em] md:text-[30px]">{f.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* GitHub band */}
      <div className="bg-[#0a0a0a] px-5 py-[72px] text-white md:px-10">
        <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-10">
          <div className="max-w-[640px]">
            <h3 className="mb-2.5 mt-0 text-[30px] font-extrabold tracking-[-0.02em] md:text-[40px]">
              I don&apos;t just spec it —{' '}
              <span className="font-medium italic text-[#d8f34e]" style={serif}>
                I ship it.
              </span>
            </h3>
            <p className="m-0 text-[17px] leading-[1.6] text-white/65">
              Working prototypes and tools I&apos;ve coded myself, including projects built with the Claude API.
            </p>
          </div>
          <a
            href="https://github.com/phillipyiupongyuen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#d8f34e] px-8 py-4 text-base font-black text-[#0a0a0a] dark:text-[#f4f2ec] transition-[transform,background-color] duration-150 hover:-translate-y-0.5 hover:bg-white dark:bg-[#121210]"
          >
            See my code on GitHub ↗
          </a>
        </div>
      </div>

      {/* Giant contact */}
      <section className="border-b-2 border-[#0a0a0a] dark:border-[#f4f2ec] px-5 pb-20 pt-[100px] md:px-10">
        <div className="mx-auto max-w-[1160px]">
          <div className="mb-3 font-mono text-sm font-bold uppercase tracking-[0.12em] text-[#555] dark:text-[#b3afa6]">
            Recruiter, hiring manager, fellow builder —
          </div>
          <a
            href="mailto:phillip.yiu.pong.yuen@gmail.com"
            className="block text-[clamp(48px,11vw,118px)] font-black leading-[0.95] tracking-[-0.04em] text-[#0a0a0a] dark:text-[#f4f2ec] transition-[color,letter-spacing] duration-[180ms] hover:tracking-[-0.02em] hover:text-[#ff4f87]"
          >
            ASK ME
            <br />
            ANYTHING ↗
          </a>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <span className="font-mono text-sm font-semibold md:text-base">
              M&nbsp; phillip.yiu.pong.yuen@gmail.com
            </span>
            <span className="text-sm text-[#555] dark:text-[#b3afa6]">opens in your own mail client · replies within a day</span>
          </div>
        </div>
      </section>

      <footer className="flex flex-col gap-3 px-5 py-6 text-sm font-semibold text-[#555] dark:text-[#b3afa6] md:flex-row md:justify-between md:px-10">
        <span>© 2026 Phil Yuen · Melbourne, VIC</span>
        <div className="flex gap-6">
          <a href="mailto:phillip.yiu.pong.yuen@gmail.com" className="text-[#555] dark:text-[#b3afa6] transition-colors hover:text-[#2400ff] dark:hover:text-[#9d8bff]">
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/phillipyuen/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555] dark:text-[#b3afa6] transition-colors hover:text-[#2400ff] dark:hover:text-[#9d8bff]"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/phillipyiupongyuen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555] dark:text-[#b3afa6] transition-colors hover:text-[#2400ff] dark:hover:text-[#9d8bff]"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

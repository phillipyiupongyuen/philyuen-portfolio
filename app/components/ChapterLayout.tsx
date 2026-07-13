import Image from 'next/image';
import Link from 'next/link';

export interface ChapterCard {
  href: string;
  kicker: string;
  title: string;
}

export interface SlotImage {
  src: string;
  alt: string;
}

export interface ChapterProps {
  num: number;
  years: string;
  title: string;
  role: string;
  award?: string;
  awardHref?: string;
  intro: string;
  heroLabel: string;
  heroImage?: SlotImage;
  didTitle?: string;
  bullets: string[];
  differently?: string;
  artifactLabels: [string, string];
  artifactImages?: [SlotImage | null, SlotImage | null];
  prev: ChapterCard;
  next: ChapterCard & { mailto?: boolean };
}

function ImageSlot({ label, image, tall }: { label: string; image?: SlotImage | null; tall?: boolean }) {
  if (image) {
    return (
      <div
        className={`relative w-full overflow-hidden rounded-xl bg-[#f0efec] ${
          tall ? 'h-[220px] rounded-[14px] md:h-[320px]' : 'h-[200px]'
        }`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={tall ? '(max-width: 908px) 100vw, 860px' : '(max-width: 640px) 100vw, 430px'}
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <div
      className={`flex w-full items-center justify-center rounded-xl bg-[#f0efec] px-6 text-center ${
        tall ? 'h-[220px] rounded-[14px] md:h-[320px]' : 'h-[200px]'
      }`}
    >
      <span className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-[#a5a29b]">{label}</span>
    </div>
  );
}

const cardHover =
  'block rounded-xl border-[1.5px] border-[#0a0a0a] bg-white p-[18px] px-[22px] transition-[border-color,box-shadow] duration-150 hover:border-[#ff4f87] hover:shadow-[4px_4px_0_#ff4f87]';

export default function ChapterLayout({
  num,
  years,
  title,
  role,
  award,
  awardHref,
  intro,
  heroLabel,
  heroImage,
  didTitle = 'What I did',
  bullets,
  differently,
  artifactLabels,
  artifactImages,
  prev,
  next,
}: ChapterProps) {
  return (
    <div
      className="flex min-h-screen flex-col bg-white text-[#0a0a0a]"
      style={{ fontFamily: "var(--font-archivo), 'Helvetica Neue', sans-serif" }}
    >
      <nav className="flex items-center justify-between border-b-2 border-[#0a0a0a] px-6 py-[22px] md:px-12">
        <Link href="/" className="text-lg font-extrabold text-[#0a0a0a]">
          Phil Yuen
        </Link>
        <div className="flex items-center gap-4 text-sm font-semibold md:gap-8">
          <Link href="/#work" className="text-[#0a0a0a] transition-colors hover:text-[#2400ff]">
            ← All chapters
          </Link>
          <a
            href="mailto:phillip.yiu.pong.yuen@gmail.com"
            className="text-[#0a0a0a] transition-colors hover:text-[#2400ff]"
          >
            Contact
          </a>
        </div>
      </nav>

      <main className="mx-auto w-full max-w-[860px] flex-1 px-6 pb-[72px] pt-16 md:px-8">
        <div className="text-[13px] font-extrabold uppercase tracking-[0.1em] text-[#ff4f87]">
          Chapter {num} of 7 · {years}
        </div>
        <div className="mb-8 mt-3.5 flex gap-1.5">
          {Array.from({ length: 7 }, (_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-[3px] ${
                i + 1 === num ? 'bg-[#ff4f87]' : i + 1 < num ? 'bg-[#0a0a0a]' : 'bg-[#e4e2dd]'
              }`}
            />
          ))}
        </div>

        <h1 className="mb-2 text-[38px] font-extrabold leading-[1.02] tracking-[-0.02em] md:text-[56px]">{title}</h1>
        <div className={`text-lg font-bold text-[#2400ff] ${award ? 'mb-3.5' : 'mb-5'}`}>{role}</div>
        {award &&
          (awardHref ? (
            <a
              href={awardHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-5 inline-block rounded-full bg-[#ff4f87] px-4 py-[7px] text-[13px] font-extrabold tracking-[0.05em] text-white transition-colors hover:bg-[#2400ff]"
            >
              {award} ↗
            </a>
          ) : (
            <div className="mb-5 inline-block rounded-full bg-[#ff4f87] px-4 py-[7px] text-[13px] font-extrabold tracking-[0.05em] text-white">
              {award}
            </div>
          ))}
        <p className="mb-9 max-w-[640px] text-[19px] italic leading-[1.6] text-[#555] text-pretty">{intro}</p>

        <ImageSlot label={heroLabel} image={heroImage} tall />

        <h2 className="mb-[18px] mt-11 text-[26px] font-extrabold">{didTitle}</h2>
        <div className="flex flex-col gap-3">
          {bullets.map((b) => (
            <div key={b} className="flex gap-3.5">
              <span className="mt-2 h-[9px] w-[9px] flex-none bg-[#ff4f87]" />
              <span className="text-[17px] leading-[1.6]">{b}</span>
            </div>
          ))}
        </div>

        {differently && (
          <div className="mt-8 rounded-xl border-[1.5px] border-[#0a0a0a] bg-white px-6 py-5">
            <div className="mb-1.5 text-xs font-extrabold uppercase tracking-[0.1em] text-[#ff4f87]">
              What I&apos;d do differently
            </div>
            <div className="text-base leading-[1.6]">{differently}</div>
          </div>
        )}

        <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <ImageSlot label={artifactLabels[0]} image={artifactImages?.[0]} />
          <ImageSlot label={artifactLabels[1]} image={artifactImages?.[1]} />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <Link href={prev.href} className={`${cardHover} text-[#0a0a0a]`}>
            <div className="mb-1 text-xs font-extrabold uppercase tracking-[0.08em] text-[#ff4f87]">{prev.kicker}</div>
            <div className="text-lg font-extrabold">{prev.title}</div>
          </Link>
          {next.mailto ? (
            <a
              href={next.href}
              className="block rounded-xl border-[1.5px] border-[#2400ff] bg-[#2400ff] p-[18px] px-[22px] text-right text-white transition-[border-color,box-shadow] duration-150 hover:border-[#ff4f87] hover:shadow-[4px_4px_0_#ff4f87]"
            >
              <div className="mb-1 text-xs font-extrabold uppercase tracking-[0.08em] text-[#ffd3e2]">
                {next.kicker}
              </div>
              <div className="text-lg font-extrabold">{next.title}</div>
            </a>
          ) : (
            <Link href={next.href} className={`${cardHover} text-right text-[#0a0a0a]`}>
              <div className="mb-1 text-xs font-extrabold uppercase tracking-[0.08em] text-[#ff4f87]">
                {next.kicker}
              </div>
              <div className="text-lg font-extrabold">{next.title}</div>
            </Link>
          )}
        </div>
      </main>

      <footer className="flex flex-col gap-3 bg-[#0a0a0a] px-6 py-[26px] text-sm text-white md:flex-row md:justify-between md:px-12">
        <span>Phil Yuen · Senior Product Manager · Melbourne, VIC</span>
        <div className="flex gap-6">
          <a href="mailto:phillip.yiu.pong.yuen@gmail.com" className="text-white hover:text-[#d8f34e]">
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/phillipyuen/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#d8f34e]"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/phillipyiupongyuen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#d8f34e]"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import WarmNav from './components/WarmNav';
import { useScreeningTool } from './lib/useScreeningTool';

const serif = { fontFamily: 'var(--font-newsreader), serif' };

const stats = [
  { value: '8+ yrs', label: 'Product leadership' },
  { value: '$1.5M', label: 'ARR built' },
  { value: '500%', label: 'Growth in 6 months' },
  { value: '$5M', label: 'Contracts secured' },
];

const jobs = [
  {
    company: 'countfor.me',
    href: '/projects/countfor-me',
    role: 'Co-Founder & Product Lead',
    dates: '2026 – Present',
    context: 'Hospitality fintech entering the Japanese market.',
    award: false,
    outcomes: [
      'Own end-to-end product and commercial strategy for market entry.',
      'Built and lead a team of 8 university-funded volunteer interns.',
      'Running tight build–measure–learn loops with early users.',
    ],
    differently: "Too early to say — I'm in the trenches now. Ask me in a year.",
  },
  {
    company: 'Sigma Healthcare',
    href: '/projects/sigma-healthcare',
    role: 'Senior Data Platform Product Manager',
    dates: '2025 – 2026',
    context: 'National pharmacy wholesaler modernising its data estate.',
    award: false,
    outcomes: [
      'Shipped a national Snowflake platform — Medallion architecture with dbt, Fivetran and Airflow.',
      'Owned the roadmap across Commercial, Finance and Supply Chain domains.',
      'Established governance and trust frameworks now steering national supply-chain decisions.',
    ],
    differently: 'Bring business domain owners into the data modelling process earlier.',
  },
  {
    company: 'StrongRoom AI',
    href: '/projects/strongroom-ai',
    role: 'Group AI Product Manager',
    dates: '2023 – 2024',
    context: 'AI-powered clinical decision support for aged care.',
    award: true,
    outcomes: [
      'Grew the platform 500% in six months — from 80 to 400 businesses.',
      'Won the Good Design Award (Social Impact) for clinical safety outcomes.',
      'Led a multi-squad roadmap across US and UK market expansion.',
    ],
    differently: 'Invest in self-serve onboarding sooner — growth outpaced our implementation team.',
  },
  {
    company: 'Webstercare',
    href: '/projects/webstercare',
    role: 'Group Product Owner',
    dates: '2016 – 2022',
    context: 'Medication management software for aged care, used nationwide.',
    award: false,
    outcomes: [
      'Led a legacy platform migration across a national clinical provider network.',
      'Secured $5M in aged-care contracts and grew platform revenue 10%.',
      'Owned HIPAA/GDPR compliance for clinical data at scale.',
    ],
    differently: 'Push for incremental migration earlier, instead of a big-bang cutover.',
  },
];

const others = [
  { company: 'CliniScribe AI', role: 'Head of Product', dates: '2024–25', line: 'Shipped first voice-to-text clinical AI API. Agentic platform cut manual intervention 40%.' },
  { company: 'Revision3 (SBX)', role: 'Product Manager', dates: '2024–25', line: 'Lifted retention 25% and DAU 30%. Owned Canadian regulatory compliance.' },
  { company: 'Phoria', role: 'Group Product Manager', dates: '2022–23', line: 'AR & spatial computing. 20% adoption growth; deployed at the Australian Museum.' },
];

const toolCols = [
  { title: "Who it's for", body: 'Hiring teams and fellow PMs who want to see how I actually work — not just read about it.' },
  { title: 'What it does', body: 'Paste any PM screening question. It drafts structured response options grounded in my real experience.' },
  { title: 'What to expect', body: 'Two to three tailored angles in seconds. AI drafts the options; my judgment picks and refines.' },
];

function DemoStep({ n, title, sub, active }: { n: string; title: string; sub: string; active: boolean }) {
  return (
    <div className="flex items-center gap-3 border-r border-[#e8e1d6] px-6 py-5 last:border-r-0">
      <span
        className={`flex h-7 w-7 flex-none items-center justify-center rounded-full text-[13px] font-bold ${
          active ? 'bg-[#c2410c] text-white' : 'bg-[#e8e1d6] text-[#8a8177]'
        }`}
      >
        {n}
      </span>
      <div>
        <div className="text-sm font-bold text-[#211a13]">{title}</div>
        <div className="text-xs text-[#8a8177]">{sub}</div>
      </div>
    </div>
  );
}

function ToolDemo() {
  const { questionBank, selected, pick, status, drafts, error, generate, currentQuestion } = useScreeningTool();
  const generating = status === 'loading';
  const generated = status === 'done';

  return (
    <div className="mt-8 overflow-hidden rounded-[18px] bg-[#faf7f2] text-[#211a13]">
      <div className="grid grid-cols-3 border-b border-[#e8e1d6]">
        <DemoStep n="1" title="Paste a question" sub="Any PM screening prompt" active />
        <DemoStep n="2" title="AI drafts options" sub="Grounded in real experience" active={generating || generated} />
        <DemoStep n="3" title="I refine & send" sub="Judgment stays human" active={generated} />
      </div>

      <div className="p-8">
        <div className="mb-4 text-xs font-bold uppercase tracking-wide text-[#8a8177]">1 · Pick a screening question</div>
        <div className="mb-5 flex flex-wrap gap-2.5">
          {questionBank.map((q, i) => (
            <button
              key={q.short}
              onClick={() => pick(i)}
              className={`rounded-full border-[1.5px] px-3.5 py-2 text-[13px] font-semibold ${
                i === selected ? 'border-[#211a13] bg-[#211a13] text-white' : 'border-[#d8d0c3] bg-white text-[#5d554b]'
              }`}
            >
              {q.short}
            </button>
          ))}
        </div>
        <div className="mb-5 rounded-xl border border-[#e8e1d6] bg-white px-5 py-4 text-base leading-snug text-[#211a13]">
          {currentQuestion.full}
        </div>

        <button
          onClick={generate}
          className="inline-flex items-center gap-2 rounded-lg bg-[#211a13] px-6 py-3 text-[15px] font-semibold text-[#faf7f2]"
        >
          {generated ? 'Regenerate ↻' : 'Generate responses ✨'}
        </button>

        {generating && (
          <div className="mt-6 flex items-center gap-3 text-[15px] text-[#8a8177]">
            <span className="h-[18px] w-[18px] flex-none animate-spin rounded-full border-2 border-[#e8d5c8] border-t-[#c2410c]" />
            Drafting tailored options from Phil&apos;s real experience…
          </div>
        )}

        {status === 'error' && (
          <div className="mt-6 rounded-lg bg-[#f3ede3] px-4 py-3 text-sm text-[#9a3412]">{error}</div>
        )}

        {generated && (
          <div className="mt-7 animate-[srg-in_0.4s_ease]">
            <div className="mb-4 text-xs font-bold uppercase tracking-wide text-[#8a8177]">
              2 · Two tailored angles, drafted in seconds
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {drafts.map((d) => (
                <div key={d.angle} className="rounded-2xl border border-[#e8e1d6] bg-white p-6">
                  <div className="mb-2.5 text-xs font-bold uppercase tracking-wide text-[#c2410c]">{d.angle}</div>
                  <div className="text-[15px] leading-relaxed text-[#3d362d]">{d.text}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2.5 rounded-lg bg-[#f3ede3] px-4.5 py-3.5 text-sm text-[#5d554b]">
              <span className="font-bold text-[#c2410c]">3 · Then I take over.</span> The AI drafts options fast — I
              pick the angle, sharpen the wording, and make sure every claim is true before it ever gets sent.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [askError, setAskError] = useState('');
  const [asking, setAsking] = useState(false);

  const submitAsk = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const question = (form.elements.namedItem('question') as HTMLTextAreaElement).value;
    setAsking(true);
    setAskError('');
    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, question }),
      });
      if (!res.ok) throw new Error('Failed to send — try emailing me directly instead.');
      setSent(true);
    } catch (err) {
      setAskError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setAsking(false);
    }
  };

  return (
    <div className="bg-[#faf7f2] text-[#211a13]">
      <div id="about">
        <WarmNav active="ask" />

        {/* Hero */}
        <header className="grid gap-12 px-6 py-16 md:grid-cols-[1fr_340px] md:items-center md:px-16 md:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wide text-[#c2410c]">
              <span className="h-[1.5px] w-6 bg-[#c2410c]" />
              Head of Product · Melbourne
            </div>
            <h1
              className="mb-7 text-[44px] font-medium leading-[1.05] tracking-tight text-balance md:text-[76px]"
              style={serif}
            >
              Products that earn trust in regulated markets.
            </h1>
            <p className="mb-9 max-w-xl text-lg leading-relaxed text-[#5d554b] md:text-xl">
              Eight years across healthtech, data platforms and AI.{' '}
              <br className="hidden md:block" />
              Pharmacist turned product leader{' '}
              <br className="hidden md:block" />
              From clinical software used nationwide to a hospitality fintech startup I&apos;m founding today.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-block rounded-full bg-[#c2410c] px-7 py-3.5 text-[16px] font-semibold text-white"
              >
                See my work
              </a>
              <a
                href="#ask"
                className="inline-block rounded-full border-[1.5px] border-[#d8d0c3] px-7 py-3.5 text-[16px] font-semibold text-[#211a13]"
              >
                Ask me anything
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <Image
              src="/images/phil-headshot.jpeg"
              alt="Phil Yuen"
              width={260}
              height={260}
              className="h-[260px] w-[260px] rounded-full border-[6px] border-white object-cover shadow-[0_8px_32px_rgba(40,30,20,0.15)] grayscale"
            />
            <div className="flex items-center gap-3.5 rounded-2xl border border-[#e8e1d6] bg-white px-4.5 py-3.5">
              <Image
                src="https://sgp1.digitaloceanspaces.com/cdn.yournet.space/wp-content/good-design.org/2018/03/17173832/Good-Design-Award_Winner_RGB_BLK_Logo.png"
                alt="Good Design Award"
                width={56}
                height={56}
                className="h-14 w-14 flex-none rounded-lg bg-[#f3ede3] object-contain"
                unoptimized
              />
              <div>
                <div className="text-sm font-bold">Good Design Award</div>
                <div className="text-[13px] text-[#8a8177]">Winner — Social Impact, 2024</div>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-2 border-y border-[#e8e1d6] md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="border-r border-[#e8e1d6] px-6 py-7 text-center last:border-r-0">
            <div className="text-[34px] font-semibold text-[#c2410c]" style={serif}>
              {s.value}
            </div>
            <div className="mt-1 text-[13px] text-[#8a8177]">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Work */}
      <div id="work" className="px-6 py-16 md:px-16 md:py-20">
        <h2 className="mb-12 text-[32px] font-medium md:text-[42px]" style={serif}>
          Work
        </h2>
        <div className="flex flex-col gap-6">
          {jobs.map((job) => (
            <article
              key={job.company}
              className="grid gap-8 rounded-2xl border border-[#e8e1d6] bg-white p-8 md:grid-cols-[200px_1fr] md:p-11"
            >
              <div>
                <div className="text-[13px] font-semibold uppercase tracking-wide text-[#c2410c]">{job.dates}</div>
                <h3 className="my-2.5 text-2xl font-semibold md:text-[28px]" style={serif}>
                  <Link href={job.href} className="hover:underline">
                    {job.company}
                  </Link>
                </h3>
                <div className="text-[15px] leading-tight text-[#5d554b]">{job.role}</div>
                {job.award && (
                  <div className="mt-3.5 inline-block rounded-full border-[1.5px] border-[#c2410c] px-3 py-1.5 text-xs font-bold text-[#c2410c]">
                    🏆 Good Design Award
                  </div>
                )}
              </div>
              <div>
                <p className="mb-4.5 text-base italic text-[#5d554b]">{job.context}</p>
                <ul className="mb-5 flex flex-col gap-2 pl-5 text-base leading-snug">
                  {job.outcomes.map((o) => (
                    <li key={o} className="list-disc">
                      {o}
                    </li>
                  ))}
                </ul>
                <div className="rounded-lg bg-[#faf7f2] px-4.5 py-3.5 text-[15px] text-[#5d554b]">
                  <strong className="text-[#c2410c]">What I&apos;d do differently:</strong> {job.differently}
                </div>
              </div>
            </article>
          ))}
        </div>

        <h3 className="mb-5 mt-14 text-2xl font-semibold" style={serif}>
          Other roles
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          {others.map((r) => (
            <div key={r.company} className="rounded-xl border border-[#e8e1d6] p-6">
              <div className="text-base font-bold">{r.company}</div>
              <div className="my-1.5 text-[13px] font-semibold text-[#c2410c]">
                {r.role} · {r.dates}
              </div>
              <div className="text-sm leading-snug text-[#5d554b]">{r.line}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tool */}
      <div className="bg-[#211a13] px-6 py-16 text-[#faf7f2] md:px-16 md:py-20">
        <div className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-[#e8956d]">A working demo</div>
        <h2 className="mb-4 max-w-xl text-[32px] font-medium md:text-[42px]" style={serif}>
          Screening Response Generator
        </h2>
        <p className="mb-11 max-w-xl text-lg leading-relaxed text-[#cfc5b8]">
          I automate repetitive work. This tool is a live example — built to show how I remove toil with AI, not to
          outsource judgment.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {toolCols.map((c) => (
            <div key={c.title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-7">
              <div className="mb-3 text-[13px] font-bold uppercase tracking-wide text-[#e8956d]">{c.title}</div>
              <div className="text-base leading-relaxed text-[#ece5da]">{c.body}</div>
            </div>
          ))}
        </div>
        <div className="mt-9">
          <button
            onClick={() => setDemoOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full bg-[#c2410c] px-6.5 py-3.5 text-[15px] font-semibold text-white"
          >
            {demoOpen ? 'Hide the demo ↑' : 'Try it — see the flow →'}
          </button>
        </div>

        {demoOpen && <ToolDemo />}
      </div>

      {/* AMA */}
      <div id="ask" className="grid gap-16 px-6 py-16 md:grid-cols-2 md:px-16 md:py-20">
        <div>
          <h2 className="mb-4 text-[32px] font-medium md:text-[42px]" style={serif}>
            Ask me anything
          </h2>
          <p className="mb-5 text-lg leading-relaxed text-[#5d554b]">
            Recruiter, hiring manager, or fellow builder — leave your email and a question. I reply to every one,
            usually within a day.
          </p>
          <p className="text-[15px] text-[#8a8177]">
            Also open to freelance <strong className="text-[#211a13]">digital strategy</strong> engagements.
          </p>
        </div>
        {sent ? (
          <div className="rounded-2xl border border-[#e8e1d6] bg-white p-12 text-center text-lg" style={serif}>
            Thanks — I&apos;ll be in touch soon. ✓
          </div>
        ) : (
          <form onSubmit={submitAsk} className="flex flex-col gap-3.5 rounded-2xl border border-[#e8e1d6] bg-white p-8">
            <input
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="rounded-lg border border-[#d8d0c3] bg-[#faf7f2] px-4 py-3.5 text-[15px] text-[#211a13] outline-none"
            />
            <textarea
              name="question"
              required
              placeholder="Your question — role, experience, availability, anything"
              rows={3}
              className="resize-y rounded-lg border border-[#d8d0c3] bg-[#faf7f2] px-4 py-3.5 text-[15px] text-[#211a13] outline-none"
            />
            {askError && <div className="text-sm text-[#9a3412]">{askError}</div>}
            <button
              type="submit"
              disabled={asking}
              className="rounded-lg bg-[#c2410c] py-3.5 text-[16px] font-semibold text-white disabled:opacity-60"
            >
              {asking ? 'Sending…' : 'Send question'}
            </button>
          </form>
        )}
      </div>

      {/* Footer */}
      <footer className="flex flex-col gap-3 border-t border-[#e8e1d6] px-6 py-7 text-sm text-[#8a8177] md:flex-row md:items-center md:justify-between md:px-16">
        <span>Phil Yuen · Senior Product Manager · Melbourne, VIC</span>
        <div className="flex gap-6">
          <a href="mailto:phillip.yiu.pong.yuen@gmail.com" className="hover:text-[#211a13]">
            Email
          </a>
          <a
            href="https://linkedin.com/in/phillipyuen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#211a13]"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

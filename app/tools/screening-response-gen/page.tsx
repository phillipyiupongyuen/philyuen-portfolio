'use client';

import Link from 'next/link';
import WarmNav from '../../components/WarmNav';
import { useScreeningTool } from '../../lib/useScreeningTool';

const serif = { fontFamily: 'var(--font-newsreader), serif' };

const howItWorks = [
  { n: '1', title: 'Paste the question', body: 'Any screening question, from any application.' },
  { n: '2', title: 'Add context — optional', body: 'A line of relevant experience sharpens the drafts.' },
  { n: '3', title: 'Pick, refine, send', body: 'Two angles to choose from. Judgment stays human.' },
];

const whyBuilt = [
  { n: '01', text: 'How I spot toil and build systems to remove it' },
  { n: '02', text: 'That I can integrate the Claude API into a working product' },
  { n: '03', text: 'Where I draw the line — AI drafts, humans decide' },
];

export default function ScreeningResponseGen() {
  const { questionBank, selected, pick, context, setContext, status, drafts, error, generate, currentQuestion } =
    useScreeningTool();
  const idle = status === 'idle';
  const loading = status === 'loading';
  const done = status === 'done';

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#211a13]">
      <WarmNav active="tool" />

      <div className="px-6 pb-10 pt-16 text-center md:px-16 md:pt-20">
        <div className="mb-4.5 text-[13px] font-semibold uppercase tracking-wide text-[#c2410c]">
          A working demo — not a shortcut
        </div>
        <h1 className="mb-4.5 text-[40px] font-medium tracking-tight md:text-[56px]" style={serif}>
          Screening Response Generator
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#5d554b] md:text-xl">
          Paste a screening question from any job application. Claude drafts two tailored angles from my real
          experience — then I pick, refine, and send. The judgment stays human.
        </p>
      </div>

      <div className="grid gap-6 px-6 pb-16 pt-6 md:grid-cols-2 md:px-16 md:pb-20">
        {/* Input card */}
        <div className="rounded-2xl border border-[#e8e1d6] bg-white p-8">
          <div className="mb-3.5 text-xs font-bold uppercase tracking-wide text-[#8a8177]">Screening question</div>
          <div className="mb-4 flex flex-wrap gap-2.5">
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
          <div className="mb-5 min-h-[72px] rounded-xl border border-[#e8e1d6] bg-[#faf7f2] px-5 py-4.5 text-base leading-snug">
            {currentQuestion.full}
          </div>
          <div className="mb-2.5 text-xs font-bold uppercase tracking-wide text-[#8a8177]">
            Relevant experience <span className="normal-case tracking-normal text-[#bfb6a9]">(optional)</span>
          </div>
          <textarea
            rows={2}
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="e.g. Led a data platform build at a national wholesaler…"
            className="mb-5 w-full resize-y rounded-lg border border-[#d8d0c3] bg-[#faf7f2] px-4 py-3.5 text-[15px] text-[#211a13] outline-none"
          />
          <button
            onClick={generate}
            className="w-full rounded-lg bg-[#c2410c] py-3.5 text-base font-semibold text-white"
          >
            {done ? 'Regenerate ↻' : 'Generate responses ✨'}
          </button>
        </div>

        {/* Output panel */}
        <div className="flex min-h-[420px] flex-col gap-4">
          {idle && (
            <div className="flex flex-1 flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-[#d8d0c3] p-12 text-center">
              <span className="text-4xl text-[#d8d0c3]" style={serif}>
                ✎
              </span>
              <div className="max-w-[300px] text-base text-[#8a8177]">
                Your drafted options will appear here. Pick a question and hit generate.
              </div>
            </div>
          )}
          {loading && (
            <div className="flex flex-1 items-center justify-center gap-3.5 rounded-2xl border border-[#e8e1d6] bg-white text-base text-[#8a8177]">
              <span className="h-5 w-5 flex-none animate-spin rounded-full border-2 border-[#e8d5c8] border-t-[#c2410c]" />
              Drafting from real experience…
            </div>
          )}
          {status === 'error' && (
            <div className="flex flex-1 items-center justify-center rounded-2xl border border-[#e8e1d6] bg-white p-8 text-center text-[#9a3412]">
              {error}
            </div>
          )}
          {done && (
            <div className="flex animate-[srg-in_0.4s_ease] flex-col gap-4">
              {drafts.map((d) => (
                <div key={d.angle} className="rounded-2xl border border-[#e8e1d6] bg-white p-7">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wide text-[#c2410c]">{d.angle}</span>
                    <button
                      onClick={() => navigator.clipboard.writeText(d.text)}
                      className="rounded-full border-[1.5px] border-[#d8d0c3] px-3.5 py-1.5 text-[13px] font-semibold text-[#5d554b]"
                    >
                      Copy
                    </button>
                  </div>
                  <div className="text-[15px] leading-relaxed text-[#3d362d]">{d.text}</div>
                </div>
              ))}
              <div className="rounded-xl bg-[#f3ede3] px-4.5 py-3.5 text-sm text-[#5d554b]">
                <strong className="text-[#c2410c]">Final step is human:</strong> I pick the angle, sharpen it, and
                verify every claim before it&apos;s sent.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* How it works */}
      <div className="grid gap-6 border-t border-[#e8e1d6] px-6 py-14 md:grid-cols-3 md:px-16">
        {howItWorks.map((s) => (
          <div key={s.n}>
            <div className="mb-2 text-3xl text-[#c2410c]" style={serif}>
              {s.n}
            </div>
            <div className="mb-1.5 text-base font-bold">{s.title}</div>
            <div className="text-[15px] leading-snug text-[#5d554b]">{s.body}</div>
          </div>
        ))}
      </div>

      {/* Why I built this */}
      <div className="bg-[#211a13] px-6 py-16 text-[#faf7f2] md:px-16">
        <h2 className="mb-4 text-[28px] font-medium md:text-[34px]" style={serif}>
          Why I built this
        </h2>
        <p className="mb-6 max-w-2xl text-lg leading-relaxed text-[#cfc5b8]">
          Tailoring screening responses is repetitive work with a quality bar. That&apos;s exactly the kind of problem
          a PM should automate. This tool shows three things in one artifact:
        </p>
        <div className="flex max-w-2xl flex-col gap-2.5">
          {whyBuilt.map((item) => (
            <div key={item.n} className="flex gap-3 text-base text-[#ece5da]">
              <span className="font-bold text-[#e8956d]">{item.n}</span> {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-col gap-3 border-t border-[#e8e1d6] px-6 py-6.5 text-sm text-[#8a8177] md:flex-row md:items-center md:justify-between md:px-16">
        <Link href="/" className="hover:text-[#211a13]">
          ← Back to home
        </Link>
        <span>Phil Yuen · Melbourne, VIC</span>
      </footer>
    </div>
  );
}

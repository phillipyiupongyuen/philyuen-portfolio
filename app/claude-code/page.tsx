'use client';

import Header from '../components/Header';

export default function ClaudeCodePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">
          How I Used Claude Code to Scale My Job Search
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Generating 50+ tailored resumes, cover letters, and screening responses in parallel using Claude Code and Node.js automation.
        </p>

        {/* Problem */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">The Problem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When I left Sigma Healthcare in June 2026, I started applying for senior PM and lead PM roles across healthtech, fintech, data platforms, and government. But I wasn't just sending the same resume and cover letter everywhere.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Each application demanded tailoring:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
            <li>
              <strong>Resumes:</strong> Different roles need different emphasis (data platform lead? Highlight Sigma. Founder? Lead with countfor.me. Clinical software? Front-load Webstercare and StrongRoom).
            </li>
            <li>
              <strong>Cover letters:</strong> Need to speak to each company's specific problems and values.
            </li>
            <li>
              <strong>Screening responses:</strong> Each application has unique questions that require thoughtful, tailored answers.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Doing this manually for 50+ applications would take weeks. Even with Claude in chat, I'd be copying and pasting, editing, iterating on each one separately. I needed a workflow that let me batch-generate and iterate at scale.
          </p>
        </div>

        {/* Solution */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">The Solution</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I used Claude Code to build a Node.js automation workflow that:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6 ml-4">
            <li>
              Reads a <strong>job spec</strong> (role title, company, requirements, culture notes)
            </li>
            <li>
              Passes it to Claude API with my experience summary
            </li>
            <li>
              Generates a <strong>tailored resume</strong>, <strong>cover letter</strong>, and <strong>screening response templates</strong> in parallel
            </li>
            <li>
              Writes all outputs to <strong>.docx and .pdf files</strong> organized by company/role
            </li>
            <li>
              Lets me review, refine, and iterate quickly
            </li>
          </ol>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm text-gray-700 mb-4">
              <strong>Workflow:</strong>
            </p>
            <code className="block text-xs text-gray-600 leading-relaxed">
              Job Spec (Markdown)
              <br />
              ↓
              <br />
              Claude API (Generate Resume + Cover + Screening Responses)
              <br />
              ↓
              <br />
              Node.js (Format as DOCX/PDF via docx-js + LibreOffice soffice)
              <br />
              ↓
              <br />
              /outputs/company-name/
              <br />
              &nbsp;&nbsp;├── Resume.docx
              <br />
              &nbsp;&nbsp;├── Resume.pdf
              <br />
              &nbsp;&nbsp;├── Cover_Letter.docx
              <br />
              &nbsp;&nbsp;├── Cover_Letter.pdf
              <br />
              &nbsp;&nbsp;└── Screening_Responses.txt
            </code>
          </div>

          <p className="text-gray-700 leading-relaxed">
            The key insight: I'm not building a consumer product. I'm building a <strong>one-person, high-velocity workflow tool</strong> that saves me 10+ hours per week and lets me apply to 2-3 roles per day with truly tailored materials.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Tech Stack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Automation</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <strong>Node.js</strong> – Script runner
                </li>
                <li>
                  <strong>Claude API</strong> – Content generation (claude-sonnet-4-6)
                </li>
                <li>
                  <strong>docx-js</strong> – DOCX file generation (Word formatting)
                </li>
                <li>
                  <strong>LibreOffice soffice</strong> – DOCX → PDF conversion
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Workflow</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <strong>Markdown job specs</strong> – Easy to version control & iterate
                </li>
                <li>
                  <strong>Parallel API calls</strong> – Resume + cover + responses at once
                </li>
                <li>
                  <strong>Human review loop</strong> – I always review before sending
                </li>
                <li>
                  <strong>File organization</strong> – By company, easy to locate & update
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Results</h2>
          <div className="space-y-4 mb-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Time Saved Per Application</p>
              <p className="text-2xl font-semibold text-accent">
                45–60 mins → 10 mins
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Applications Completed</p>
              <p className="text-2xl font-semibold text-accent">
                50+ roles across 8 sectors
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Iteration Speed</p>
              <p className="text-2xl font-semibold text-accent">
                Regenerate all materials in &lt;2 mins if I refine the spec
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            I've refined my job spec framework multiple times (adding detail about market insights, refining what to emphasize for different sector backgrounds). Each time I update the spec, I can regenerate all 50 applications in under 5 minutes.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The workflow isn't just about speed—it's about <strong>consistency and quality</strong>. Every application is thoughtful and tailored. Every cover letter speaks to that company's specific problems. Every screening response draws on my actual experience.
          </p>
        </div>

        {/* What This Says About Me */}
        <div className="mb-16 border-t border-gray-200 pt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">What This Says About Me As a Product Manager</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                1. I Automate Repetitive Work
              </h3>
              <p className="text-gray-700">
                Good PMs identify toil and build systems to reduce it. This is exactly that—I spotted a repetitive bottleneck in my own workflow and engineered a solution.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                2. I'm Not Afraid of Tools
              </h3>
              <p className="text-gray-700">
                I can think in systems (Node.js, APIs, file generation), but I don't get stuck in technical details. The goal is job search velocity, and I picked the right tools to get there.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                3. I Balance Speed and Quality
              </h3>
              <p className="text-gray-700">
                Automation isn't about cutting corners—it's about making room for judgment. I use Claude to generate options quickly, then I always review and refine before sending.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                4. I Think About Scale
              </h3>
              <p className="text-gray-700">
                At StrongRoom, I scaled from 80 to 400 businesses in 6 months. At Sigma, I governed a platform across three business domains. Here, I built a workflow that scales from 10 applications to 100 with minimal effort.
              </p>
            </div>
          </div>
        </div>

        {/* Lesson */}
        <div className="mb-16 bg-gray-50 p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Why I'm Telling You This
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            When you interview a PM, you want to see: <strong>judgment, technical literacy, and bias toward action</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This case study is proof of all three. I identified a problem, prototyped a solution, tested it, iterated, and scaled it. I understand APIs and file generation well enough to build the tool, but I didn't get hung up on technical perfection—the goal was job search velocity.
          </p>
        </div>

        {/* Tool Section */}
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Try the Tool</h2>
          <p className="text-gray-700 mb-6">
            I've open-sourced a simplified version of this workflow as an interactive tool on this site. The Screening Response Generator lets you paste any PM screening question and get tailored response options instantly.
          </p>
          <a
            href="/tools/screening-response-gen"
            className="inline-block px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-dark transition-colors"
          >
            Try the Screening Response Generator →
          </a>
        </div>
      </section>
    </div>
  );
}

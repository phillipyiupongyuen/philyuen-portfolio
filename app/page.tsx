'use client';

import Link from 'next/link';
import Header from './components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="space-y-6 mb-12">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
            Product builder.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
            Senior Product Manager. Healthtech → Data Platforms → AI. Built $1.5M ARR products. 500% growth at StrongRoom AI. Good Design Award winner. Co-Founder at countfor.me. Registered pharmacist.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Link
            href="/projects"
            className="px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-dark transition-colors inline-block text-center"
          >
            View My Work
          </Link>
          <Link
            href="/tools/screening-response-gen"
            className="px-6 py-3 border border-gray-300 text-gray-900 font-medium rounded-lg hover:border-accent hover:text-accent transition-colors inline-block text-center"
          >
            Try the Tool
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-900 mb-12">Featured Work</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* StrongRoom AI */}
          <Link
            href="/projects/strongroom-ai"
            className="group p-8 border border-gray-200 rounded-lg hover:border-accent hover:shadow-lg transition-all"
          >
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-accent transition-colors">
                StrongRoom AI
              </h3>
              <p className="text-sm text-gray-600">
                500% growth in 6 months. Good Design Award (Social Impact). AI-powered clinical decision support for aged care.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">AI/ML</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Healthtech</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Leadership</span>
              </div>
            </div>
          </Link>

          {/* Sigma Healthcare */}
          <Link
            href="/projects/sigma-healthcare"
            className="group p-8 border border-gray-200 rounded-lg hover:border-accent hover:shadow-lg transition-all"
          >
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-accent transition-colors">
                Sigma Healthcare
              </h3>
              <p className="text-sm text-gray-600">
                National Snowflake data platform. Medallion architecture. Governed $X in supply chain decisions.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Data Platform</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Snowflake/dbt</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Governance</span>
              </div>
            </div>
          </Link>

          {/* countfor.me */}
          <Link
            href="/projects/countfor-me"
            className="group p-8 border border-gray-200 rounded-lg hover:border-accent hover:shadow-lg transition-all"
          >
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-accent transition-colors">
                countfor.me
              </h3>
              <p className="text-sm text-gray-600">
                Co-Founder. Japan market entry. Hospitality fintech. Building with volunteer interns.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Founder</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Fintech</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Market Entry</span>
              </div>
            </div>
          </Link>

          {/* Webstercare */}
          <Link
            href="/projects/webstercare"
            className="group p-8 border border-gray-200 rounded-lg hover:border-accent hover:shadow-lg transition-all"
          >
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-accent transition-colors">
                Webstercare
              </h3>
              <p className="text-sm text-gray-600">
                Legacy platform migration at scale. $5M in aged care contracts. HIPAA/GDPR compliance.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Platform</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Compliance</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Migration</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Claude Code Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Claude Code</h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          I built this portfolio site using Claude Code. I also use it to generate tailored job application materials at scale — generating 50+ resumes, cover letters, and screening responses in parallel.
        </p>
        <Link
          href="/claude-code"
          className="text-accent font-medium hover:text-accent-dark transition-colors"
        >
          Read the case study →
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8 mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <p className="font-medium text-gray-900">Phil Yuen</p>
              <p className="text-sm text-gray-600">Senior Product Manager</p>
              <p className="text-sm text-gray-600">Melbourne, VIC</p>
            </div>
            <div className="flex gap-6">
              <a
                href="mailto:phillip.yiu.pong.yuen@gmail.com"
                className="text-sm text-gray-600 hover:text-accent transition-colors"
              >
                Email
              </a>
              <a
                href="https://linkedin.com/in/phillipyuen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-accent transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-8 pt-8 border-t border-gray-200">
            Built with Next.js, React, and Tailwind CSS. Deployed on Vercel.
          </p>
        </div>
      </footer>
    </div>
  );
}

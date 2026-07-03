'use client';

import Header from '../../components/Header';

export default function SigmaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-semibold text-gray-900 mb-4">
          Sigma Healthcare: Data Platform
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Senior Data Platform Product Manager. National Snowflake build across Commercial, Finance, and Supply Chain. Medallion architecture. Governed data standards across a merged ASX-listed healthcare group.
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Timeline</p>
            <p className="text-2xl font-bold text-accent">12 months</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Business Domains</p>
            <p className="text-2xl font-bold text-accent">3 major</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Stakeholders</p>
            <p className="text-2xl font-bold text-accent">40+</p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-16 pb-16 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Context</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Chemist Warehouse merged with Sigma Healthcare in 2024.</strong> The combined group needed a unified national data platform to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>Break down data silos between legacy systems</li>
              <li>Standardize supply chain reporting across 1,200+ stores</li>
              <li>Enable Commercial and Finance to make real-time decisions</li>
              <li>Future-proof for AI/ML (demand forecasting, clinical decision support)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              I was brought in as Senior Data Platform Product Manager to own the strategic direction and navigate competing demands from three major business domains.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Decisions</h2>
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">
                  1. Medallion Architecture on Snowflake
                </h3>
                <p className="text-gray-700">
                  Why: Separates raw data ingestion from business logic. Scales with the org without constant rework.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">
                  2. Data Governance as Product
                </h3>
                <p className="text-gray-700">
                  Why: Without clear ownership and trust frameworks, data silos come back. Treated governance as a feature, not an afterthought.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">
                  3. Phased Rollout by Domain
                </h3>
                <p className="text-gray-700">
                  Why: Tried to solve for all three domains at once, you lose. Prioritized Commercial first (highest ROI), then Finance, then Supply Chain.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Outcomes</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Placeholder:</strong> Share your key metrics here. E.g.:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Number of governed tables/datasets</li>
              <li>Data refresh SLA improvement</li>
              <li>Decision velocity improvement (e.g., time from question to answer)</li>
              <li>Cost savings vs. legacy infrastructure</li>
              <li>Team productivity gains</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              What I'd Do Differently
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Placeholder:</strong> Add your retrospective learnings here.
            </p>
          </div>
        </div>

        {/* Leadership */}
        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Stakeholder Leadership
          </h2>
          <p className="text-gray-700 leading-relaxed">
            I managed 40+ stakeholders across three domains with competing priorities. The key was clear, data-backed roadmap decisions and regular stakeholder alignment sessions. Built trust by being transparent about tradeoffs.
          </p>
        </div>
      </section>
    </div>
  );
}

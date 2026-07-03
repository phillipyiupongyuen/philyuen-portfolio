'use client';

import Link from 'next/link';
import Header from '../components/Header';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">My Work</h1>
        <p className="text-lg text-gray-600 mb-16 max-w-2xl">
          Product leadership across healthtech, data platforms, and AI. From zero to $1.5M ARR. From legacy to modern. Always thinking about user outcomes and team building.
        </p>

        <div className="space-y-6">
          {/* StrongRoom AI */}
          <Link
            href="/projects/strongroom-ai"
            className="group block p-8 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-accent transition-colors">
                StrongRoom AI
              </h2>
              <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded">
                2023–2024
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Promoted within 8 months to Group AI Product Manager. Grew platform 500% in 6 months (80 → 400 businesses). Good Design Award (Social Impact). Led multi-squad roadmap across US/UK markets. Coached Product Managers.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Product Leadership</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Growth</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">AI/LLM</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Team Coaching</span>
            </div>
          </Link>

          {/* Sigma Healthcare */}
          <Link
            href="/projects/sigma-healthcare"
            className="group block p-8 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-accent transition-colors">
                Sigma Healthcare
              </h2>
              <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded">
                2025–2026
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Senior Data Platform Product Manager. National Snowflake build (Medallion architecture, dbt, Fivetran, Airflow). Owned roadmap across Commercial, Finance, Supply Chain. Established data governance and trust frameworks. Mapped AI/ML use cases.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Data Platform</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Snowflake/dbt</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Governance</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Stakeholder Alignment</span>
            </div>
          </Link>

          {/* countfor.me */}
          <Link
            href="/projects/countfor-me"
            className="group block p-8 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-accent transition-colors">
                countfor.me
              </h2>
              <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded">
                2026–Present
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Co-Founder and Product Lead. Hospitality fintech, Japan market entry. End-to-end product and commercial strategy. Built team of 8 university-funded volunteer interns. Running tight build-measure-learn loops with early users.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Founder</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Market Entry</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Team Building</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Early-Stage</span>
            </div>
          </Link>

          {/* Webstercare */}
          <Link
            href="/projects/webstercare"
            className="group block p-8 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-accent transition-colors">
                Webstercare
              </h2>
              <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded">
                2016–2022
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              6-year tenure from Functional Test Analyst to Group Product Owner. Led legacy platform migration across national clinical provider network. Secured $5M in aged-care contracts. Owned HIPAA/GDPR compliance. Increased platform revenue 10%.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Platform Migration</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Compliance</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Long-Term Growth</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Stakeholder Trust</span>
            </div>
          </Link>
        </div>

        {/* Other Notable Work */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Other Notable Roles</h3>
          <div className="space-y-4">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">CliniScribe AI — Head of Product (Oct 2024 – Jan 2025)</h4>
              <p className="text-sm text-gray-600">
                Shipped first voice-to-text clinical AI API (NVIDIA Parakeet). Designed agentic PRM platform (40% manual intervention reduction). Led 10-person cross-functional squad at 95% on-time delivery.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Revision3 (SBX.com) — Product Manager (Oct 2024 – Apr 2025)</h4>
              <p className="text-sm text-gray-600">
                Consumer-facing account platform and Web3 gaming back-end. Lifted retention 25%, DAU 30%. Integrated post-acquisition Metaloot catalogue. Owned Canadian regulatory compliance (responsible gambling, AML/CTF).
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Phoria — Group Product Manager (Jun 2022 – Nov 2023)</h4>
              <p className="text-sm text-gray-600">
                Spatial computing, AR, computer vision. 20% adoption growth. Coordinated delivery across virtualisation and real-estate verticals. Deployed wayfinding at CERES Environmental Park, virtual experience at Australian Museum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

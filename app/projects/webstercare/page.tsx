'use client';

import Header from '../../components/Header';

export default function WebstercarePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-semibold text-gray-900 mb-4">
          Webstercare
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          6-year tenure from Functional Test Analyst to Group Product Owner. Led legacy platform migration across national clinical provider network. Secured $5M in aged-care contracts.
        </p>

        {/* Timeline */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Tenure</p>
            <p className="text-2xl font-bold text-accent">6 years</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Contract Value</p>
            <p className="text-2xl font-bold text-accent">$5M+</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Career Arc</p>
            <p className="text-sm font-bold text-gray-900">QA → Product</p>
          </div>
        </div>

        {/* Career Progression */}
        <div className="mb-16 pb-16 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Career Arc: QA to Product
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            I started at Webstercare as a Functional Test Analyst in 2016. It wasn't glamorous, but it taught me something critical: clinical software can't ship broken. There's no "move fast and break things" in healthcare. Every bug has stakes.
          </p>

          <div className="space-y-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                2016–2019: Functional Test Analyst
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Built healthcare-specific QA protocols. Validated clinical workflows end-to-end. Saved 1,000+ testing hours. Improved clinical-engineering collaboration 20%. This foundation made me a better product manager—I understand the constraints of regulated software and the importance of rigorous testing.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                2019–2022: Group Product Owner
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Promoted to product. Led legacy platform migration across national clinical provider network. Managed scope, technical tradeoffs, and change readiness. Secured $5M in aged-care contracts through consultative stakeholder engagement. Increased platform revenue 10% by translating direct clinical user research into workflow redesign.
              </p>
            </div>
          </div>
        </div>

        {/* Key Decisions */}
        <div className="mb-16 pb-16 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Major Decisions: The Legacy Migration
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The core challenge: Webstercare's legacy platform had been in place for a decade. It worked, but it was creaky. We needed to migrate 1,200+ providers (nurses, pharmacists, aged-care workers) to a new system without breaking continuity of care.
          </p>

          <div className="space-y-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                1. Phased Rollout, Not Big Bang
              </h3>
              <p className="text-gray-700 leading-relaxed">
                I could have tried to migrate everyone at once. Instead, I phased it: pilot with 10 providers, expand to 100, then go national. This let me catch issues early and build confidence with providers.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                2. Co-Design with Providers
              </h3>
              <p className="text-gray-700 leading-relaxed">
                I worked directly with pharmacists and nurses to understand their actual workflows (not the idealised ones). Designed in Figma with them present. This wasn't just better design—it built buy-in. Providers became advocates because they'd shaped the product.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                3. Compliance as a Feature
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Healthcare compliance (HIPAA, GDPR, HL7/FHIR) isn't an afterthought—it has to be baked into the product. I partnered directly with the Australian Digital Health Agency to ensure the new platform met My Health Record standards. This built trust with regulators and providers.
              </p>
            </div>
          </div>
        </div>

        {/* Outcomes */}
        <div className="mb-16 pb-16 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Outcomes</h2>

          <div className="space-y-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                $5M in Aged-Care Contracts
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Through consultative stakeholder engagement and delivering on commitments, Webstercare secured major contracts with aged-care provider networks. This was a direct result of product quality and trust.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                10% Platform Revenue Growth
              </h3>
              <p className="text-gray-700 leading-relaxed">
                By translating direct clinical user research into targeted workflow redesign, I increased platform revenue. Providers saw value and recommended the platform to other facilities.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                Successful Migration
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The platform migration was one of the most complex technical undertakings Webstercare had done. By managing scope, building provider buy-in, and maintaining quality, we delivered without major incidents.
              </p>
            </div>
          </div>
        </div>

        {/* Key Learnings */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Key Learnings
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Clinical software is a trust business.</strong> You can't iterate fast because the cost of failure is human safety. This shaped how I think about product—quality, rigor, and credibility come first.
            </p>
            <p>
              <strong>Compliance isn't a constraint, it's a feature.</strong> When you bake regulatory requirements into design, you build trust with both users and regulators. It makes sales easier.
            </p>
            <p>
              <strong>Tenure matters.</strong> I spent 6 years at Webstercare. That let me build deep relationships with providers, understand the domain, and execute a complex migration. Jumping between companies every 18 months, I would have missed this.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

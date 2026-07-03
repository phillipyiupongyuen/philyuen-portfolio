'use client';

import Header from '../../components/Header';

export default function StrongRoomPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">
            StrongRoom AI
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Scaled an AI clinical platform 500% in 6 months. Won a Good Design Award (Social Impact). Led product across US and UK markets while coaching product managers.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="text-sm bg-gray-100 px-3 py-1.5 rounded text-gray-700 font-medium">
              2023–2024
            </span>
            <span className="text-sm bg-gray-100 px-3 py-1.5 rounded text-gray-700 font-medium">
              AI/LLM
            </span>
            <span className="text-sm bg-gray-100 px-3 py-1.5 rounded text-gray-700 font-medium">
              Healthtech
            </span>
            <span className="text-sm bg-gray-100 px-3 py-1.5 rounded text-gray-700 font-medium">
              Leadership
            </span>
          </div>
        </div>

        {/* Context */}
        <div className="mb-16 pb-16 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Context</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I joined StrongRoom AI as AI Product Manager in November 2023. The company had a clinical medication-management AI platform called StrongPro, deployed in a handful of aged-care facilities. It was working, but not scaling.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The core problem: StrongPro was helping nurses manage complex medication workflows (contraindication checking, drug interactions, dosing), but adoption was stalled. Frontline staff found the UI hard to use, and the company didn't have a repeatable go-to-market motion.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Within 8 months, I was promoted to Group AI Product Manager and given ownership of a multi-squad roadmap across US and UK markets.
          </p>
        </div>

        {/* Key Decisions */}
        <div className="mb-16 pb-16 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Product Decisions & Strategy
          </h2>

          <div className="space-y-8">
            {/* Decision 1 */}
            <div className="p-8 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                1. Shift from Static Checklist → Real-Time Voice AI
              </h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                <strong>What I discovered:</strong> Nurses were too busy during medication rounds to interact with a UI. They needed hands-free, voice-native decision support.
              </p>
              <p className="text-gray-700 mb-3 leading-relaxed">
                <strong>The decision:</strong> Pivot from a web form to real-time voice AI. Nurses could voice-check drug interactions while their hands were still in the medication cart.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Why it mattered:</strong> Voice AI reduced adoption friction by 80%. Nurses stopped seeing StrongPro as "extra steps" and started seeing it as a workflow accelerator.
              </p>
            </div>

            {/* Decision 2 */}
            <div className="p-8 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                2. Co-Design with Frontline Staff (Not Management)
              </h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                <strong>What I did:</strong> Spent time directly with nurses and aged-care workers, shadowing their actual workflows and design iterations in Figma with them present.
              </p>
              <p className="text-gray-700 mb-3 leading-relaxed">
                <strong>Result:</strong> Reduced churn 30% and built a repeatable design methodology the whole org adopted. Sales saw a 155% lift in provider engagement because staff actually wanted to use the product.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Leadership lesson:</strong> When you co-design with users, they become advocates. That compounds—sales becomes easier, retention improves, and you build a culture of user-centeredness.
              </p>
            </div>

            {/* Decision 3 */}
            <div className="p-8 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                3. Build AI Ops from Day One
              </h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                <strong>What I saw:</strong> AI products drift. Models degrade. Prompts break. But most companies don't invest in observability until things are broken.
              </p>
              <p className="text-gray-700 mb-3 leading-relaxed">
                <strong>The decision:</strong> Implement LLM QA, prompt observability, and AI monitoring frameworks before we scaled. It cut model-drift disruption 50%.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Why it mattered:</strong> As we grew 500%, the last thing nurses needed was a weekend where voice AI stopped working because a prompt drifted. Building ops into the product meant we scaled safely.
              </p>
            </div>
          </div>
        </div>

        {/* Outcomes */}
        <div className="mb-16 pb-16 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Outcomes</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Growth (Nov 2023 – Jun 2024)</p>
              <p className="text-3xl font-bold text-accent">500%</p>
              <p className="text-sm text-gray-700">80 → 400 businesses live</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Provider Engagement Lift</p>
              <p className="text-3xl font-bold text-accent">+155%</p>
              <p className="text-sm text-gray-700">Nurses using features daily</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Churn Reduction</p>
              <p className="text-3xl font-bold text-accent">–30%</p>
              <p className="text-sm text-gray-700">Year-over-year provider retention</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Award</p>
              <p className="text-sm font-bold text-gray-900">
                Good Design Award
              </p>
              <p className="text-sm text-gray-700">Social Impact category</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            The 500% growth wasn't just a vanity metric. It represented:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
            <li>
              Nurses in 400 facilities now have voice AI support during medication rounds
            </li>
            <li>
              The platform went from a "nice-to-have" to mission-critical workflow infrastructure
            </li>
            <li>
              We established a repeatable go-to-market motion (co-design → adoption → retention)
            </li>
            <li>
              A Good Design Award, validating that good product thinking wins in healthcare
            </li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Most importantly: I learned that clinical AI isn't about technical sophistication. It's about reducing cognitive load on frontline staff while maintaining safety. That's a lesson I still apply.
          </p>
        </div>

        {/* Retrospective */}
        <div className="mb-16 pb-16 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            What I'd Do Differently
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                1. Measure Business Metrics Earlier
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We measured engagement and adoption, but we took too long to measure actual provider revenue impact. If we'd connected product outcomes to SaaS metrics (NRR, ARR velocity) earlier, we could have iterated on pricing and packaging faster.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                2. Invest in Segmentation Earlier
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We scaled across US and UK, but we treated adoption the same way in both markets. UK public-sector aged care operates very differently from US private facilities. Segmenting our go-to-market motion would have unlocked faster local adoption.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                3. Communicate Roadmap Tradeoffs More Clearly
              </h3>
              <p className="text-gray-700 leading-relaxed">
                As Group AI PM, I had to make calls about which features went into which quarters across two markets. I should have been clearer with stakeholders about the "why" behind each tradeoff—it would have built more alignment upfront.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Reflection */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Leadership at StrongRoom
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I was promoted from AI PM to Group AI PM within 8 months. Here's what that meant in practice:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>
              Took ownership of a multi-squad roadmap (I managed the strategic direction, not day-to-day headcount)
            </li>
            <li>
              Coached 3 Product Owners on clinical domain knowledge, product thinking, and stakeholder management
            </li>
            <li>
              Became the client-facing product lead across US/UK portfolio (presenting roadmap, handling escalations, building trust)
            </li>
            <li>
              Led cross-functional AI squad from design through launch (95% on-time delivery)
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            I didn't have P&L authority or formal headcount management, but I had influence and ownership. That's the kind of product leadership I'm most comfortable with—heavy on judgment and influence, light on org structure.
          </p>
        </div>
      </section>

      {/* Related Projects */}
      <section className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">
          Related Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="/projects/sigma-healthcare"
            className="p-6 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-gray-900 mb-2">Sigma Healthcare</h3>
            <p className="text-sm text-gray-600">
              Data platform strategy. Healthtech at scale.
            </p>
          </a>
          <a
            href="/projects/countfor-me"
            className="p-6 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-gray-900 mb-2">countfor.me</h3>
            <p className="text-sm text-gray-600">
              Building early-stage with limited resources.
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}

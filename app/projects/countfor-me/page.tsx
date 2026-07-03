'use client';

import Header from '../../components/Header';

export default function CountforMePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-semibold text-gray-900 mb-4">
          countfor.me
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Co-Founder and Product Lead. Hospitality fintech, Japan market entry. Building with 8 university-funded volunteer interns. Running tight build-measure-learn loops.
        </p>

        {/* Context */}
        <div className="mb-16 pb-16 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Context</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Why Japan? Why hospitality?</strong>
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Japan's hospitality sector faces a severe labour shortage and rising regulatory burden. Tax compliance (QIS, EBA) is Byzantine. Bookkeeping is still paper-heavy, especially for small operators. There's real pain and a market willing to pay for solutions.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I identified OCR-driven invoice capture as the core workflow redesign that could unlock this market. That became countfor.me.
          </p>
        </div>

        {/* What I've Built */}
        <div className="mb-16 pb-16 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Product & Strategy
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                Market Entry Strategy
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Focus: Small hospitality operators (ramen, izakayas, cafes). Problem: Manual invoice processing takes 3-4 hours per week. Solution: OCR + compliance-aware categorization (QIS standards).
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                Product Decisions
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>Start with invoice capture:</strong> Lowest friction, highest pain relief. Build trust before expanding to full bookkeeping.
                </li>
                <li>
                  <strong>Build a commodity-price feature:</strong> Directly sourced from operator feedback (cost volatility is a real pain point).
                </li>
                <li>
                  <strong>Compliance-first design:</strong> Every feature embeds Japanese tax standards (QIS, EBA) from day one.
                </li>
              </ul>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                Team & Operations
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Building with 8 university-funded volunteer interns. Lean team, high agency. Running weekly product reviews and build-measure-learn loops with early users.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This is a lesson in <strong>product leadership without headcount</strong>: I direct strategy and user engagement; interns handle engineering and design. Clear ownership, clear feedback loops.
              </p>
            </div>
          </div>
        </div>

        {/* Early Validation */}
        <div className="mb-16 pb-16 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Early Validation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Placeholder:</strong> Share your early metrics:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
            <li>Number of onboarded users / businesses</li>
            <li>Usage metrics (invoices processed, monthly active users)</li>
            <li>Feedback themes from operators</li>
            <li>Product-market fit signals (or lack thereof)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            <strong>Placeholder:</strong> What have you learned so far? What's validating? What's surprising?
          </p>
        </div>

        {/* What's Hard */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            What I've Learned So Far
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Placeholder:</strong> What's the hardest part of founding? What surprised you about the market? What's your biggest blocker?
            </p>
            <p>
              This is where you share the real, unvarnished lessons. Hiring managers want to hear about hard problems and how you think about them.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-200">
        <p className="text-gray-700 leading-relaxed">
          Interested in what we're building? Reach out.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <a href="mailto:phillip.yiu.pong.yuen@gmail.com" className="text-accent hover:text-accent-dark font-medium">
            phillip.yiu.pong.yuen@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}

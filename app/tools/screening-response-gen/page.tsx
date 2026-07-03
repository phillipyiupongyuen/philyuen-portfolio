'use client';

import { useState } from 'react';
import Header from '../../components/Header';

export default function ScreeningResponseGen() {
  const [question, setQuestion] = useState('');
  const [context, setContext] = useState('');
  const [responses, setResponses] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResponses([]);

    try {
      const res = await fetch('/api/generate-response', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, context }),
      });

      if (!res.ok) {
        throw new Error('Failed to generate response');
      }

      const data = await res.json();
      setResponses(data.responses);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-semibold text-gray-900 mb-4">
          Screening Response Generator
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Paste a screening question from a job application. Get 2-3 tailored response options powered by Claude.
        </p>

        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <form onSubmit={handleGenerate} className="space-y-6">
            {/* Question Input */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Screening Question
              </label>
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Paste the screening question here (e.g., 'Tell us about a time you shipped a product under pressure...')"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                rows={4}
                required
              />
            </div>

            {/* Context Input */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Your Relevant Experience (optional)
              </label>
              <textarea
                value={context}
                onChange={(e) => setContext(e.target.value)}
                placeholder="e.g., 'Built StrongRoom AI platform from zero to $1.5M ARR in 18 months, managing 500% user growth while maintaining clinical safety standards...'"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                rows={4}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Generating...' : 'Generate Responses'}
            </button>
          </form>
        </div>

        {/* Error State */}
        {error && (
          <div className="p-4 mb-8 bg-red-50 border border-red-200 rounded-lg text-red-900">
            {error}
          </div>
        )}

        {/* Responses */}
        {responses.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Generated Responses</h2>
            {responses.map((response, idx) => (
              <div
                key={idx}
                className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-medium text-gray-900">Option {idx + 1}</h3>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(response);
                      alert('Copied to clipboard!');
                    }}
                    className="text-sm text-accent hover:text-accent-dark transition-colors"
                  >
                    Copy
                  </button>
                </div>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {response}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Placeholder for first-time users */}
        {!loading && responses.length === 0 && !error && (
          <div className="p-12 bg-gray-50 rounded-lg text-center">
            <svg
              className="w-12 h-12 mx-auto mb-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p className="text-gray-600">
              Enter a screening question above to get started.
            </p>
          </div>
        )}
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="font-semibold text-gray-900">Paste the Question</h3>
            <p className="text-sm text-gray-600">
              Copy-paste any screening question from a job application.
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h3 className="font-semibold text-gray-900">Add Context (Optional)</h3>
            <p className="text-sm text-gray-600">
              Share relevant experience to get more tailored responses.
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h3 className="font-semibold text-gray-900">Pick & Copy</h3>
            <p className="text-sm text-gray-600">
              Choose your favorite response and copy it to your application.
            </p>
          </div>
        </div>
      </section>

      {/* Why I Built This */}
      <section className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why I Built This</h2>
        <p className="text-gray-600 mb-4">
          I've applied to 50+ senior PM and lead PM roles since June 2026. For each application, I need to tailor screening responses to the specific role, company, and culture. Doing this manually is tedious and repetitive.
        </p>
        <p className="text-gray-600 mb-4">
          This tool lets me generate 2-3 tailored options in seconds, pick the best one, and iterate. It's a real workflow I use, and it demonstrates:
        </p>
        <ul className="space-y-2 text-gray-600 list-disc list-inside mb-4">
          <li>
            How I think about automation and tooling (a core PM skill)
          </li>
          <li>
            That I can integrate Claude API into products
          </li>
          <li>
            Understanding of hiring workflows and what hiring managers care about
          </li>
        </ul>
        <p className="text-gray-600">
          Check out the <a href="/claude-code" className="text-accent hover:text-accent-dark font-medium">Claude Code case study</a> to see how I scaled this across my entire job search.
        </p>
      </section>
    </div>
  );
}

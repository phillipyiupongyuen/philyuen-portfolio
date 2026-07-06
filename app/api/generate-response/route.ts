import { NextRequest, NextResponse } from 'next/server';
import { PHIL_BIO } from '../../lib/phil-bio';

type Draft = { angle: string; text: string };

function extractJson(text: string): unknown {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const candidate = fenced ? fenced[1] : text;
  const start = candidate.indexOf('{');
  const end = candidate.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('No JSON object found in model output');
  return JSON.parse(candidate.slice(start, end + 1));
}

export async function POST(request: NextRequest) {
  try {
    const { question, context } = await request.json();

    if (!question) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const prompt = `You are drafting screening-question responses on behalf of Phil Yuen, a product manager, for his portfolio site's "Screening Response Generator" tool. Ground every claim in the real background below — never invent achievements or numbers that aren't in it.

PHIL'S REAL BACKGROUND:
${PHIL_BIO}

${context ? `ADDITIONAL CONTEXT SUPPLIED FOR THIS ANSWER:\n${context}\n` : ''}
SCREENING QUESTION:
"${question}"

Write exactly two distinct response drafts answering this question in Phil's voice (first person, conversational, honest, concise — 2-4 sentences each). Each draft should take a genuinely different angle (for example: outcome-led vs. systems-led, judgment-led vs. process-led, founder-led vs. commercial-led — pick whatever two angles best fit this question). Give each draft a short two-to-three-word angle label ending in "-led" (e.g. "Outcome-led").

Respond with ONLY a JSON object in this exact shape, no other text:
{"drafts": [{"angle": "...", "text": "..."}, {"angle": "...", "text": "..."}]}`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-5',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json({ error: 'Failed to generate response', details: error }, { status: 500 });
    }

    const data = await response.json();
    const text = data.content?.[0]?.text || '';

    let drafts: Draft[];
    try {
      const parsed = extractJson(text) as { drafts?: Draft[] };
      if (!parsed.drafts || !Array.isArray(parsed.drafts) || parsed.drafts.length === 0) {
        throw new Error('Malformed drafts payload');
      }
      drafts = parsed.drafts;
    } catch {
      drafts = [{ angle: 'Response', text: text.trim() }];
    }

    return NextResponse.json({ drafts });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

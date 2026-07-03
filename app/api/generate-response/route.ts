import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { question, context } = await request.json();

    if (!question) {
      return NextResponse.json(
        { error: 'Question is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    // Build the prompt
    const prompt = `You are a helpful assistant that generates tailored responses to PM screening questions.

The candidate has the following experience:
${context || 'Not provided'}

The screening question is:
"${question}"

Generate 2-3 distinct, tailored response options that:
- Are honest and authentic (don't fabricate)
- Directly address the question
- Showcase relevant experience
- Are concise (1-2 paragraphs each)
- Sound natural (conversational, not stiff)

Format each response as a separate block, numbered (1. 2. 3.).`;

    // Call Anthropic API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1000,
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json(
        { error: 'Failed to generate response', details: error },
        { status: 500 }
      );
    }

    const data = await response.json();
    const text = data.content[0]?.text || '';

    // Parse responses (split by newline and numbered format)
    const responses = text
      .split(/\n(?=\d\.)/)
      .map((r: string) => r.replace(/^\d\.\s*/, '').trim())
      .filter((r: string) => r.length > 0);

    return NextResponse.json({ responses });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

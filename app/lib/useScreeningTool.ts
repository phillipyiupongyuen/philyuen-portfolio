'use client';

import { useState } from 'react';
import { questionBank } from './screening-questions';

export type Draft = { angle: string; text: string };
export type ToolStatus = 'idle' | 'loading' | 'done' | 'error';

export function useScreeningTool() {
  const [selected, setSelected] = useState(0);
  const [context, setContext] = useState('');
  const [status, setStatus] = useState<ToolStatus>('idle');
  const [drafts, setDrafts] = useState<Draft[]>([]);
  const [error, setError] = useState('');

  const pick = (i: number) => {
    setSelected(i);
    setStatus('idle');
    setDrafts([]);
  };

  const generate = async () => {
    setStatus('loading');
    setError('');
    try {
      const res = await fetch('/api/generate-response', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: questionBank[selected].full, context }),
      });
      if (!res.ok) throw new Error('Failed to generate responses');
      const data = await res.json();
      setDrafts(data.drafts);
      setStatus('done');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  return {
    questionBank,
    selected,
    pick,
    context,
    setContext,
    status,
    drafts,
    error,
    generate,
    currentQuestion: questionBank[selected],
  };
}

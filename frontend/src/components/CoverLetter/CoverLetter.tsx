import { useState } from 'react';
import { streamJsonEvents } from '../../api';

export function CoverLetter() {
  const [jobDescription, setJobDescription] = useState('');
  const [letter, setLetter] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generate = async () => {
    if (!jobDescription.trim()) return;
    setLoading(true);
    setError('');
    setLetter('');
    try {
      await streamJsonEvents('/ai/coverletter', { jobDescription }, (event) => {
        if (typeof event.error === 'string') {
          setError(event.error);
          return;
        }
        if (typeof event.token === 'string') {
          setLetter((prev) => prev + event.token);
        }
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Cover letter generation failed');
    } finally {
      setLoading(false);
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(letter);
  };

  return (
    <section id="cover-letter" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="mb-4 text-2xl font-semibold text-slate-100">AI Cover Letter Generator</h2>
      <textarea
        rows={8}
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Paste job description here..."
        className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-slate-200 outline-none"
      />
      <div className="mt-3 flex gap-3">
        <button onClick={generate} className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white">
          {loading ? 'Generating...' : 'Generate Cover Letter'}
        </button>
        <button onClick={copy} disabled={!letter} className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200 disabled:opacity-50">
          Copy
        </button>
      </div>
      {error && <p className="mt-3 text-sm text-rose-300">{error}</p>}
      <pre className="mt-4 whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
        {letter || 'Your generated cover letter will appear here...'}
      </pre>
    </section>
  );
}

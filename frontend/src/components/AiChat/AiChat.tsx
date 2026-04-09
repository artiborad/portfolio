import { useState } from 'react';
import { streamJsonEvents } from '../../api';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

type AiChatProps = {
  open: boolean;
  onToggle: () => void;
};

export function AiChat({ open, onToggle }: AiChatProps) {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Hi! Ask me anything about Arti Borad.' },
  ]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const prompt = input;
    setInput('');
    setLoading(true);
    setMessages((prev) => [...prev, { role: 'user', content: prompt }, { role: 'assistant', content: '' }]);

    try {
      await streamJsonEvents('/ai/chat', { message: prompt }, (event) => {
        if (typeof event.error === 'string') {
          setMessages((prev) => [...prev.slice(0, -1), { role: 'assistant', content: `Error: ${event.error}` }]);
          return;
        }
        if (typeof event.token === 'string') {
          setMessages((prev) => {
            const last = prev[prev.length - 1];
            if (!last || last.role !== 'assistant') return prev;
            return [...prev.slice(0, -1), { ...last, content: last.content + event.token }];
          });
        }
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 w-[340px] rounded-xl border border-slate-700 bg-slate-950 p-3 shadow-2xl">
          <div className="max-h-80 space-y-2 overflow-auto pb-2">
            {messages.map((message, idx) => (
              <div key={`${message.role}-${idx}`} className={message.role === 'user' ? 'text-right' : 'text-left'}>
                <p className={`inline-block rounded-lg px-3 py-2 text-sm ${message.role === 'user' ? 'bg-sky-500 text-white' : 'bg-slate-800 text-slate-200'}`}>
                  {message.content || (loading ? '...' : '')}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-2 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Ask about AWS, projects, skills..."
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none"
            />
            <button onClick={send} className="rounded-lg bg-sky-500 px-3 text-white">
              Send
            </button>
          </div>
        </div>
      )}
      <button onClick={onToggle} className="rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg">
        {open ? 'Close AI' : 'AI Chat'}
      </button>
    </div>
  );
}

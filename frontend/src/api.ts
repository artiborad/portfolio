const API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:3001';

export async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response.json() as Promise<T>;
}

export async function streamJsonEvents(
  path: string,
  payload: Record<string, unknown>,
  onEvent: (event: Record<string, unknown>) => void,
) {
  const response = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!response.ok || !response.body) {
    throw new Error(`Stream request failed: ${response.status}`);
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    buffer += decoder.decode(value, { stream: true });
    const events = buffer.split('\n\n');
    buffer = events.pop() ?? '';

    for (const eventText of events) {
      const dataLine = eventText
        .split('\n')
        .find((line) => line.startsWith('data: '));
      if (!dataLine) {
        continue;
      }
      try {
        const parsed = JSON.parse(dataLine.slice(6)) as Record<string, unknown>;
        onEvent(parsed);
      } catch {
        // Ignore malformed event chunks.
      }
    }
  }
}

export const apiBase = API_BASE;

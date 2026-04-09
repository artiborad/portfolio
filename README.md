# AI-Powered Developer Portfolio

Full-stack portfolio for **Arti Borad** with a NestJS backend, React + Tailwind frontend, and AI features powered by OpenAI + LangChain.

## Tech Stack

- Backend: NestJS (TypeScript), LangChain.js, OpenAI, PostgreSQL + pgvector, Socket.io
- Frontend: React (Vite + TypeScript), Tailwind CSS
- Deployment target: AWS Lambda (backend API) + S3 (frontend static hosting)

## Project Structure

```
portfolio/
├── backend/
│   ├── src/
│   │   ├── ai/
│   │   │   ├── chat/
│   │   │   ├── coverletter/
│   │   │   └── search/
│   │   ├── projects/
│   │   ├── experience/
│   │   └── main.ts
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── src/components/
│   │   ├── Hero/
│   │   ├── Experience/
│   │   ├── Projects/
│   │   ├── Skills/
│   │   ├── AiChat/
│   │   ├── CoverLetter/
│   │   └── Contact/
│   ├── src/App.tsx
│   └── package.json
└── README.md
```

## Features

1. **AI Chat Assistant** (`POST /ai/chat`)
   - Floating chat bubble in frontend
   - Uses `gpt-4o`
   - Resume context hardcoded in backend system prompt
   - Conversation memory with LangChain `BufferMemory`
   - Streams token-by-token responses (SSE)

2. **Smart Project Search** (`POST /ai/search`)
   - Natural-language project search
   - Embeddings stored in PostgreSQL `pgvector`
   - Seeds project embeddings on backend startup
   - Returns matched projects + AI-generated explanation

3. **Auto Cover Letter Generator** (`POST /ai/coverletter`)
   - Paste job description in frontend
   - Generates tailored, first-person cover letter
   - Professional tone, max ~300 words
   - Streams output token-by-token (SSE)

## Environment Variables

Create `backend/.env` from `backend/.env.example`:

```env
OPENAI_API_KEY=ollama
OPENAI_BASE_URL=http://localhost:11434/v1
OPENAI_MODEL=llama3.2
OPENAI_EMBEDDING_MODEL=nomic-embed-text
DATABASE_URL=postgresql://localhost:5432/portfolio
PORT=3001
```

Optional frontend env (`frontend/.env`):

```env
VITE_API_URL=http://localhost:3001
```

## Local Setup

### 1) Backend

```bash
cd backend
npm install
npm run start:dev
```

### Optional: Run fully local AI with Ollama (free)

```bash
ollama pull llama3.2
ollama pull nomic-embed-text
```

Then start backend normally (`npm run start:dev`).

### 2) Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173` and backend on `http://localhost:3001`.

## API Quick Test

- `GET /projects`
- `GET /experience`
- `POST /ai/chat` with `{ "message": "What is Arti's experience with AWS?" }`
- `POST /ai/search` with `{ "query": "show me projects involving real-time systems" }`
- `POST /ai/coverletter` with `{ "jobDescription": "..." }`

## AWS Deployment Notes

- Frontend: build (`npm run build` in `frontend`) and upload `frontend/dist` to S3 static hosting.
- Backend: package Nest app as Lambda (or run in container on ECS/Fargate), configure API Gateway, and set env vars in AWS.
- Use managed PostgreSQL (RDS) with `pgvector` extension enabled.

# Chanhee OS

Chanhee OS is a living digital home for learning, building, reflecting, and growing in public.

This is not meant to feel like a static portfolio. It is the first surface of a personal operating system: a cozy study room, digital garden, learning archive, content engine, AI companion, and future community platform.

## Current State

The repository now contains two layers:

1. A Next.js platform scaffold
2. A static HTML prototype kept as a preview fallback

The Next.js layer includes:

- `app/page.tsx` for the Chanhee OS home
- `app/blog`, `app/books`, `app/writing`, `app/pte`, `app/projects`, `app/thesis`, `app/videos`, `app/ask`, and `app/community`
- `app/dev`, `app/youtube`, `app/life`, `app/board`, and `app/about` for the personal-brand PRD IA
- `app/gardens` for future multi-user growth spaces
- `app/now` and `app/journey` for the living growth timeline
- `components/` for reusable UI sections
- `lib/content/platform.ts` for platform content data
- `lib/content/brand.ts` for Chanhee Lee personal branding, proof cards, and hub taxonomy
- `lib/content/archive.ts` for living Blog, Books, Projects, Thesis, and YouTube archive items
- `lib/ai/rag.ts` for RAG-ready document and chunk types
- `lib/ai/embeddings.ts` for OpenAI embedding generation
- `lib/ai/ingest.ts` for the ingestion pipeline skeleton
- `lib/vector/store.ts` for the vector store adapter contract
- `lib/db/schema.ts` for the first database domain map
- `lib/db/client.ts` for PostgreSQL connection setup
- `lib/supabase/client.ts` for Supabase browser and service clients
- `db/schema.sql` and `db/seed.sql` for the first PostgreSQL implementation draft
- `app/map` for a searchable Garden Map across seeded knowledge
- `public/assets/hero-workspace.png` for the generated study room hero image

The static fallback includes:

- `index.html`
- `styles.css`
- `script.js`
- `assets/hero-workspace.png`

## Experience Goals

Visitors should feel like they entered a warm personal study room:

- books on shelves
- notes scattered across a desk
- projects being built
- research in progress
- videos being recorded
- ideas evolving over time

The emotional goal is simple:

> If Chanhee can learn this, maybe I can too.

## Core Sections

- Digital Home
- Dev Hub
- YouTube Hub
- Life Graph
- Visitor Board
- Recruiter Snapshot
- Now Page
- Digital Garden
- Writing Hub with interactive frameworks, reflection prompts, and examples
- PTE Hub with speaking templates, writing drills, vocabulary strategy, and examples
- Books
- Thesis
- Blog
- Projects
- YouTube Library
- Ask Chanhee AI with a local seed-based RAG preview endpoint
- Future Community
- Growth Gardens for future users

## Mascot And Logo

The prototype includes:

- a handcrafted `C` logo using a book and sprout motif
- a small companion mascot named Mori

Mori is intended to become the calm study companion of the platform: curious, friendly, intelligent, and growth-oriented.

## Future Stack

The production platform is being shaped around:

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase Postgres
- Supabase Auth
- Supabase Storage
- OpenAI
- Supabase pgvector
- RAG architecture
- Clerk or Auth.js
- S3-compatible storage
- Vercel and AWS

## Local Development

Install dependencies, then run the app:

```bash
npm install
npm run dev
```

The current environment did not expose `npm`, so dependency installation and runtime verification were not completed here.

## Long-Term Direction

Today, Chanhee OS is one person's digital garden.

Tomorrow, it becomes a community of builders, learners, readers, and creators.

Eventually, it becomes a platform where other people can build their own digital gardens.

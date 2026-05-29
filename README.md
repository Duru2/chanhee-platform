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
- `components/` for reusable UI sections
- `lib/content/platform.ts` for platform content data
- `lib/ai/rag.ts` for RAG-ready document and chunk types
- `lib/db/schema.ts` for the first database domain map
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
- Now Page
- Digital Garden
- Writing Hub
- PTE Hub
- Books
- Thesis
- Blog
- Projects
- YouTube Library
- Ask Chanhee AI
- Future Community

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
- PostgreSQL
- OpenAI
- Vector database
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

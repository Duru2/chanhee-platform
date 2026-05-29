# Chanhee OS Architecture

This document describes the intended platform architecture. The current repository is a static prototype, but the product should be designed as a platform from the beginning.

## Product Model

Chanhee is the first user, not the only user.

The system should support three layers:

1. Personal OS
2. Community OS
3. Multi-user garden platform

## Core Domains

### Content

- Blog posts
- Book notes
- Writing frameworks
- PTE lessons
- Thesis updates
- Research notes
- Programming notes
- Project logs
- YouTube videos
- Newsletter issues
- Faith reflections

### Learning Hubs

- Writing Hub
- PTE Hub
- Books Hub
- Thesis Hub
- AI Experiments Hub
- Career Hub

Each hub should be interactive. Existing knowledge assets should become guided lessons, searchable pages, drills, prompts, and learning paths.

### AI

Ask Chanhee AI should answer from Chanhee's actual archive.

Recommended pipeline:

1. Import source content
2. Normalize into structured documents
3. Chunk content by semantic section
4. Generate embeddings
5. Store vectors and metadata
6. Retrieve relevant context
7. Generate grounded answers with citations
8. Capture feedback for improvement

### Community

Community features should come after the personal OS and content archive have enough gravity.

- User accounts
- Profiles
- Comments
- Discussions
- Study groups
- Book clubs
- Career groups
- Direct messages
- Group chat
- Voice channels
- Event spaces

## Suggested Next.js Structure

```text
app/
  page.tsx
  garden/
  blog/
  books/
  writing/
  pte/
  projects/
  thesis/
  videos/
  ask/
  community/
components/
  brand/
  mascot/
  garden/
  content/
  assistant/
lib/
  db/
  ai/
  content/
  auth/
  search/
  vector/
content/
  blog/
  books/
  writing/
  pte/
  thesis/
  projects/
```

## Data Model Draft

```text
users
profiles
posts
notes
books
book_notes
projects
project_updates
videos
thesis_updates
learning_hubs
hub_lessons
tags
content_tags
embeddings
ai_conversations
comments
groups
group_members
discussions
messages
```

## AI Metadata

Every indexed item should include:

- source type
- title
- slug
- author
- tags
- created date
- updated date
- canonical URL
- visibility
- hub
- project
- confidence status

## Design Principles

- Warm before impressive
- Personal before polished
- Learning before expertise
- Systems before scattered posts
- Community after gravity
- Platform after proof

## Migration Path

1. Keep this static prototype as the visual and product direction.
2. Scaffold a Next.js TypeScript app.
3. Convert sections into reusable components.
4. Move content into MDX or database-backed records.
5. Add PostgreSQL schema.
6. Add content ingestion and search.
7. Add OpenAI embeddings and a vector database.
8. Ship Ask Chanhee AI with citations.
9. Add accounts and community surfaces.
10. Generalize the system for other users' gardens.

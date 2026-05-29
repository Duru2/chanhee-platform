create extension if not exists pgcrypto;

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamptz not null default now()
);

create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  handle text unique not null,
  display_name text not null,
  bio text,
  role_summary text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists gardens (
  id uuid primary key default gen_random_uuid(),
  owner_profile_id uuid references profiles(id) on delete cascade,
  slug text unique not null,
  title text not null,
  focus text not null,
  promise text not null,
  visibility text not null default 'public' check (visibility in ('public', 'private', 'community')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists garden_modules (
  id uuid primary key default gen_random_uuid(),
  garden_id uuid not null references gardens(id) on delete cascade,
  module_type text not null check (module_type in ('blog', 'books', 'writing', 'pte', 'projects', 'thesis', 'videos', 'ask', 'community', 'now')),
  title text not null,
  position integer not null default 0,
  settings jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists learning_hubs (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text not null,
  status text not null check (status in ('active', 'seed', 'future')),
  created_at timestamptz not null default now()
);

create table if not exists hub_lessons (
  id uuid primary key default gen_random_uuid(),
  hub_id uuid not null references learning_hubs(id) on delete cascade,
  slug text not null,
  title text not null,
  mode text not null,
  summary text not null,
  prompt text,
  example text,
  steps jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (hub_id, slug)
);

create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid references profiles(id) on delete set null,
  slug text unique not null,
  title text not null,
  excerpt text,
  body text not null,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  published_at timestamptz
);

create table if not exists books (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  author text,
  status text not null default 'reading' check (status in ('want_to_read', 'reading', 'finished', 'paused')),
  started_at date,
  finished_at date,
  created_at timestamptz not null default now()
);

create table if not exists book_notes (
  id uuid primary key default gen_random_uuid(),
  book_id uuid not null references books(id) on delete cascade,
  title text not null,
  body text not null,
  application text,
  created_at timestamptz not null default now()
);

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  summary text not null,
  status text not null default 'building' check (status in ('idea', 'building', 'shipped', 'paused')),
  repository_url text,
  demo_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists project_updates (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects(id) on delete cascade,
  title text not null,
  body text not null,
  lesson text,
  created_at timestamptz not null default now()
);

create table if not exists videos (
  id uuid primary key default gen_random_uuid(),
  youtube_id text unique,
  title text not null,
  category text not null,
  description text,
  transcript text,
  published_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists thesis_updates (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  body text not null,
  research_question text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists tags (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  label text not null
);

create table if not exists content_tags (
  id uuid primary key default gen_random_uuid(),
  tag_id uuid not null references tags(id) on delete cascade,
  content_type text not null,
  content_id uuid not null,
  unique (tag_id, content_type, content_id)
);

create table if not exists embeddings (
  id uuid primary key default gen_random_uuid(),
  content_type text not null,
  content_id uuid not null,
  chunk_id text not null,
  source text not null,
  title text not null,
  content text not null,
  embedding_model text not null,
  vector_ref text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  unique (content_type, content_id, chunk_id)
);

create table if not exists ai_conversations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete set null,
  question text not null,
  answer text not null,
  citations jsonb not null default '[]'::jsonb,
  feedback_rating integer,
  feedback_note text,
  created_at timestamptz not null default now()
);

create table if not exists groups (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  description text,
  group_type text not null check (group_type in ('study', 'book_club', 'career', 'project', 'general')),
  created_at timestamptz not null default now()
);

create table if not exists group_members (
  id uuid primary key default gen_random_uuid(),
  group_id uuid not null references groups(id) on delete cascade,
  profile_id uuid not null references profiles(id) on delete cascade,
  role text not null default 'member' check (role in ('owner', 'moderator', 'member')),
  created_at timestamptz not null default now(),
  unique (group_id, profile_id)
);

create table if not exists discussions (
  id uuid primary key default gen_random_uuid(),
  group_id uuid references groups(id) on delete cascade,
  author_id uuid references profiles(id) on delete set null,
  title text not null,
  body text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists comments (
  id uuid primary key default gen_random_uuid(),
  author_id uuid references profiles(id) on delete set null,
  content_type text not null,
  content_id uuid not null,
  body text not null,
  created_at timestamptz not null default now()
);

create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  sender_id uuid references profiles(id) on delete set null,
  group_id uuid references groups(id) on delete cascade,
  body text not null,
  created_at timestamptz not null default now()
);

create index if not exists idx_hub_lessons_hub_id on hub_lessons(hub_id);
create index if not exists idx_garden_modules_garden_id on garden_modules(garden_id);
create index if not exists idx_posts_status on posts(status);
create index if not exists idx_embeddings_source on embeddings(source);
create index if not exists idx_embeddings_metadata on embeddings using gin(metadata);
create index if not exists idx_comments_content on comments(content_type, content_id);

create extension if not exists pgcrypto;
create extension if not exists vector;

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

create table if not exists content_items (
  id uuid primary key default gen_random_uuid(),
  owner_profile_id uuid references profiles(id) on delete set null,
  type text not null check (type in ('project', 'tech_blog', 'dev_log', 'system_design', 'video', 'writing', 'pte', 'life_event', 'board_post')),
  title text not null,
  slug text unique not null,
  summary text not null,
  body text,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  visibility text not null default 'public' check (visibility in ('public', 'private', 'community')),
  source_url text,
  canonical_url text,
  operator_note text,
  recruiter_highlight text,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
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

create table if not exists writing_posts (
  id uuid primary key default gen_random_uuid(),
  content_item_id uuid not null references content_items(id) on delete cascade,
  writing_type text not null check (writing_type in ('movie_review', 'song_review', 'anime_review', 'bible_study', 'essay', 'reading_log')),
  rating numeric(3, 1),
  related_work text,
  created_at timestamptz not null default now()
);

create table if not exists pte_entries (
  id uuid primary key default gen_random_uuid(),
  content_item_id uuid not null references content_items(id) on delete cascade,
  entry_type text not null check (entry_type in ('study_log', 'exam_review', 'score', 'expression', 'speaking_template', 'writing_template')),
  target_score integer,
  actual_score integer,
  exam_date date,
  created_at timestamptz not null default now()
);

create table if not exists life_events (
  id uuid primary key default gen_random_uuid(),
  content_item_id uuid not null references content_items(id) on delete cascade,
  event_type text not null check (event_type in ('australia', 'unsw', 'part_time_work', 'internship', 'job_prep', 'growth')),
  started_at date,
  ended_at date,
  location text,
  created_at timestamptz not null default now()
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

create table if not exists board_posts (
  id uuid primary key default gen_random_uuid(),
  content_item_id uuid references content_items(id) on delete cascade,
  author_name text not null,
  author_email text,
  post_type text not null default 'guestbook' check (post_type in ('guestbook', 'question', 'feedback')),
  body text not null,
  operator_reply text,
  status text not null default 'pending' check (status in ('pending', 'published', 'hidden')),
  created_at timestamptz not null default now(),
  replied_at timestamptz
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

create table if not exists external_links (
  id uuid primary key default gen_random_uuid(),
  content_type text not null,
  content_id uuid not null,
  provider text not null check (provider in ('github', 'youtube', 'linkedin', 'notion', 'resume', 'demo', 'other')),
  label text not null,
  url text not null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
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
  embedding vector(1536),
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
create index if not exists idx_content_items_type on content_items(type);
create index if not exists idx_content_items_visibility on content_items(visibility);
create index if not exists idx_posts_status on posts(status);
create index if not exists idx_embeddings_source on embeddings(source);
create index if not exists idx_embeddings_metadata on embeddings using gin(metadata);
create index if not exists idx_comments_content on comments(content_type, content_id);

alter table profiles enable row level security;
alter table content_items enable row level security;
alter table board_posts enable row level security;
alter table comments enable row level security;
alter table ai_conversations enable row level security;

drop policy if exists "Public can read published content" on content_items;
create policy "Public can read published content"
  on content_items for select
  using (visibility = 'public' and status = 'published');

drop policy if exists "Public can read published board posts" on board_posts;
create policy "Public can read published board posts"
  on board_posts for select
  using (status = 'published');

drop policy if exists "Visitors can create pending board posts" on board_posts;
create policy "Visitors can create pending board posts"
  on board_posts for insert
  with check (status = 'pending');

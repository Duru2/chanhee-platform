insert into learning_hubs (slug, title, description, status)
values
  ('writing', 'Writing Hub', 'Writing frameworks, reflection systems, journaling structures, storytelling methods, and communication notes.', 'active'),
  ('pte', 'PTE Hub', 'Vocabulary, speaking templates, writing templates, exam strategies, and study notes.', 'active'),
  ('books', 'Books', 'Reading trails connected to projects, faith, productivity, and career growth.', 'seed'),
  ('thesis', 'Thesis', 'Research progress, paper notes, methods, experiments, and open questions.', 'seed')
on conflict (slug) do nothing;

insert into tags (slug, label)
values
  ('reflection', 'Reflection'),
  ('storytelling', 'Storytelling'),
  ('pte-speaking', 'PTE Speaking'),
  ('pte-writing', 'PTE Writing'),
  ('vocabulary', 'Vocabulary'),
  ('rag', 'RAG')
on conflict (slug) do nothing;

insert into gardens (slug, title, focus, promise)
values
  (
    'chanhee',
    'Chanhee OS',
    'AI, software engineering, UNSW life, books, thesis, faith, and building in public.',
    'Follow the process of one person learning, building, reflecting, and becoming useful over time.'
  )
on conflict (slug) do nothing;

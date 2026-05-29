export default function BoardPostPage({ params }: { params: { postId: string } }) {
  return (
    <main className="min-h-screen bg-paper">
      <section className="section-band pt-28">
        <a className="font-display font-black text-leaf-dark" href="/board">
          Board
        </a>
        <div className="mt-16 warm-card p-6">
          <p className="section-label">Visitor post</p>
          <h1 className="font-display text-4xl font-black">Board post: {params.postId}</h1>
          <p className="mt-4 leading-8 text-muted">
            Placeholder detail route for visitor Q&A and operator replies. In the
            Supabase MVP this page reads `board_posts`, `comments`, and profile
            metadata with RLS.
          </p>
        </div>
      </section>
    </main>
  );
}

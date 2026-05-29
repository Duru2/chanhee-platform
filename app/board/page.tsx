import { brandHubs } from "@/lib/content/brand";
import { BrandHubPage } from "@/components/brand-hub-page";

const boardHub = brandHubs.find((hub) => hub.slug === "board")!;

const boardSeeds = [
  {
    title: "Ask Chanhee anything",
    body: "Visitor Q&A for projects, UNSW life, AI learning, and content ideas.",
    status: "MVP seed"
  },
  {
    title: "Guestbook",
    body: "A warm space for friends, subscribers, and casual visitors to leave notes.",
    status: "MVP seed"
  },
  {
    title: "Operator replies",
    body: "Chanhee replies stay visible so the board feels personal rather than anonymous.",
    status: "Moderated"
  }
];

export default function BoardPage() {
  return (
    <BrandHubPage hub={boardHub}>
      <div className="grid gap-4 md:grid-cols-3">
        {boardSeeds.map((post) => (
          <article key={post.title} className="warm-card p-5">
            <span className="text-xs font-black uppercase text-berry">{post.status}</span>
            <h2 className="mt-3 font-display text-2xl font-black">{post.title}</h2>
            <p className="mt-2 leading-7 text-muted">{post.body}</p>
          </article>
        ))}
      </div>
    </BrandHubPage>
  );
}

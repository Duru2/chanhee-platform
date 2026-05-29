import { ComingSoonPage } from "@/components/coming-soon-page";

export default function VideosPage() {
  return (
    <ComingSoonPage
      eyebrow="Content engine"
      title="YouTube"
      description="Videos become entry points into the wider learning archive, not isolated content."
      bullets={["AI", "Software Engineering", "UNSW", "Career", "Books", "Faith"]}
    />
  );
}

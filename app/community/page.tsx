import { ComingSoonPage } from "@/components/coming-soon-page";

export default function CommunityPage() {
  return (
    <ComingSoonPage
      eyebrow="Future rooms"
      title="Community"
      description="A future place for builders, learners, readers, and creators to discuss, study, and grow together."
      bullets={["Profiles", "Comments", "Study groups", "Book clubs", "Career groups"]}
    />
  );
}

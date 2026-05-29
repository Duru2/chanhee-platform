import { LearningHubPage } from "@/components/learning-hub-page";
import { pteCards } from "@/lib/content/learning-hubs";

export default function PteTemplatesPage() {
  return (
    <LearningHubPage
      eyebrow="PTE templates"
      title="Speaking & Writing Templates"
      intro="Reusable answer structures for speaking, writing, vocabulary conversion, and exam practice."
      cards={pteCards}
      companionNote="Templates are training wheels. Use them until fluency becomes natural."
    />
  );
}

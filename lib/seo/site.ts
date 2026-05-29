export const siteConfig = {
  name: "Chanhee OS",
  owner: "Chanhee Lee",
  title: "Chanhee Lee — Software Engineering Student, AI Builder, Full-Stack Developer",
  description:
    "Chanhee OS is a personal branding Digital HQ: developer portfolio, learning archive, YouTube hub, writing shelf, PTE study cockpit, life graph, and lightweight visitor board.",
  url: "https://chanhee-platform.vercel.app",
  keywords: [
    "Chanhee Lee",
    "UNSW software engineering student",
    "AI builder portfolio",
    "full-stack developer portfolio",
    "PTE study notes",
    "studying in Australia",
    "software engineering student blog"
  ]
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.owner,
  description: siteConfig.description,
  url: siteConfig.url,
  knowsAbout: [
    "Software Engineering",
    "Artificial Intelligence",
    "Full-stack Development",
    "UNSW Sydney",
    "PTE English Study",
    "Digital Gardens"
  ],
  sameAs: [
    "https://github.com/Duru2",
    "https://www.linkedin.com/"
  ]
};

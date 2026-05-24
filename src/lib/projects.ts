import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import work7 from "@/assets/work-7.jpg";

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  discipline: string;
  image: string;
  aspect: "tall" | "wide" | "square";
  caseStudy?: string;
};

export const projects: Project[] = [
  { slug: "meta-wearables", title: "VR System Apps", client: "Meta Reality Labs", year: "2025", discipline: "Wearables", image: work1, aspect: "square" },
  { slug: "developer-tools", title: "Developer Tools", client: "Meta", year: "2025", discipline: "Developer Tooling", image: work2, aspect: "tall", caseStudy: "Developer Platforms (Website + Trevi) — One combined case study. Two products, same team, same audience.\n\nWebsite: Full redesign of developers.meta.com/horizon. Driven by outdated content, new sections, expanding build paths (Unity, Horizon Worlds, internal + external devs). End-to-end design ownership.\n\nTrevi: Zero to one bug filing and resolving tool. Internal + external developer users. End-to-end design, shipped." },
  { slug: "world-desktop-editor", title: "World Desktop Editor", client: "Meta", year: "2024", discipline: "Spatial Tooling", image: work3, aspect: "wide" },
  { slug: "quest-for-business", title: "Quest for Business", client: "Horizon Managed Services", year: "2024", discipline: "Enterprise VR", image: work4, aspect: "tall" },
  { slug: "alaska-airlines", title: "Alaska Airlines", client: "Alaska Airlines", year: "2024", discipline: "Product Design", image: work5, aspect: "square" },
  { slug: "keurig-k-plus", title: "K+ Smart Brewer", client: "Keurig Dr Pepper", year: "2023", discipline: "Connected Product Design", image: work6, aspect: "square" },
  { slug: "ai-native-design", title: "AI Native Design Process", client: "Personal", year: "2025", discipline: "AI Design Process", image: work7, aspect: "square" },
];

import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  discipline: string;
  image: string;
  aspect: "tall" | "wide" | "square";
};

export const projects: Project[] = [
  { slug: "noyu", title: "Noyu Apothecary", client: "Noyu", year: "2025", discipline: "Brand & Packaging", image: work1, aspect: "square" },
  { slug: "fold-house", title: "Fold House", client: "Studio Aoyama", year: "2025", discipline: "Art Direction", image: work2, aspect: "tall" },
  { slug: "kassette", title: "Kassette Quarterly", client: "Kassette", year: "2024", discipline: "Editorial Design", image: work3, aspect: "wide" },
  { slug: "paper-essays", title: "Paper Essays", client: "Self-initiated", year: "2024", discipline: "Photography", image: work4, aspect: "tall" },
  { slug: "alaska-airlines", title: "Alaska Airlines", client: "Alaska Airlines", year: "2024", discipline: "Product Design", image: work5, aspect: "square" },
  { slug: "keurig-k-plus", title: "K+ Smart Brewer", client: "Keurig Dr Pepper", year: "2023", discipline: "Connected Product Design", image: work6, aspect: "square" },
];

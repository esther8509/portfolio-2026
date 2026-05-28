import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import work7 from "@/assets/work-7.jpg";

export type CaseStudyBlock =
  | { type: "intro"; body: string }
  | { type: "part"; eyebrow: string; title: string; subtitle?: string }
  | { type: "section"; heading: string; body: string }
  | { type: "placeholder"; label: string; caption: string; aspect?: "wide" | "tall" | "square" }
  | { type: "placeholder-group"; title: string; items: string[] };

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  discipline: string;
  image: string;
  aspect: "tall" | "wide" | "square";
  caseStudy?: string;
  caseStudyBlocks?: CaseStudyBlock[];
};

export const projects: Project[] = [
  {
    slug: "meta-wearables",
    title: "VR System Apps",
    client: "Meta Reality Labs",
    year: "2025",
    discipline: "Wearables",
    image: work1,
    aspect: "square",
    caseStudyBlocks: [
      {
        type: "intro",
        body:
          "Every operating system needs a foundation. For Meta Quest, that foundation was missing. While competitors like Apple Vision Pro had utility apps, none had done them particularly well — treating them as afterthoughts rather than native, purposeful experiences. Our team saw the gap and decided to close it, starting with the apps users were already searching for.",
      },
      {
        type: "section",
        heading: "The mandate",
        body:
          "I was the sole designer across three default OS-level apps shipping with Meta Quest and future unreleased devices: Clock, Files, and Calendar. Each app had a different starting point. Clock was zero to one, while Files and Calendar were iterative improvements on what existed before. All three were designed for VR and built with future form factors in mind.",
      },

      {
        type: "part",
        eyebrow: "Part 1",
        title: "Clock",
        subtitle: "Zero to one — shipped via AI-native workflow",
      },
      {
        type: "section",
        heading: "Overview",
        body:
          "A clear data signal started this one. Quest users were frequently searching for a clock app that didn't exist. That user need, combined with a team-wide push to experiment with AI-native building, created an unusual opportunity: I took Clock from ideation all the way to pushing code live onto the headset without any engineering intervention.",
      },
      {
        type: "section",
        heading: "The app",
        body:
          "The app was built for gaming and productivity use cases — the kind of lightweight utility you reach for mid-session. It has three tabs: Clock, Alarm, and Timer. Simple, focused, and designed to feel native to the platform in a way competitors haven't managed. This was the first real proof of a new way of working. The full process story lives in the AI-native section.",
      },
      {
        type: "placeholder",
        label: "Clock app",
        caption: "Clock, Alarm, and Timer tabs",
        aspect: "wide",
      },

      {
        type: "part",
        eyebrow: "Part 2",
        title: "Files",
        subtitle: "Iterative — platform capability unlock",
      },
      {
        type: "section",
        heading: "Overview",
        body:
          "The Files app already existed, but the experience needed meaningful improvement. The headline feature I designed was multi-select and drag and drop — and more importantly, the ability to drag files from VR directly into third-party apps like WhatsApp. That was a first for Meta Quest, and a real platform capability unlock, not just a UI improvement.",
      },
      {
        type: "section",
        heading: "Reception",
        body:
          "Release notes for the update received praise from users, who noticed and appreciated the improvement over what came before.",
      },
      {
        type: "placeholder",
        label: "Files app",
        caption: "Multi-select, drag and drop, third-party app interaction",
        aspect: "wide",
      },

      {
        type: "part",
        eyebrow: "Part 3",
        title: "Calendar",
        subtitle: "Shipped with Meta Quest v71 — Horizon OS redesign",
      },
      {
        type: "section",
        heading: "Overview",
        body:
          "Calendar shipped as part of the Meta Quest v71 update alongside a broader Horizon OS redesign. The feature I want to highlight here is a niche but technically interesting design problem: gaze targeting for a new wearable device that uses eye tracking to select UI elements.",
      },
      {
        type: "section",
        heading: "The design challenge",
        body:
          "The challenge was precision — specifically, what happens when multiple events overlap in the same time slot? How does the user select the right one with just their eyes? I worked closely with engineering to solve this, ultimately designing a flyout that expands beyond the initial calendar real estate when multiple events compete for the same gaze target. It gave users a clear, precise way to select exactly what they meant.",
      },
      {
        type: "placeholder",
        label: "Calendar app",
        caption: "Standard view and gaze target flyout for overlapping events",
        aspect: "wide",
      },

      {
        type: "section",
        heading: "Outcome",
        body:
          "All three apps ship as default OS-level experiences on Meta Quest. Files received user praise on release notes for the improvements over the previous experience. Clock and Calendar represent new ground for the platform — utility done natively and thoughtfully, setting a bar that competitors haven't yet matched.",
      },
      {
        type: "placeholder",
        label: "Outcome metric",
        caption: "Specific metrics or user feedback — to be added when available",
        aspect: "wide",
      },
    ],
  },
  {
    slug: "developer-tools",
    title: "Developer Platforms",
    client: "Meta",
    year: "2025",
    discipline: "Developer Tooling",
    image: work2,
    aspect: "tall",
    caseStudyBlocks: [
      {
        type: "intro",
        body:
          "Building for developers is different. The people using these tools are technical, opinionated, and have zero patience for friction. They'll go around a bad experience — and at Meta, they were. Bug reports were landing on Reddit and Twitter. The developer center was buried under outdated Oculus branding and thousands of pages of documentation with no clear path through.",
      },
      {
        type: "section",
        heading: "The mandate",
        body:
          "I owned both ends of that problem. As the sole designer across two interconnected products, I redesigned the developer center from the ground up — creating a scalable entry point for a growing ecosystem of build paths and developer types — and built Feedback Hub zero to one, giving developers a direct, structured line to Meta for the first time. Two products, one team, one mission: meet developers where they are and give them what they need to build.",
      },

      {
        type: "part",
        eyebrow: "Part 1",
        title: "Developer Center",
        subtitle: "developers.meta.com/horizon",
      },
      {
        type: "section",
        heading: "Overview",
        body:
          "Meta's developer ecosystem had a scaling problem. As new build paths expanded — Unity, Unreal, Horizon Worlds, and new desktop editors — the developer center couldn't keep up. The site still carried Oculus branding, content was outdated, and developers had to dig through thousands of pages of documentation just to find what was relevant to them. At the same time, the audience was split: hobbyists building their first VR experience and professional developers shipping commercial apps had fundamentally different needs, and the site wasn't meeting either. I was the sole designer leading a cross-functional team of 14 engineers and 10 documentation engineers to redesign the developer center end to end.",
      },
      {
        type: "placeholder",
        label: "Wayback Machine",
        caption: "Original Oculus-branded site — outdated branding and the cluttered pre-redesign state",
        aspect: "wide",
      },
      {
        type: "section",
        heading: "The approach",
        body:
          "Without dedicated research support, I went directly to developers on Discord — getting real-time feedback as features were being built. This proactive outreach was recognized by leadership as going beyond the scope of my role, and it became a core part of how the team validated decisions throughout the project. The redesign focused on meeting developers where they were. We rebuilt the navigation from the ground up, creating clear pathways for each build type so developers could find what was relevant to them without sifting through irrelevant content. We significantly improved the API reference — prioritizing quick code access and copy functionality that developers actually need day to day. And we began prototyping an AI-powered search experience to further reduce friction in finding the right documentation across thousands of pages.",
      },
      {
        type: "placeholder",
        label: "Navigation system",
        caption: "Navigation structure and the reasoning behind the hierarchy decisions",
        aspect: "wide",
      },
      {
        type: "placeholder",
        label: "API reference",
        caption: "Improved code snippet UI and copy interaction",
        aspect: "wide",
      },
      {
        type: "placeholder",
        label: "AI search prototype",
        caption: "Query input and contextual result surfacing — add when available",
        aspect: "wide",
      },
      {
        type: "section",
        heading: "Outcome",
        body:
          "Developer platform engagement increased. App submissions grew significantly over the years following the redesign, and adoption of Meta-specific SDKs rose — a direct signal that developers were not only finding the platform but building deeper within it.",
      },
      {
        type: "placeholder",
        label: "Build paths",
        caption: "Documentation page showing the full build path structure — Unity, Unreal, Horizon Worlds side by side",
        aspect: "wide",
      },

      {
        type: "part",
        eyebrow: "Part 2",
        title: "Feedback Hub",
        subtitle: "Tab within Meta Quest Developer Hub (MQDH)",
      },
      {
        type: "section",
        heading: "Overview",
        body:
          "Before Feedback Hub existed, developers hitting issues in the Meta Quest development process had nowhere official to turn. Bug reports and support requests were scattered across Reddit and Twitter — an unstructured, unreliable loop with no visibility into status or resolution. There was no consolidated place to submit an issue, track it, or know if Meta had even seen it. In two months, a four-person tiger team — one PM, two engineers, and me as sole designer — shipped an MVP to production. Feedback Hub became a dedicated tab inside MQDH, the desktop companion tool developers already used daily. For the first time, developers had a single, structured channel to communicate directly with Meta.",
      },
      {
        type: "section",
        heading: "The design",
        body:
          "The core flow was built around three moments: All cases — a clear overview of every issue a developer had submitted, with status at a glance. Start a case — a guided submission flow to capture the right information upfront, reducing back-and-forth. Case status — a detailed view of an individual case, showing progress and any communication from Meta.",
      },
      {
        type: "placeholder",
        label: "All cases view",
        caption: "List layout, status indicators, and case hierarchy",
        aspect: "wide",
      },
      {
        type: "placeholder",
        label: "Start a case",
        caption: "Submission form and input structure",
        aspect: "wide",
      },
      {
        type: "placeholder",
        label: "Case status",
        caption: "Status tracking and communication thread",
        aspect: "wide",
      },
      {
        type: "section",
        heading: "Internal partner tool",
        body:
          "On the Meta side, I designed an internal partner tool for the team receiving and managing these cases. What started as an internal tool for the Quest developer team quickly got attention across Meta — Instagram, Facebook, and WhatsApp teams all took notice, leading to cross-org collaboration and company-wide impact.",
      },
      {
        type: "placeholder",
        label: "Internal Meta partner tool",
        caption: "Screenshots to be added when cleared to share",
        aspect: "wide",
      },
      {
        type: "section",
        heading: "Outcome",
        body:
          "The internal tool created a ripple effect across Meta's major platform teams, sparking collaboration that extended well beyond the original scope. Developer satisfaction with the support process improved significantly following launch.",
      },
      {
        type: "placeholder",
        label: "Outcome metric",
        caption: "Specific metric or developer feedback quote — to be added",
        aspect: "wide",
      },
    ],
  },
  { slug: "world-desktop-editor", title: "World Desktop Editor", client: "Meta", year: "2024", discipline: "Spatial Tooling", image: work3, aspect: "wide", caseStudy: "World Desktop Editor (NUX)\n\nDesktop editor for building Meta Horizon Worlds experiences.\n\nScope: first world creation flow, tool walkthrough, tooltip design system.\n\nUsers: hobbyist creators and professional developers.\n\nZero to one, sole designer.\n\nAssets: Figma files coming later." },
  { slug: "quest-for-business", title: "Quest for Business", client: "Horizon Managed Services", year: "2024", discipline: "Enterprise VR", image: work4, aspect: "tall", caseStudy: "Zero to one enterprise admin tool for managing fleets of Quest headsets at scale\n\nUsers: IT admins across varying enterprise types and sizes\n\nKey design challenge: configuring roles, permissions, and workflows across different IT admin contexts\n\nLead designer" },

  { slug: "alaska-airlines", title: "Alaska Airlines", client: "Alaska Airlines", year: "2024", discipline: "Product Design", image: work5, aspect: "square" },
  { slug: "keurig-k-plus", title: "K+ Smart Brewer", client: "Keurig Dr Pepper", year: "2023", discipline: "Connected Product Design", image: work6, aspect: "square" },
  { slug: "ai-native-design", title: "AI Native Design Process", client: "Personal", year: "2025", discipline: "AI Design Process", image: work7, aspect: "square", caseStudy: "01 — The new stack: Replaced traditional design→handoff→eng pipeline. Tools: Claude Code, VSCode for Meta, Obsidian, Figma + Claude plugin, Terminal.\n\n02 — Proof: shipping the clock app: Zero to one, idea to VR headset, no engineer in the loop.\n\n03 — What shipping revealed: the linter: AI-generated designs + code drifting from design system. Built a linter to fix it. Collaborated with eng on problem definition, design, building.\n\n04 — Bringing the team along: Evangelized AI adoption. Manager recognized as first AI-native designer on the team. (Manager quote still needed)" },
];

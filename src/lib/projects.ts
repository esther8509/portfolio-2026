import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import work7 from "@/assets/work-7.jpg";
import clockDigital from "@/assets/clock-digital.jpeg";
import clockAnalog from "@/assets/clock-analog.jpeg";
import clockAlarm from "@/assets/clock-alarm.jpeg";
import clockTimer from "@/assets/clock-timer.jpeg";
import clockMidfi from "@/assets/clock-midfi.png";
import clockHifi from "@/assets/clock-hifi.png";
import clockExploreAlarmVr from "@/assets/clock-explore-alarm-vr.png";
import clockExploreSpec from "@/assets/clock-explore-spec.png";
import clockExploreAlerts from "@/assets/clock-explore-alerts.png";
import clockExploreFaceShape from "@/assets/clock-explore-face-shape.png";
import clockExploreBoard from "@/assets/clock-explore-board.png";
import nux01 from "@/assets/nux-01.png";
import nux02 from "@/assets/nux-02.png";
import nux03 from "@/assets/nux-03.png";
import nux04 from "@/assets/nux-04.png";
import nux05 from "@/assets/nux-05.png";
import nux06 from "@/assets/nux-06.png";
import nux07 from "@/assets/nux-07.png";
import nux08 from "@/assets/nux-08.png";
import nux09 from "@/assets/nux-09.png";
import nux10 from "@/assets/nux-10.png";
import nux11 from "@/assets/nux-11.png";
import nux12 from "@/assets/nux-12.png";
import nux13 from "@/assets/nux-13.png";
import horizonCreator from "@/assets/horizon-creator.png";
import videoLibrary from "@/assets/video-library.png";

export type CaseStudyBlock =
  | { type: "intro"; body: string }
  | { type: "part"; eyebrow?: string; title: string; subtitle?: string }
  | { type: "section"; heading: string; body: string }
  | { type: "placeholder"; label: string; caption: string; aspect?: "wide" | "tall" | "square" }
  | { type: "placeholder-group"; title: string; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string; aspect?: "wide" | "tall" | "square" }
  | { type: "image-grid"; images: { src: string; alt: string }[]; caption?: string; columns?: 2 | 3 | 4 }
  | { type: "video"; src: string; caption?: string; aspect?: "wide" | "tall" | "square"; poster?: string };

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  discipline: string;
  timeline?: string;
  team?: string;
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
    year: "2026",
    discipline: "Wearables",
    timeline: "H1 2026",
    team: "VR OS",
    image: work1,
    aspect: "square",
    caseStudyBlocks: [
      {
        type: "intro",
        body:
          "Every operating system needs a foundation: the default apps that ship built in and quietly shape how a device feels to use. On phones that foundation is mature and invisible. In VR it barely exists yet. I'm the sole designer for three of those foundational apps on Meta Quest, Clock, Files, and Calendar, each one defining how a system app should behave when your inputs are your eyes, your hands, a controller, and a keyboard, sometimes all at once.",
      },



      {
        type: "part",
        title: "Clock",
        subtitle: "Zero to one — shipped via AI-native workflow",
      },
      {
        type: "section",
        heading: "Overview",
        body:
          "Clock started with a data signal: Quest users kept searching the store for a clock app that didn't exist. The answer was one app with three tabs, Clock, Alarm, and Timer, built for the way people actually spend time in a headset, like setting a timer mid-game or keeping an alarm running while you work in a focused space. The unusual part was how it got built. Paired with the team's push into AI-native development, I took Clock from idea to running code on the headset with no engineer in the loop. The full story of how that worked lives in the AI-Native Process section.",
      },
      {
        type: "image",
        src: clockHifi,
        alt: "High-fidelity Clock concept — translucent liquid-glass surface with an analog face and warm amber second hand, augmenting a wood-paneled living room",
        caption: "Latest high-fidelity exploration (in progress), and one of the showcase apps for the new AI glasses design system. Leaning into translucent, glass-like augments and depth instead of hard color blocks.",
        aspect: "wide",
      },
      {
        type: "section",
        heading: "Explorations",
        body:
          "Process artifacts from the design phase — surface composition, alert patterns, face shape, and the spec sheet that drove engineering handoff. Many of these states made it into the shipped app; others informed the direction without surviving final cut.",
      },
      {
        type: "image",
        src: clockExploreAlarmVr,
        alt: "Alarm list explored in-room — surface floats in a modern living room with toggles, delete affordances, and metadata tags like Gentle, Urgent, and Silent",
        caption: "Alarm list explored in-room — testing density, toggle ergonomics, and a metadata tag system (Gentle, Urgent, Silent) for at-a-glance triage.",
        aspect: "wide",
      },
      {
        type: "image",
        src: clockExploreSpec,
        alt: "Spec sheet showing every Clock state side-by-side — digital and analog clock views, alarm list and empty state, timer running view, and alarm/timer alert dialogs",
        caption: "Full state spec — every Clock, Alarm, and Timer surface laid out side-by-side for review and engineering handoff.",
        aspect: "wide",
      },
      {
        type: "image",
        src: clockExploreAlerts,
        alt: "Alert pattern exploration — Option 1 full dialog with Snooze and Dismiss, Option 2 compact toast notification for both alarm and timer",
        caption: "Alert pattern study — weighing a focused modal dialog against a less interruptive toast for alarm and timer notifications.",
        aspect: "wide",
      },
      {
        type: "image",
        src: clockExploreFaceShape,
        alt: "Two analog clock face explorations side-by-side — a perfect circle on the left and a rounded square on the right",
        caption: "Face shape exploration — circle versus rounded square, tested for how each reads at glance distance inside the VR canvas.",
        aspect: "wide",
      },


      {
        type: "part",
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
        type: "video",
        src: "/files-drag-drop.mov",
        caption: "Multi-select and drag and drop in action — files dragged from VR directly into a third-party app, a first for Meta Quest.",
        aspect: "wide",
      },

      {
        type: "part",
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
    ],
  },
  {
    slug: "developer-tools",
    title: "Developer Platforms",
    client: "Meta",
    year: "2026",
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
        type: "part",
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
  {
    slug: "world-desktop-editor",
    title: "World Desktop Editor",
    client: "Meta",
    year: "2025",
    discipline: "Spatial Tooling",
    image: work3,
    aspect: "wide",
    caseStudyBlocks: [
      {
        type: "intro",
        body:
          "Horizon Worlds Editor is Meta's own game engine built specifically for creating Horizon Worlds experiences, similar to Unity but native to Meta's ecosystem. When the editor launched, there was nothing to help new users get started. No onboarding, no guidance, no education layer of any kind. For a tool this complex, that was a real barrier especially for the hobbyist creators who made up the primary audience. I was the sole product designer leading the education piece across the editor. This case study focuses on the centerpiece of that work: the NUX, a zero to one interactive walkthrough that shipped to 100% of users.",
      },

      {
        type: "part",
        title: "The NUX",
        subtitle: "Zero to one interactive walkthrough",
      },
      {
        type: "section",
        heading: "The challenge",
        body:
          "The core tension in designing the NUX was keeping it short enough to not lose people while making it substantive enough to actually matter. Most tutorials teach and then leave. We wanted users to finish the NUX feeling like they had made something real, not just completed a checklist. To solve this, I collaborated with a game designer to build the walkthrough as an actual game tutorial, one that ends with the user having created their own world. By the time someone finishes the NUX, they're not starting from zero. They already have something.",
      },
      {
        type: "section",
        heading: "The design",
        body:
          "The walkthrough covers three layers: Foundations — mouse, keyboard, and basic navigation for users who had never touched a game engine before. Editor tools — a guided tour of the core toolset and how to build within the editor. AI features — hands-on introduction to the editor's AI capabilities including skybox generation, AI mesh creation from prompts, and TypeScript scripting assistance.",
      },
      {
        type: "image-grid",
        columns: 2,
        images: [
          { src: nux01, alt: "NUX topic 1 — Scenes: kick off your scene" },
          { src: nux02, alt: "NUX topic 2 — Navigation: rotate the camera view" },
          { src: nux03, alt: "NUX topic 2 — Navigation: shift the camera view" },
          { src: nux04, alt: "NUX topic 2 — Navigation: zoom in and out" },
          { src: nux05, alt: "NUX topic 3 — Asset Library: explore props and effects" },
          { src: nux06, alt: "NUX topic 3 — Asset Library: add an object" },
          { src: nux07, alt: "NUX topic 3 — Asset Library: rotate an object" },
          { src: nux13, alt: "NUX topic 3 — Asset Library: move an object" },
          { src: nux12, alt: "NUX topic 4 — Playtest: test your scene" },
          { src: nux11, alt: "NUX topic 4 — Playtest: exit test mode" },
          { src: nux10, alt: "NUX topic 5 — Properties: adjust player gravity" },
          { src: nux09, alt: "NUX topic 6 — Generative AI: explore smart tools" },
          { src: nux08, alt: "NUX completion — you've built a world" },
        ],
        caption: "Foundations, editor tools, and AI features",
      },

      {
        type: "part",
        title: "Supporting education layer",
        subtitle: "Creator website and onboarding videos",
      },
      {
        type: "section",
        heading: "Supporting education layer",
        body:
          "The NUX was one part of a broader education system I helped build. A dedicated Horizon creator website provided additional guidance and resources, and I collaborated on 8 onboarding videos to support creators beyond the in-editor experience.",
      },
      {
        type: "image",
        src: horizonCreator,
        alt: "Horizon creator website",
        caption: "Additional guidance and resources for creators",
        aspect: "wide",
      },
      {
        type: "image",
        src: videoLibrary,
        alt: "Worlds Creator Academy video library",
        caption: "8 onboarding videos supporting creators beyond the in-editor experience",
        aspect: "wide",
      },

      {
        type: "section",
        heading: "Outcome",
        body:
          "The NUX shipped to 100% of users, a significant milestone for a zero to one feature. By ending with a real world created by the user, the tutorial set a new bar for how the editor onboards creators.",
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
    slug: "quest-for-business",
    title: "Quest for Business",
    client: "Horizon Managed Services",
    year: "2024",
    discipline: "Enterprise VR",
    image: work4,
    aspect: "tall",
    caseStudyBlocks: [
      {
        type: "intro",
        body:
          "Managing a fleet of VR headsets at scale is a fundamentally different problem than managing phones or laptops. The hardware is new, the use cases are varied, and the IT admins responsible for deployment range from small business owners wearing multiple hats to enterprise IT teams with complex security requirements. When Meta decided to build a first-party device management solution, there was nothing to start from. I was the sole designer on Device Manager, the core surface within what is now Meta Horizon Managed Services, working with a team of 10+ engineers and 1 PM. The tool gives IT admins centralized control over their entire fleet of Quest headsets including bulk provisioning, device presets, status monitoring, remote wipe, find my device, PIN reset, and conflict resolution when connecting or detecting devices. It also laid the groundwork for third-party MDM integrations with partners like ArborXR, Ivanti, and Microsoft Intune.",
      },

      {
        type: "part",
        
        title: "The core design problem",
        subtitle: "Presets across SMB, mid-market, and enterprise",
      },
      {
        type: "section",
        heading: "The core design problem",
        body:
          "The hardest problem wasn't the feature list. It was presets. Different organizations need fundamentally different configurations out of the box. A small business deploying five headsets for training has completely different needs than a large enterprise rolling out hundreds of devices across multiple locations. Getting presets wrong meant IT admins would either be overwhelmed by complexity or unable to configure what they actually needed. I led user research across different enterprise types and sizes to map exactly what each segment needed, the specific rules, permissions, and workflows that mattered at small, medium, and large scale. That research directly shaped the preset system, giving admins a starting point that matched their context without requiring them to build from scratch.",
      },
      {
        type: "placeholder",
        label: "Preset design exploration",
        caption: "Extensive ideation and iterations across SMB, mid-market, and enterprise configurations",
        aspect: "wide",
      },

      {
        type: "part",
        
        title: "Conflict resolution",
        subtitle: "Contextual blocking modals and warnings",
      },
      {
        type: "section",
        heading: "Conflict resolution",
        body:
          "Another significant design challenge was conflict resolution. Certain device management actions carry serious consequences — wiping a device, for example, can run into privacy concerns or data complications that need to be surfaced before the admin proceeds. The design solution was a system of contextual blocking modals and warnings that appeared at the right moment depending on the specific situation. With dozens of permutations to account for across different actions, device states, and enterprise contexts, mapping and designing this system required careful logic and close collaboration with engineering.",
      },
      {
        type: "placeholder",
        label: "Conflict resolution flow",
        caption: "Contextual warning and blocking modal examples across device states",
        aspect: "wide",
      },

      {
        type: "part",
        
        title: "Features",
        subtitle: "Core surfaces across the admin experience",
      },
      {
        type: "section",
        heading: "Features",
        body:
          "Core surfaces across the Device Manager admin experience, from bulk provisioning through day-to-day fleet operations.",
      },
      {
        type: "placeholder",
        label: "Device Manager screenshots",
        caption: "Bulk provisioning, device presets, status dashboard, remote wipe, find my device",
        aspect: "wide",
      },

      {
        type: "section",
        heading: "Outcome",
        body:
          "During the development period, the product helped land significant enterprise deals including Walmart and Staples, a direct signal that the tool was credible and compelling enough for large-scale deployment.",
      },
      {
        type: "placeholder",
        label: "Outcome metric",
        caption: "Specific deal details and metrics — to be added when available",
        aspect: "wide",
      },
    ],
  },

  { slug: "alaska-airlines", title: "Alaska Airlines", client: "Alaska Airlines", year: "2021", discipline: "Product Design", image: work5, aspect: "square" },
  { slug: "keurig-k-plus", title: "K+ Smart Brewer", client: "Keurig Dr Pepper", year: "2020", discipline: "Connected Product Design", image: work6, aspect: "square" },
  { slug: "ai-native-design", title: "AI Native Design Process", client: "Personal", year: "2026", discipline: "AI Design Process", image: work7, aspect: "square", caseStudy: "01 — The new stack: Replaced traditional design→handoff→eng pipeline. Tools: Claude Code, VSCode for Meta, Obsidian, Figma + Claude plugin, Terminal.\n\n02 — Proof: shipping the clock app: Zero to one, idea to VR headset, no engineer in the loop.\n\n03 — What shipping revealed: the linter: AI-generated designs + code drifting from design system. Built a linter to fix it. Collaborated with eng on problem definition, design, building.\n\n04 — Bringing the team along: Evangelized AI adoption. Manager recognized as first AI-native designer on the team. (Manager quote still needed)" },
];

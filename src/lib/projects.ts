import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/world-desktop-editor.jpg";
import work4 from "@/assets/quest-for-business.webp";
import work5 from "@/assets/alaska-airlines.png";
// import work6 from "@/assets/work-6.jpg";
import work7 from "@/assets/ai-native-thumbnail.png";
import clockMidfi from "@/assets/clock-midfi.png";
import clockHifi from "@/assets/clock-hifi.png";
import clockExploreAlerts from "@/assets/clock-explore-alerts.png.asset.json";
import clockExploreFaceShape from "@/assets/clock-explore-face-shape.png";
import clockActiveTaskBar from "@/assets/clock-active-task-bar.png.asset.json";
import aiNativeWorkflow from "@/assets/ai-native-workflow.png";
import oculusDeveloper from "@/assets/oculus-developer.png";
import mhcpDiscord from "@/assets/mhcp-discord.png";
import metaBuildPaths from "@/assets/meta-build-paths.png";
import metaDocPage from "@/assets/meta-doc-page.png";
import metaApiReference from "@/assets/meta-api-reference.png";

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
import conflictResolutionFlow from "@/assets/conflict-resolution-flow.png";
import presetsCreate from "@/assets/presets-create.png";
import presetsExperience from "@/assets/presets-experience-v2.png.asset.json";
import questAbout from "@/assets/quest-about.png.asset.json";
import questDetails from "@/assets/quest-details.png.asset.json";
import questSettings from "@/assets/quest-settings.png.asset.json";
import questPresets from "@/assets/quest-presets.png.asset.json";
import nuxFoundation01 from "@/assets/nux-foundation-01.png";
import nuxFoundation02 from "@/assets/nux-foundation-02.png";
import nuxFoundation03 from "@/assets/nux-foundation-03.png";
import nuxFoundation04 from "@/assets/nux-foundation-04.png";
import nuxFoundation05 from "@/assets/nux-foundation-05.png";

export type CaseStudyBlock =
  | { type: "intro"; body: string }
  | { type: "part"; eyebrow?: string; title: string; subtitle?: string }
  | { type: "section"; heading: string; body: string; link?: { text: string; to: string } }
  | { type: "callout"; body: string }
  | { type: "quote"; body: string; attribution?: string }
  | { type: "placeholder"; label: string; caption: string; aspect?: "wide" | "tall" | "square" }
  | { type: "placeholder-group"; title: string; items: string[] }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      aspect?: "wide" | "tall" | "square";
      natural?: boolean;
    }
  | { type: "image-grid"; images: { src: string; alt: string }[]; caption?: string; columns?: 2 | 3 | 4; equalHeight?: boolean }
  | { type: "image-text"; src: string; alt: string; body: string; imageSide?: "left" | "right" }
  | { type: "image-pair"; images: { src: string; alt: string; caption: string }[] }
  | { type: "video"; src: string; caption?: string; aspect?: "wide" | "tall" | "square"; poster?: string };


export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
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
    title: "XR System Apps",
    client: "Meta Reality Labs",
    year: "2026",
    discipline: "Wearables",
    timeline: "H1 2026",
    team: "XR System Apps",
    image: work1,
    aspect: "square",
    caseStudyBlocks: [
      {
        type: "intro",
        body: "Every operating system needs a foundation: the default apps that ship built in and quietly shape how a device feels to use. On phones that foundation is mature and invisible. In XR it barely exists yet. I'm the sole designer for three of those foundational apps on Meta Quest, Clock, Files, and Calendar, each one defining how a system app should behave when your inputs are your eyes, your hands, a controller, and a keyboard, sometimes all at once.",
      },

      {
        type: "part",
        title: "Clock",
        subtitle: "Zero to one, shipped via an AI-native workflow",
      },
      {
        type: "section",
        heading: "Overview",
        body: "Clock started with a data signal: Quest users kept searching the store for a clock app that didn't exist. The answer was one app with three tabs, Clock, Alarm, and Timer, built for the way people actually spend time in a headset, like setting a timer mid-game or keeping an alarm running while you work in a focused space. The unusual part was how it got built. Paired with the team's push into AI-native development, I took Clock from idea to running code on the headset with no engineer in the loop. The full story of how that worked lives in the AI-Native Process section.",
      },
      {
        type: "image",
        src: clockHifi,
        alt: "High-fidelity Clock concept: translucent liquid-glass surface with an analog face and warm amber second hand, augmenting a wood-paneled living room",
        caption:
          "Latest high-fidelity exploration (in progress), and one of the showcase apps for the new AI glasses design system. Leaning into translucent, glass-like augments and depth instead of hard color blocks.",
        aspect: "wide",
      },
      {
        type: "section",
        heading: "Explorations",
        body: "Process artifacts from the design phase: surface composition, alert patterns, face shape, and a spec sheet detailed enough to drive the build itself. Many of these states shipped; others shaped the direction without surviving the final cut.",
      },
      {
        type: "image",
        src: clockExploreFaceShape,
        alt: "Two analog clock face explorations side-by-side: a perfect circle on the left and a rounded square on the right",
        caption:
          "Face shape exploration: circle versus rounded square, tested for how each reads at glance distance inside the VR canvas.",
        aspect: "wide",
      },
      {
        type: "image-pair",
        images: [
          {
            src: clockExploreAlerts.url,
            alt: "Alert pattern exploration: Option 1 full dialog with Snooze and Dismiss, Option 2 compact toast notification for both alarm and timer",
            caption:
              "Alert pattern study: weighing a focused modal against a less interruptive toast for alarm and timer notifications.",
          },
          {
            src: clockActiveTaskBar.url,
            alt: "Clock minimized into the system's Active Task Bar with persistent Timer and Alarm controls",
            caption:
              "When Clock minimizes, it collapses into the system's Active Task Bar. Timer and Alarm persist as lightweight controls, while the clock face stays out entirely as passive display.",
          },
        ],
      },
      {
        type: "callout",
        body: 'What started as a search query for a missing app is now a showcase product for Meta\'s next-generation design language, taken from idea to headset by a single designer. See "AI Native" project for more info on E2E process.',
      },

      {
        type: "part",
        title: "Files",
        subtitle: "Iterative redesign, and a first for Meta Quest",
      },
      {
        type: "section",
        heading: "Overview",
        body: "Files already existed, but the experience needed real work. The headline feature I designed was multi-select with drag and drop, including dragging a file straight from VR into a third-party app like WhatsApp. That had never been possible on Meta Quest before. It is a small interaction with a big shift behind it: Files stops being a place you store things and becomes part of how you move work across the system.",
      },
      {
        type: "section",
        heading: "Reception",
        body: "When it shipped, the new drag and drop was called out directly in user response to the release.",
      },
      {
        type: "video",
        src: "/files-drag-drop.mov",
        caption: "Dragging a file from VR straight into a third-party app, a first for Meta Quest.",
        aspect: "wide",
      },

      {
        type: "part",
        title: "Calendar",
        subtitle: "Shipped with Meta Quest v71, Horizon OS redesign",
      },
      {
        type: "section",
        heading: "Overview",
        body: "Calendar shipped as part of the Meta Quest v71 update alongside a broader Horizon OS redesign. The feature I want to highlight here is a niche but technically interesting design problem: gaze targeting for a new wearable device that uses eye tracking to select UI elements.",
      },
      {
        type: "section",
        heading: "The design challenge",
        body: "The challenge was precision: specifically, what happens when multiple events overlap in the same time slot? How does the user select the right one with just their eyes? I worked closely with engineering to solve this, ultimately designing a flyout that expands beyond the initial calendar real estate when multiple events compete for the same gaze target. It gave users a clear, precise way to select exactly what they meant.",
      },
      {
        type: "video",
        src: "/videos/calendar.mp4",
        caption: "Gaze-targeted flyout expanding to disambiguate overlapping events.",
      },

      {
        type: "section",
        heading: "Outcome",
        body: "All three apps ship as default OS-level experiences on Meta Quest. Files received user praise on release notes for the improvements over the previous experience. Clock and Calendar represent new ground for the platform, utility done natively and thoughtfully, setting a bar that competitors haven't yet matched.",
      },
    ],
  },
  {
    slug: "developer-tools",
    title: "Developer Platforms",
    client: "Meta",
    year: "2026",
    discipline: "Developer Platforms",
    image: work2,
    aspect: "tall",
    caseStudyBlocks: [
      {
        type: "intro",
        body: "Building for developers is different. The people using these tools are technical, opinionated, and have zero patience for friction. They'll go around a bad experience — and at Meta, they were. Bug reports were landing on Reddit and Twitter. The developer center was buried under outdated Oculus branding and thousands of pages of documentation with no clear path through.",
      },

      {
        type: "part",
        title: "Developer Center",
        subtitle: "developers.meta.com/horizon",
      },
      {
        type: "section",
        heading: "Overview",
        body: "Meta's developer ecosystem had a scaling problem. As new build paths expanded — Unity, Unreal, Horizon Worlds, and new desktop editors — the developer center couldn't keep up. The site still carried Oculus branding, content was outdated, and developers had to dig through thousands of pages of documentation just to find what was relevant to them. At the same time, the audience was split: hobbyists building their first VR experience and professional developers shipping commercial apps had fundamentally different needs, and the site wasn't meeting either. I was the sole designer leading a cross-functional team of 14 engineers and 10 documentation engineers to redesign the developer center end to end.",
      },
      {
        type: "image",
        src: oculusDeveloper,
        alt: "Original Oculus-branded developer site captured from the Wayback Machine",
        caption: "Original Oculus-branded site, outdated branding and the cluttered pre-redesign state",
        natural: true,
      },
      {
        type: "section",
        heading: "The approach",
        body: "Without dedicated research support, I went directly to developers on Discord — getting real-time feedback as features were being built. This proactive outreach was recognized by leadership as going beyond the scope of my role, and it became a core part of how the team validated decisions throughout the project. The redesign focused on meeting developers where they were. We rebuilt the navigation from the ground up, creating clear pathways for each build type so developers could find what was relevant to them without sifting through irrelevant content. We significantly improved the API reference — prioritizing quick code access and copy functionality that developers actually need day to day. And we began prototyping an AI-powered search experience to further reduce friction in finding the right documentation across thousands of pages.",
      },
      {
        type: "image",
        src: mhcpDiscord,
        alt: "MHCP Engagements Discord server where developer feedback was gathered in real time",
        caption:
          "MHCP Engagements Discord, where real-time developer feedback shaped decisions throughout the redesign",
        natural: true,
      },
      {
        type: "image",
        src: metaDocPage,
        alt: "Typical Meta Horizon documentation page showing the rebuilt navigation and on-this-page structure",
        caption:
          "A typical documentation page after the redesign — left-rail navigation by build path, on-this-page anchors, and related resources.",
        natural: true,
      },

      {
        type: "image",
        src: metaApiReference,
        alt: "API reference component showing function signature, parameters, returns, and remarks",
        caption:
          "API reference component — function signature, parameters, returns, and remarks laid out for fast scanning and copy.",
        natural: true,
      },

      {
        type: "section",
        heading: "Outcome",
        body: "Developer platform engagement increased. App submissions grew significantly over the years following the redesign, and adoption of Meta-specific SDKs rose — a direct signal that developers were not only finding the platform but building deeper within it.",
      },
      {
        type: "image",
        src: metaBuildPaths,
        alt: "Meta Horizon developer center showing the Unity build path documentation",
        caption:
          "Documentation page showing the full build path structure — Unity, Unreal, Horizon Worlds side by side.",
        natural: true,
      },

      {
        type: "part",
        title: "Feedback Hub",
        subtitle: "Tab within Meta Quest Developer Hub (MQDH)",
      },
      {
        type: "section",
        heading: "Overview",
        body: "Before Feedback Hub existed, developers hitting issues in the Meta Quest development process had nowhere official to turn. Bug reports and support requests were scattered across Reddit and Twitter — an unstructured, unreliable loop with no visibility into status or resolution. There was no consolidated place to submit an issue, track it, or know if Meta had even seen it. In two months, a four-person tiger team — one PM, two engineers, and me as sole designer — shipped an MVP to production. Feedback Hub became a dedicated tab inside MQDH, the desktop companion tool developers already used daily. For the first time, developers had a single, structured channel to communicate directly with Meta.",
      },
      {
        type: "section",
        heading: "The design",
        body: "The core flow was built around three moments: All cases — a clear overview of every issue a developer had submitted, with status at a glance. Start a case — a guided submission flow to capture the right information upfront, reducing back-and-forth. Case status — a detailed view of an individual case, showing progress and any communication from Meta.",
      },
      {
        type: "video",
        src: "/videos/feedback-hub.mp4",
        caption:
          "Full walkthrough of Feedback Hub — all cases overview, case submission flow, and case status tracking inside MQDH.",
      },
      {
        type: "section",
        heading: "Internal partner tool",
        body: "On the Meta side, I designed an internal partner tool for the team receiving and managing these cases. What started as an internal tool for the Quest developer team quickly got attention across Meta — Instagram, Facebook, and WhatsApp teams all took notice, leading to cross-org collaboration and company-wide impact. (Screens for the internal tool can't be shared publicly.)",
      },

      {
        type: "section",
        heading: "Outcome",
        body: "The internal tool created a ripple effect across Meta's major platform teams, sparking collaboration that extended well beyond the original scope. Developer satisfaction with the support process improved significantly following launch.",
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
        body: "Horizon Worlds Editor is Meta's own game engine built specifically for creating Horizon Worlds experiences, similar to Unity but native to Meta's ecosystem. When the editor launched, there was nothing to help new users get started. No onboarding, no guidance, no education layer of any kind. For a tool this complex, that was a real barrier especially for the hobbyist creators who made up the primary audience. I was the sole product designer leading the education piece across the editor. This case study focuses on the centerpiece of that work: the NUX, a zero to one interactive walkthrough that shipped to 100% of users.",
      },

      {
        type: "part",
        title: "The NUX",
        subtitle: "Zero to one interactive walkthrough",
      },
      {
        type: "section",
        heading: "The challenge",
        body: "The core tension in designing the NUX was keeping it short enough to not lose people while making it substantive enough to actually matter. Most tutorials teach and then leave. We wanted users to finish the NUX feeling like they had made something real, not just completed a checklist. To solve this, I collaborated with a game designer to build the walkthrough as an actual game tutorial, one that ends with the user having created their own world. By the time someone finishes the NUX, they're not starting from zero. They already have something.",
      },
      {
        type: "section",
        heading: "The design",
        body: "The walkthrough covers three layers. Foundations: mouse, keyboard, and basic navigation for users who had never touched a game engine before. Editor tools: a guided tour of the core toolset and how to build within the editor. AI features: hands-on introduction to the editor's AI capabilities including skybox generation, AI mesh creation from prompts, and TypeScript scripting assistance.",
      },
      {
        type: "image-grid",
        columns: 2,
        images: [
          { src: nuxFoundation01, alt: "NUX foundations screen 1" },
          { src: nuxFoundation02, alt: "NUX foundations screen 2" },
          { src: nuxFoundation03, alt: "NUX foundations screen 3" },
          { src: nuxFoundation04, alt: "NUX foundations screen 4" },
        ],
        caption: "Starting from zero: mouse, keyboard, and moving around the editor.",
      },
      {
        type: "image",
        src: nuxFoundation05,
        alt: "Finished world at the end of the NUX",
        caption: "The user is done and now ready to work with the world that they have built.",
      },

      {
        type: "part",
        title: "Supporting education layer",
        subtitle: "Creator website and onboarding videos",
      },
      {
        type: "section",
        heading: "Supporting education layer",
        body: "The NUX was one part of a broader education system I helped build. A dedicated Horizon creator website provided additional guidance and resources, and I collaborated on 8 onboarding videos to support creators beyond the in-editor experience.",
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
        body: "The NUX shipped to 100% of users, a significant milestone for a zero to one feature. By ending with a real world created by the user, the tutorial set a new bar for how the editor onboards creators.",
      },
      {
        type: "callout",
        body: "The goal was not to teach the editor. It was to make sure that by the end, you had already built something in it.",
      },
    ],
  },
  {
    slug: "quest-for-business",
    title: "Quest for Business",
    client: "Meta",
    year: "2024",
    discipline: "Horizon Managed Services",
    team: "Horizon Managed Services",
    image: work4,
    aspect: "tall",
    caseStudyBlocks: [
      {
        type: "intro",
        body: "Managing a fleet of VR headsets at scale is a fundamentally different problem than managing phones or laptops. When Meta decided to build a first-party solution, there was nothing to start from. I was the sole designer on Device Manager, now part of Meta Horizon Managed Services, working with 10+ engineers and 1 PM to give IT admins centralized control over their Quest fleets: provisioning, presets, remote wipe, and conflict resolution, with groundwork laid for third-party MDM partners like ArborXR and Microsoft Intune.",
      },

      {
        type: "part",

        title: "The core design problem",
        subtitle: "Presets across SMB, mid-market, and enterprise",
      },
      {
        type: "section",
        heading: "The core design problem",
        body: "The hardest problem was presets. A small business deploying five headsets has completely different needs than an enterprise rolling out hundreds across multiple locations. I led user research across enterprise types and sizes to map what each segment actually needed, and that research directly shaped a preset system that gave admins a relevant starting point without building from scratch.",
      },
      {
        type: "part",

        title: "Features",
        subtitle: "Core surfaces across the admin experience",
      },
      {
        type: "section",
        heading: "Features",
        body: "Core surfaces across the Device Manager admin experience, from bulk provisioning through day-to-day fleet operations.",
      },
      {
        type: "image-grid",
        columns: 2,
        equalHeight: true,
        images: [
          {
            src: presetsCreate,
            alt: "Device presets list with Create device preset menu showing Individual and Shared modes",
          },
          { src: presetsExperience.url, alt: "Device preset detail view configuring session intro steps for Shared Mode" },
        ],
        caption: "Preset configurations spanning SMB, mid-market, and enterprise deployments.",
      },
      {
        type: "image-grid",
        columns: 4,
        equalHeight: true,
        images: [
          { src: questAbout.url, alt: "Device About tab showing device information, controllers, and battery" },
          { src: questDetails.url, alt: "Device Details tab showing owner, group, management mode, and permissions" },
          { src: questSettings.url, alt: "Device Settings tab showing Networks, Certificates, and Security settings" },
          { src: questPresets.url, alt: "Device Presets tab listing assigned presets and assignment sources" },
        ],
      },

      {
        type: "part",

        title: "Conflict resolution",
        subtitle: "Contextual blocking modals and warnings",
      },
      {
        type: "section",
        heading: "Conflict resolution",
        body: "Another significant design challenge was conflict resolution. Certain device management actions carry serious consequences — wiping a device, for example, can run into privacy concerns or data complications that need to be surfaced before the admin proceeds. The design solution was a system of contextual blocking modals and warnings that appeared at the right moment depending on the specific situation. With dozens of permutations to account for across different actions, device states, and enterprise contexts, mapping and designing this system required careful logic and close collaboration with engineering.",
      },
      {
        type: "image",
        src: conflictResolutionFlow,
        alt: "Conflict resolution flow map across device management actions",
        caption: "Mapping contextual warnings and blocking modals across dozens of action/state permutations.",
      },

      {
        type: "section",
        heading: "Outcome",
        body: "During the development period, the product helped land significant enterprise deals including Walmart and Staples, a direct signal that the tool was credible and compelling enough for large-scale deployment.",
      },
    ],
  },
  {
    slug: "ai-native-design",
    title: "AI-Native Design",
    subtitle: "A new way of working, from idea to shipped",
    client: "Meta Reality Labs",
    year: "2026",
    discipline: "XR System Apps",
    timeline: "2025 to 2026",
    team: "XR System Apps",
    image: work7,
    aspect: "wide",
    caseStudyBlocks: [
      {
        type: "intro",
        body: "Design usually ends at handoff: you draw it, an engineer builds it. I spent the last year collapsing that gap. By building an AI-native practice around the way I work, I took a system app from idea to running code on a VR headset with no engineer in the loop, hit a new kind of problem that came with that speed, built the fix, and brought my team along. This is the process behind the products.",
      },
      {
        type: "section",
        heading: "The system",
        body: "It started as a stack and became a system. The tools are mostly off the shelf: Claude Code, VS Code, Obsidian, Figma. What made them work together was the scaffolding I built around them. Every project gets its own context file the AI reads before it does anything, so it always knows the goal, the constraints, and the history. A set of custom commands handles the repetitive parts of my week, from capturing an idea to drafting a recap. The result is an assistant that understands my work the way a teammate would, not a chatbot I re-explain myself to every morning.",
      },
      {
        type: "image",
        natural: true,
        src: aiNativeWorkflow,
        alt: "Workflow diagram showing idea, design spec, AI build, shipped, with the context system feeding in",
        caption: "The workflow, built as a system the AI can read and act on.",
      },
      {
        type: "section",
        heading: "Proof",
        body: "The first real test was the Clock app. I took it from idea to running code on a VR headset without an engineer touching it. The mechanism was the design work itself: I wrote specs detailed enough to build from, exact component states, spacing, and layout rules, in a form the AI could turn directly into production code. The spec was not a document that came before the build. The spec was the build.",
        link: { text: "See the Clock app in VR System Apps for the product story.", to: "/work/meta-wearables" },
      },
      {
        type: "placeholder",
        label: "Spec and shipped app",
        caption: "Spec on the left, shipped app on the right. The distance between them was a single designer.",
        aspect: "wide",
      },
      {
        type: "section",
        heading: "The guardrail",
        body: "Speed came with a cost. Designs and code generated this way tended to drift from the design system: small inconsistencies in spacing, color, and components that add up across a product. Catching them by hand did not scale. So I worked with engineering to build a linter that checks design and code against the system automatically and flags where they diverge. Clock was its first test case. Moving fast had created a new problem, and the right response was to design the guardrail, not to slow down.",
      },
      {
        type: "section",
        heading: "Bringing the team along",
        body: "I shared the workflow across the team, walked others through the setup, and the language of working this way became part of how we talk about the work. My manager recognized it directly:",
      },
      {
        type: "quote",
        body: "…What's stood out most this year is Esther's embrace of AI-native work and the ability to self teach the newest tool at rapid speed. During AI-First week she went from never using terminal to pushing diffs, learning ADB, VS Code remote SSH, Enkaku and Claude CLI from a standing start. She was the first PD on our team to lean into this new day of work, and her learning was invaluable in helping the rest of us integrate AI and pods into our work.",
        attribution: "Manager, Meta Reality Labs",
      },
      {
        type: "callout",
        body: "The goal was never to use AI. It was to shrink the distance between an idea and a real, shipped product without losing the craft along the way. That is what working AI-native makes possible: one designer, end to end.",
      },
    ],
  },
  {
    slug: "alaska-airlines",
    title: "Alaska Airlines",
    client: "Alaska Airlines",
    year: "2021",
    discipline: "Consumer products",
    image: work5,
    aspect: "square",
    caseStudyBlocks: [
      {
        type: "video",
        src: "/videos/alaska-airlines-e2e.mp4",
        caption: "End-to-end booking flow: searching for a location, picking dates, and running a search.",
      },
    ],
  },
  // { slug: "keurig-k-plus", title: "K+ Smart Brewer", client: "Keurig Dr Pepper", year: "2020", discipline: "Connected Product Design", image: work6, aspect: "square" },
];

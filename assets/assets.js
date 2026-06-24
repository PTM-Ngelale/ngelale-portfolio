import user_image from "./user_image.jpg";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.jpg";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

// -- Currently (§5) --
export const currentlyData = [
  {
    label: "Shipping",
    title: "An AI-staffed digital company",
    body: "An AI product for Nigerian SMEs. More details when it ships.",
  },
  {
    label: "Studying",
    title: "Azure AI Engineer · AI-103",
    body: "Targeting the Azure AI Apps & Agents cert, plus GitHub's Agentic AI Developer (GH-600).",
  },
  {
    label: "Building",
    title: "BantaZone",
    body: "A football app for African fans. Stay tuned...",
  },
];

// -- Featured projects (§6) --
export const workData = [
  {
    slug: "digital-company",
    title: "Digital Company",
    category: "AI tooling · In development",
    role: "Architect & builder · solo",
    status: "in-build",
    summary:
      "AI-powered document processing for Nigerian SMEs. Working on it. More details when it ships.",
    stack: ["Azure AI", "TypeScript", "Supabase"],
    bgImage: "/work-1.png",
  },
  {
    slug: "finagent",
    title: "FinAgent",
    category: "AI assistant · full-stack",
    role: "Full-stack · solo",
    status: "live",
    summary:
      "A financial assistant with a terminal-style UI — dense, data-forward, not chatty. Web and mobile share the same Hono backend and reasoning layer.",
    stack: ["Hono", "Next.js", "Expo", "Function calling", "TypeScript"],
    bgImage: "/work-2.png",
  },
  {
    slug: "ratewatch",
    title: "RateWatch",
    category: "Tool-using agent · function calling",
    role: "Full-stack · solo",
    status: "live",
    summary:
      "Tracks FX and crypto rates, stores history in Supabase, and answers questions about what's moved and why. Useful if you're watching the naira daily.",
    stack: ["Function calling", "Supabase", "Real-time data", "TypeScript"],
    bgImage: "/work-3.png",
  },
  {
    slug: "briefbot",
    title: "BriefBot",
    category: "Research agent · Azure AI Foundry",
    role: "Full-stack · solo",
    status: "live",
    summary:
      "Give it a topic and it plans the research, searches Bing, and pulls together a sourced brief. Built on Azure AI Foundry's grounding tools.",
    stack: ["Azure AI Foundry", "Grounding", "Multi-step", "TypeScript"],
    bgImage: "/work-4.png",
  },
];

// -- More builds / secondary grid (§6) --
export const moreBuildData = [
  {
    slug: "docagent",
    title: "DocAgent",
    category: "Document agent",
    status: "live",
    summary:
      "Upload a PDF — statement, invoice, whatever — and ask it questions. Reads the document and answers from it.",
    stack: ["Azure AI Foundry", "PDF", "RAG"],
  },
  {
    slug: "grit-quad",
    title: "GRIT Quad",
    category: "Client · landing page",
    status: "live",
    summary:
      "Landing page for Port Harcourt's #1 quad biking arena — quad bikes, archery, and gel blaster combat for all skill levels.",
    stack: ["Next.js", "Tailwind CSS"],
    url: "https://grit-quad.vercel.app/",
  },
  {
    slug: "czysty",
    title: "Czysty",
    category: "Client · landing page",
    status: "live",
    summary:
      "Landing page for a Lagos laundry and dry cleaning service. Same-day pickup and door-to-door delivery across the island.",
    stack: ["Next.js", "Tailwind CSS"],
    url: "https://czysty.vercel.app/",
  },
  {
    slug: "olare-learning",
    title: "Olare Learning",
    category: "Client · landing page",
    status: "live",
    summary:
      "Landing page for a UK accredited training provider. BCS-certified courses in business analysis and AI, delivered online.",
    stack: ["Next.js", "Tailwind CSS"],
    url: "https://olarelearninginstitute.co.uk/",
  },
  {
    slug: "oli-brochure",
    title: "OLI Brochure",
    category: "Client · editorial",
    status: "shipped",
    summary:
      "15-page editorial brochure for a UK IT training company. Designed in HTML, exported to print-ready PDF.",
    stack: ["HTML→PDF", "Editorial", "Design"],
  },
  {
    slug: "dbagent",
    title: "DBAgent",
    category: "Engineering agent",
    status: "in-build",
    summary:
      "Handles MySQL engineering tasks — schema changes, queries, migrations. Works from a plan it builds first, then executes.",
    stack: ["MySQL", "Tool use", "Agentic"],
  },
  {
    slug: "bantazone",
    title: "BantaZone",
    category: "Mobile product",
    status: "in-build",
    summary:
      "A football app for African fans. In development — dropping around AFCON 2027.",
    stack: ["React Native", "Expo"],
  },
  {
    slug: "retail-pos",
    title: "Retail POS",
    category: "Offline-first app",
    status: "in-build",
    summary: "Offline-first POS for Nigerian retail. In development.",
    stack: ["React Native", "Expo"],
  },
];

// -- Capabilities / services (§7) --
export const serviceData = [
  {
    icon: assets.web_icon,
    title: "AI Agents",
    description:
      "Designing systems where agents coordinate, call tools, and finish tasks without hand-holding — with enough guardrails that they're actually reliable in production.",
    link: "",
  },
  {
    icon: assets.code_icon,
    title: "Full-stack",
    description:
      "Next.js and Hono on the web side, React Native + Expo for mobile. TypeScript everywhere. Supabase for most data and auth needs.",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Platforms & Cloud",
    description:
      "Azure AI Foundry for agent work, Anthropic API for Claude integrations, and WhatsApp Business Platform — including the BSP bits most tutorials skip over.",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "Domains",
    description:
      "Payments and FX, financial document processing, Nigerian market products. I've built for contexts where the internet is patchy and most users are on mobile.",
    link: "",
  },
];

// -- About info cards (§9 fact list) --
export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Stack",
    description: "TypeScript · Next.js · Hono · React Native · Expo",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Cloud",
    description: "Azure AI Foundry · Anthropic API · Supabase",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Availability",
    description: "Open to remote roles · Based in Nigeria",
  },
];

// -- Certifications (§8) --
export const certsData = [
  {
    status: "In progress",
    title: "Azure AI Engineer — AI-103",
    detail: "Azure AI Apps & Agents Developer Associate",
  },
  {
    status: "In progress",
    title: "GitHub Agentic AI Developer — GH-600",
    detail: "Agent architecture, tool use, multi-agent coordination",
  },
  {
    status: "Completed",
    title: "Azure AI Foundry",
    detail: "Microsoft AI Skills Fest course",
  },
  {
    status: "Completed",
    title: "Anthropic Academy",
    detail: "Claude API · MCP · Agent Skills",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];

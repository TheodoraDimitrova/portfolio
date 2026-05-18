import { Code2, Cpu, Layout, Rocket, type LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    title: "Frontend Architecture",
    description:
      "Building modern web applications using React (Next.js) and TypeScript, with a focus on performance, maintainability, and clean architecture.",
    icon: Code2,
  },
  {
    title: "UI Development & UX Implementation",
    description:
      "Translating Figma designs into responsive, user-friendly interfaces aligned with product and business requirements.",
    icon: Layout,
  },
  {
    title: "SaaS & E-commerce Solutions",
    description:
      "Developing end-to-end platforms with secure authentication, CMS integration (Sanity/Shopify), and complex state management.",
    icon: Rocket,
  },
  {
    title: "AI-Assisted Development",
    description:
      "Using modern AI tools (Cursor, GitHub Copilot, Vercel AI SDK) to improve development speed, productivity, and feature implementation.",
    icon: Cpu,
  },
];

export type SkillGroup = {
  title: string;
  items: { heading: string; description?: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "FRONTEND ENGINEERING",
    items: [
      {
        heading: "Frontend Frameworks",
        description:
          "React (Next.js) and Vue (Nuxt.js) for building modern web applications with focus on performance and scalability.",
      },
      {
        heading: "JavaScript & Core Web Skills",
        description:
          "Mastering modern JavaScript and TypeScript to write clean, type-safe, and maintainable code following industry best practices",
      },
      {
        heading: "UI & Styling",
        description:
          "Tailwind CSS, SCSS, Material UI, ShadCN for building responsive interfaces",
      },
      {
        heading: "Performance Optimization",
        description:
          "Focused on Web Vitals and efficient rendering patterns to ensure fast, production-ready interfaces",
      },
    ],
  },
  {
    title: "State Management & Architecture",
    items: [
      {
        heading: "Advanced State Management",
        description:
          "Architecting predictable data flows using Redux Toolkit, Context API, and Vuex for complex application logic",
      },
      {
        heading: "APIs & Integration",
        description: "REST APIs, Fetch, Axios",
      },
      {
        heading: "Backend (Node.js, Express)",
        description:
          "Backend integration and API usage (Node.js/Express and BaaS solutions)",
      },
      {
        heading: "Data Infrastructure",
        description:
          "Designing efficient schemas with SQL and NoSQL databases, ensuring data integrity and fast retrieval",
      },
      {
        heading: "CMS & E-commerce Platforms",
        description: "Sanity, OctoberCMS, WordPress, Shopify",
      },
    ],
  },
  {
    title: "Collaboration & Workflow",
    items: [
      {
        heading: "Team Collaboration",
        description:
          "Collaborated with designers, backend developers, and clients in cross-functional product teams.",
      },
      {
        heading: "Agile environment | JIRA task management",
        description:
          "Worked in cross-functional teams using Jira for task tracking and workflow coordination.",
      },
      {
        heading: "Version Control",
        description: "Git-based development workflow using GitHub and GitLab.",
      },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  /** Tag label that renders with accent styling (optional) */
  featuredTag?: string;
  image: string;
  projectUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    title: "MarketCloud eCommerce Platform",
    description:
      "Full-stack eCommerce solution featuring an AI-driven storefront, secure checkout flow, and an Admin Dashboard for products stock and order management.",
    tags: [
      "Next.js (App Router)",
      "TypeScript",
      "Redux Toolkit",
      "Sanity CMS (GROQ)",
      "Supabase",
      "Vercel AI SDK",
    ],
    featuredTag: "Vercel AI SDK",
    image: "/images/marketCloud.png",
    projectUrl: "https://market-cloud.vercel.app/",
    githubUrl: "https://github.com/TheodoraDimitrova/marketCloud",
  },
  {
    title: "Invoice Management System",
    description:
      "SaaS invoicing and business management platform with modular feature-based architecture, real-time data synchronization, and PDF generation",
    tags: ["React", "Firebase", "Redux Toolkit", "Tailwind CSS", "Material UI"],
    image: "/images/invoicer.png",
    projectUrl: "https://in-voice-app-theodoradimitrovas-projects.vercel.app/",
    githubUrl: "https://github.com/TheodoraDimitrova/inVoice_App",
  },
  {
    title: "RBS Real Estate - SPA ",
    description:
      "A single-page application for renting, buying, and selling real estate properties. The application is built as a backendless system using Firebase services for authentication, database, and file storage.",
    tags: ["React", "SPA", "Firebase", "Google OAuth", "Firebase SDK"],
    image: "/images/RBS.png",
    projectUrl: "https://rbs-real-estate.vercel.app/",
    githubUrl: "https://github.com/TheodoraDimitrova/RBS_Real_Estate",
  },
  {
    title: "Dev Experience MERN Application",
    description:
      "Social Networking Platform for Developers (MERN Application) with authentication, dashboard, and a feed of posts.",
    tags: [
      "React",
      "MongoDB",
      "Express",
      "Node.js",
      "Bootstrap 4",
      "API",
      "Passport.js",
      "JWT",
      "bcrypt",
      "Axios",
      "Redux Thunk",
    ],
    image: "/images/devExp.jpg",
    projectUrl: "https://dev-experience-production.up.railway.app/",
    githubUrl: "https://github.com/TheodoraDimitrova/devExpReact",
  },
];

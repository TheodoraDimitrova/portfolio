export type Experience = {
  role: string;
  company: string;
  location?: string;
  period: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: "Front-End Developer",
    company: "Freelance",
    period: "2025–2026",
    highlights: [
      "Delivered eCommerce and SaaS web applications for clients",
      "Built and maintained production web applications across multiple client projects",
      "Collaborated with developers and SaaS founders on product development and UI implementation",
    ],
  },
  {
    role: "eCommerce & Web Applications Developer",
    company: "Regenita Mid-East LTD",
    location: "Cyprus",
    period: "01/2022 – 02/2025",
    highlights: [
      "Managed and customized a Shopify-based e-commerce store, including store setup, frontend customization, and payment integration within the platform’s capabilities",
      "Implemented SEO improvements and supported on-page optimization to enhance search visibility",
      "Worked with Google Ads and analytics tools (e.g., Google Analytics) to track traffic and user behavior",
      "Developed and maintained a custom internal invoicing tool using React and Firebase for generating and managing business invoices",
    ],
  },
  {
    role: "Front-End Developer",
    company: "Shippii Technologies / vConnect LTD",
    location: "Denmark",
    period: "10/2019 – 06/2022",
    highlights: [
      "Developed a logistics and shipment management platform used across Denmark, Sweden, and Finland",
      "Integrated REST APIs and collaborated on complex, data-driven application flows",
      "Built UI components using Nuxt.js (Vue) with Vuex for state management, SCSS",
      "Participated in Agile development process within a cross-functional team",
      "Developed and maintained presentation websites using October CMS",
    ],
  },
];

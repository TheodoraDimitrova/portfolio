export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/teodora-dimitrova-1b92b7107/",
    icon: "fab fa-linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/TheodoraDimitrova",
    icon: "fab fa-github",
  },
] as const;

export const footerSocialLinks = socialLinks.filter(
  (link) => link.label === "LinkedIn" || link.label === "GitHub",
);

export const aboutInfo = {
  location: "Based in Bulgaria",
  /** Set when CV is in /public (e.g. "/cv.pdf") */
  cvUrl: undefined as string | undefined,
} as const;

export const contactInfo = {
  phone: "+359 879 45 20 07",
  email: "tbdimitrova.bg@gmail.com",
} as const;

export const navSections = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
] as const;

import { navSections } from "@/data/site";

const getScrollOffset = (): number => {
  const header = document.querySelector<HTMLElement>(".site-header");
  return (header?.offsetHeight ?? 72) + 12;
};

export const getActiveSectionId = (): string => {
  if (window.scrollY < 80) {
    return "hero";
  }

  const scrollPos = window.scrollY + getScrollOffset() + 40;
  let activeId: string = navSections[0].id;

  for (const section of navSections) {
    const el = document.getElementById(section.id);
    if (el && el.offsetTop <= scrollPos) {
      activeId = section.id;
    }
  }

  return activeId;
};

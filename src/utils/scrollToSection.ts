const OFFSET_GAP = 12;
const MIN_DURATION_MS = 1100;
const MAX_DURATION_MS = 2200;
const MS_PER_PX = 0.72;

let scrollAnimationId: number | null = null;

const getScrollOffset = (): number => {
  const header = document.querySelector<HTMLElement>(".site-header");
  return (header?.offsetHeight ?? 72) + OFFSET_GAP;
};

const prefersReducedMotion = (): boolean =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const easeInOutSine = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;

const getScrollDuration = (distance: number): number =>
  Math.min(
    MAX_DURATION_MS,
    Math.max(MIN_DURATION_MS, Math.abs(distance) * MS_PER_PX),
  );

const animateScrollTo = (targetTop: number): void => {
  if (scrollAnimationId !== null) {
    cancelAnimationFrame(scrollAnimationId);
    scrollAnimationId = null;
  }

  const top = Math.max(0, targetTop);

  if (prefersReducedMotion()) {
    window.scrollTo({ top, behavior: "auto" });
    return;
  }

  const start = window.scrollY;
  const distance = top - start;

  if (Math.abs(distance) < 2) {
    window.scrollTo({ top, behavior: "auto" });
    return;
  }

  const duration = getScrollDuration(distance);
  const startTime = performance.now();

  const step = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo({
      top: start + distance * easeInOutSine(progress),
      behavior: "auto",
    });

    if (progress < 1) {
      scrollAnimationId = requestAnimationFrame(step);
    } else {
      scrollAnimationId = null;
      window.scrollTo({ top, behavior: "auto" });
    }
  };

  scrollAnimationId = requestAnimationFrame(step);
};

export const scrollToSection = (
  id: string,
  options?: { updateHash?: boolean },
) => {
  const target = document.getElementById(id);
  if (!target) return;

  const offset = getScrollOffset();
  const top =
    id === "hero"
      ? 0
      : target.getBoundingClientRect().top + window.scrollY - offset;

  animateScrollTo(top);

  if (options?.updateHash !== false) {
    history.pushState(null, "", `#${id}`);
  }
};

export const scrollToSectionFromHash = () => {
  const id = window.location.hash.replace(/^#/, "");
  if (!id) return;

  requestAnimationFrame(() => {
    scrollToSection(id, { updateHash: false });
  });
};

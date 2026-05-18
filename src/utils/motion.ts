/** Soft deceleration — gentle start and landing */
export const motionEase = [0.22, 0.61, 0.36, 1] as const

export const revealHidden = { opacity: 0, y: 8 } as const
export const revealVisible = { opacity: 1, y: 0 } as const

export const revealViewport = {
  once: true,
  amount: 0.1,
  margin: '0px 0px -80px 0px',
} as const

export const sectionRevealViewport = {
  once: true,
  amount: 0.06,
  margin: '0px 0px -96px 0px',
} as const

export const revealTransition = (delay = 0, duration = 1.2) => ({
  type: 'tween' as const,
  duration,
  delay,
  ease: motionEase,
})

export const sectionRevealTransition = (delay = 0) => ({
  type: 'tween' as const,
  duration: 1.4,
  delay,
  ease: motionEase,
})

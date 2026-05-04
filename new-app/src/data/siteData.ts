export type Project = {
  title: string
  image: string
  projectUrl: string
  githubUrl: string
}

export const projects: Project[] = [
  {
    title: 'Market Cloud',
    image: '/images/marketCloud.png',
    projectUrl: 'https://market-cloud.vercel.app/',
    githubUrl: 'https://github.com/TheodoraDimitrova/marketCloud',
  },
  {
    title: 'InVoice App',
    image: '/images/invoicer.png',
    projectUrl: 'https://in-voice-app-theodoradimitrovas-projects.vercel.app/',
    githubUrl: 'https://github.com/TheodoraDimitrova/inVoice_App',
  },
  {
    title: 'RBS Real Estate',
    image: '/images/RBS.png',
    projectUrl: 'https://rbs-real-estate.vercel.app/',
    githubUrl: 'https://github.com/TheodoraDimitrova/RBS_Real_Estate',
  },
  {
    title: 'Dev Experience',
    image: '/images/devExp.jpg',
    projectUrl: 'https://dev-experience-production.up.railway.app/',
    githubUrl: 'https://github.com/TheodoraDimitrova/devExpReact',
  },
]

export const aboutSkillsColumns: string[][] = [
  [
    'Front-End Application Development',
    'Proficient in JavaScript (ES6+), TypeScript, DOM manipulations, jQuery',
    'Proven experience with CSS, including SCSS',
    'Experience in React (Next.js), Vue (Nuxt.js), Svelte, Angular',
  ],
  [
    'State Management (Redux Toolkit, Redux, Context API and Vuex)',
    'Working with REST APIs',
    'Server-Side Web Development (Node, Express)',
  ],
  [
    'DB Administration (MySQL, MongoDB, Redis)',
    'Package Managers NPM and Yarn',
    'Experience with headless CMS and traditional CMS tools',
  ],
  [
    'Collaborate with team and manager',
    'Work experience in Agile environment (JIRA)',
    'Version Control with GitHub and GitLab',
  ],
]

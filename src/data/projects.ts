export type Project = {
  title: string
  image: string
  projectUrl: string
  githubUrl: string
}

export const projects: Project[] = [
  {
    title: 'Market Cloud – eCommerce Platform',
    image: '/images/marketCloud.png',
    projectUrl: 'https://market-cloud.vercel.app/',
    githubUrl: 'https://github.com/TheodoraDimitrova/marketCloud',
  },
  {
    title: 'InVoice App',
    image: '/images/invoicer.png',
    projectUrl:
      'https://in-voice-app-theodoradimitrovas-projects.vercel.app/',
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

import { Footer } from '../components/Footer'
import { projects } from '../data/projects'

export function WorkPage() {
  return (
    <main id="work">
      <div className="container">
        <h1 className="lg-heading">
          My <span className="text-secondary">Work</span>
        </h1>

        <h2 className="sm-heading">Check out some of my projects...</h2>

        <div className="projects">
          {projects.map((project) => (
            <div key={project.title} className="item">
              <a href={project.projectUrl} target="_blank" rel="noreferrer">
                <img src={project.image} alt={project.title} />
              </a>
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-light"
              >
                <i className="fas fa-eye fa-2x" /> Project
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                <i className="fab fa-github fa-2x" /> Github
              </a>
            </div>
          ))}
        </div>

        <hr />

        <h2 className="sm-heading">
          <a
            href="https://github.com/TheodoraDimitrova?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            And many more on... <i className="fab fa-github fa-2x" />
          </a>
        </h2>
      </div>

      <Footer />
    </main>
  )
}

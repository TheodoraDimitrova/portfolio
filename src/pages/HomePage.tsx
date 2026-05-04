import { useEffect } from 'react'
import { Footer } from '../components/Footer'

export function HomePage() {
  useEffect(() => {
    document.body.id = 'bg-img'
    return () => {
      document.body.removeAttribute('id')
    }
  }, [])

  return (
    <main id="home">
      <h1 className="lg-heading">
        Teodora <span className="text-secondary">Dimitrova</span>
      </h1>
      <h2 className="sm-heading">Frontend Developer & Web Designer</h2>
      <div className="icons">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/theodora.dimitrova.56"
        >
          <i className="fab fa-facebook-f fa-2x" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/teodora-dimitrova-1b92b7107/"
        >
          <i className="fab fa-linkedin fa-2x" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/TheodoraDimitrova"
        >
          <i className="fab fa-github fa-2x" />
        </a>
      </div>
      <Footer />
    </main>
  )
}

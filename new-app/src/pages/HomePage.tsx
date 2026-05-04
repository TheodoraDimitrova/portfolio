function HomePage() {
  return (
    <main id="home" className="home-page">
      <div className="container">
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
            <i className="fab fa-facebook-f fa-2x"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/teodora-dimitrova-1b92b7107/"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/TheodoraDimitrova"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
      </div>
    </main>
  )
}

export default HomePage

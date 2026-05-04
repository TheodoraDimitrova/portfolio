import { aboutSkillsColumns } from "../data/siteData";

function AboutPage() {
  return (
    <main id="about" className="about-page">
      <div className="container">
        <h1 className="lg-heading">
          About <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">Let me tell you a few things about me...</h2>

        <div className="grid-container">
          <div className="portrait">
            <div className="img" aria-label="Teodora Dimitrova photo"></div>
          </div>
          <div className="bio">
            <p>
              Ihave nearly 5 years of professional experiencein the IT industry
              as a Front-End developer.Throughout my career, I have successfully
              built and maintained web applications for two companies and
              multiple clients, consistently delivering high-quality solutions.
              My journey in the software industry began in 2016 with my
              education at the Software University (SoftUni), Sofia, Bulgaria,
              where I obtained my diploma in JavaScript Web Development. I
              primarily specialize in user interface development for
              applications, with a strong focus on the JavaScript language, both
              in front-end development and its server-side applications. Over
              the years, I have actively maintained my GitHub repository,
              showcasing my technical skills and passion for innovation in web
              and server-side development. I am always eager to explore new
              technologies and stay up to date with the latest advancements in
              the field.
            </p>
          </div>
        </div>

        <div className="skills">
          {aboutSkillsColumns.map((column, colIndex) => (
            <div
              className={`skills-block block-${colIndex + 1}`}
              key={colIndex}
            >
              {column.map((skill) => (
                <div key={skill}>
                  <div className="skills-header">
                    <span className="big-tick-box">
                      <i className="fa fa-check"></i>
                    </span>
                    <h3>{skill}</h3>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default AboutPage;

import './AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div>
          <h2>About Me</h2>
          <p>
          I'm a passionate full-stack developer eager to start my career in building modern, user-friendly web applications. I enjoy turning ideas into interactive digital experiences using the latest technologies and frameworks.
          </p>
          <p>
          As a quick learner and problem-solver, I'm always exploring new tools, working on personal projects, and learning from open-source communities. I’m excited to contribute, grow, and make an impact as I begin my journey in the tech world.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number"> Student</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
        <div className="about-image-wrapper">
          <img
            src="/images/priyanka.jpg"
            alt="Profile"
            className="about-image"
          />
          <div className="about-icon">
            <i className="fas fa-code"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
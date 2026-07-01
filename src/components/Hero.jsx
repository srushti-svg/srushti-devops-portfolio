import { FaGithub, FaLinkedin } from "react-icons/fa";
function Hero() {
  return (
    <section className="hero">

      <p className="greeting">👋 Hello, I'm</p>

      <h1>Srushti Meshram</h1>

      <h2>DevOps Engineer</h2>

      <p className="description">
        AWS Certified Developer Associate with 4+ years of experience in
        DevOps and Production Support.
        Passionate about building scalable cloud infrastructure,
        automating CI/CD pipelines, and deploying containerized
        applications using Kubernetes and Terraform.
      </p>

      <div className="buttons">

  <a
    href="/resume/Srushti_Meshram_Devops.pdf"
    target="_blank"
    rel="noreferrer"
  >
    <button className="primary-btn">
      📄 Download Resume
    </button>
  </a>

  <a href="#projects">
    <button className="secondary-btn">
      🚀 View Projects
    </button>
  </a>

</div>
<div className="social-icons">

  <a
    href="https://github.com/srushti-svg"
    target="_blank"
    rel="noreferrer"
  >
    <FaGithub />
  </a>

 <a
  href="https://www.linkedin.com/in/srushti-meshram-042368191/?skipRedirect=true"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaLinkedin />
</a>

</div>

    </section>
  );
}

export default Hero;
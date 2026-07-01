function Projects() {
  const projects = [
    {
      title: "End-to-End CI/CD Pipeline",
      tech: "Jenkins • Docker • Kubernetes • AWS",
      description:
        "Designed and implemented a complete CI/CD pipeline for deploying containerized applications on AWS EKS using Jenkins, Docker, and Kubernetes."
    },

    {
      title: "AWS Infrastructure Automation",
      tech: "Terraform • EC2 • VPC • IAM • S3",
      description:
        "Provisioned complete AWS infrastructure using Terraform with reusable Infrastructure as Code modules."
    },

    {
      title: "GitOps Deployment",
      tech: "ArgoCD • Helm • Kubernetes",
      description:
        "Implemented GitOps-based continuous deployment using ArgoCD and Helm for Kubernetes applications."
    }
  ];

  return (
    <section id="projects" className="projects">

      <h2>Projects</h2>

      <div className="project-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <h3>{project.title}</h3>

            <h4>{project.tech}</h4>

            <p>{project.description}</p>

            <div className="project-buttons">

              <button>GitHub</button>

              <button>Live Demo</button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;
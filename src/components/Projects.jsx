function Projects() {
  return (
    <section id="projects" className="projects">

      <h2>Projects</h2>

      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card">

          <h3>🚀 Enterprise CI/CD Pipeline</h3>

          <p>
            Designing an end-to-end CI/CD pipeline using Jenkins,
            Docker, SonarQube, Trivy, Kubernetes, and AWS EKS to
            automate application build, security scanning, testing,
            and deployment across multiple environments.
          </p>

          <p className="tech-stack">
            <strong>Tech Stack:</strong><br />
            Jenkins • Docker • Kubernetes • AWS EKS • SonarQube • Trivy
          </p>

        </div>

        {/* Project 2 */}
        <div className="project-card">

          <h3>☁️ AWS Infrastructure Automation</h3>

          <p>
            Designing reusable Infrastructure as Code using Terraform
            to provision and manage AWS resources including VPC,
            EC2, IAM, Security Groups, Load Balancer, and S3
            following DevOps best practices.
          </p>

          <p className="tech-stack">
            <strong>Tech Stack:</strong><br />
            Terraform • AWS • EC2 • IAM • VPC • S3 • Load Balancer
          </p>

        </div>

        {/* Project 3 */}
        <div className="project-card">

          <h3>⚙️ GitOps Deployment Platform</h3>

          <p>
            Designing a GitOps-based deployment workflow using
            ArgoCD, Helm, GitHub Actions, Prometheus, and Grafana
            for automated Kubernetes deployments, monitoring,
            and observability.
          </p>

          <p className="tech-stack">
            <strong>Tech Stack:</strong><br />
            ArgoCD • Helm • GitHub Actions • Kubernetes • Prometheus • Grafana
          </p>

        </div>

      </div>

    </section>
  );
}

export default Projects;
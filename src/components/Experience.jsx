function Experience() {
  return (
    <section id="experience" className="experience">

      <h2>Professional Experience</h2>

      <div className="experience-card">

        <h3>DevOps Engineer</h3>

        <h4>Capgemini</h4>

        <p className="duration">
          📅 Dec 2021 – Mar 2026
        </p>

        <div className="exp-item">
          <h5> CI/CD & Automation</h5>
          <p>
            Designed and implemented Jenkins CI/CD pipelines,
            GitOps workflows using ArgoCD & Helm,
            and integrated SonarQube quality gates.
          </p>
        </div>

        <div className="exp-item">
          <h5> Cloud & Infrastructure</h5>
          <p>
            Automated AWS infrastructure using Terraform
            (VPC, EC2, S3, IAM) and managed Amazon EKS clusters.
          </p>
        </div>

        <div className="exp-item">
          <h5> Containers & Kubernetes</h5>
          <p>
            Built Docker images, deployed microservices,
            configured RBAC, Namespaces, HPA,
            and Resource Quotas.
          </p>
        </div>

        <div className="exp-item">
          <h5> Monitoring & Reliability</h5>
          <p>
            Configured Prometheus, Grafana,
            Splunk and New Relic dashboards,
            alerts and monitoring solutions.
          </p>
        </div>

        <div className="exp-item">
          <h5> Production Support</h5>
          <p>
            Performed root cause analysis,
            performance optimization,
            created SOPs and collaborated with
            development, QA and infrastructure teams.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Experience;
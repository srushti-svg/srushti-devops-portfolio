function Skills() {
  const skills = [
    "Linux",
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Jenkins",
    "ArgoCd",
    "Shell Scripting",
    "Prometheus",
    "Grafana",
    "Git",
    "ServiceNow",
    "PagerDuty"
  ];

  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
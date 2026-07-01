import {
  FaLinux,
  FaDocker,
  FaJenkins,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "Linux", icon: <FaLinux /> },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "Terraform", icon: <SiTerraform /> },
    { name: "Jenkins", icon: <FaJenkins /> },
    { name: "GitHub Actions", icon: <FaGithub /> },
    { name: "ArgoCD", icon: "🚀" },
    { name: "Ansible", icon: <SiAnsible /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Prometheus", icon: <SiPrometheus /> },
    { name: "Grafana", icon: <SiGrafana /> },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
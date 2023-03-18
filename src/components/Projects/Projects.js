import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import files from "../../Assets/Projects/files-project.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>!
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={files}
              isBlog={false}
              title="Files"
              description="Open Source Contributor to this large project. Building the best file manager experience for Windows."
              ghLink="https://github.com/radu-cernatescu/Files"
              demoLink="https://files.community/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Android Forex App"
              description="A simple 3 page Android Java app that allows conversion between currencies, historical conversion and to get the latest business news."
              ghLink="https://github.com/radu-cernatescu/android-forex-app"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Quantum Mechanical Keyboard Firmware: A Fork supporting GMMK2 65% Keyboard"
              description="Radu's fork of the open-source QMK keyboard firmware with support for Glorious GMMK2 65% & custom key bindings/RGB."
              ghLink="https://github.com/radu-cernatescu/qmk_firmware_gmmk2_p65"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Windows 11 QEMU KVM with GPU Passthrough"
              description="Configurations and scripts for a Windows 11 KVM with GPU passthrough. Programmed scripts for attaching/detaching peripherals with key bindings, and re-binding the GPU"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

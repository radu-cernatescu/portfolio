import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import files from "../../Assets/Projects/files-project.png";
import forexapp from "../../Assets/Projects/forex-app.png";
import kvm from "../../Assets/Projects/kvm.jpg";
import gmmk from "../../Assets/Projects/gmmk.jpeg";

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
              description="Open Source Contributor to this large project. Building the best file manager experience for Windows. Written in C#."
              ghLink="https://github.com/radu-cernatescu/Files"
              demoLink="https://files.community/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gmmk}
              isBlog={false}
              title="Quantum Mechanical Keyboard Firmware: A Fork supporting GMMK2 65% Keyboard"
              description="Radu's fork of the open-source QMK keyboard firmware with support for Glorious GMMK2 65% & custom key bindings/RGB. Written in C."
              ghLink="https://github.com/radu-cernatescu/qmk_firmware_gmmk2_p65"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kvm}
              isBlog={false}
              title="Windows 11 QEMU KVM with GPU Passthrough"
              description="Configurations and scripts for a Windows 11 KVM with GPU passthrough. Programmed scripts for attaching/detaching peripherals with key bindings, and re-binding the GPU. Written in Bash and Libvirt."
              ghLink="https://github.com/radu-cernatescu/windows11kvm-1070ti"
              demoLink="static/media/kvm.dd970969f00411ce4ee8.jpg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forexapp}
              isBlog={false}
              title="Android Forex App"
              description="A simple 3 page Android Java app that allows conversion between currencies, historical conversion and to get the latest business news. Written in Java."
              ghLink="https://github.com/radu-cernatescu/android-forex-app"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

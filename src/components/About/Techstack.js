import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiAngularSimple
} from "react-icons/di";
import {
  SiJava,
  SiPowershell,
  SiNextdotjs,
  SiGnubash,
  SiSelenium,
  SiQemu
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <p className="tech-icon-text">C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p className="tech-icon-text">JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p className="tech-icon-text">Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="tech-icon-text">React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p className="tech-icon-text">MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <p className="tech-icon-text">Next.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p className="tech-icon-text">Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowershell />
        <p className="tech-icon-text">PowerShell</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash />
        <p className="tech-icon-text">Bash</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p className="tech-icon-text">Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJava />
        <p className="tech-icon-text">Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
        <p className="tech-icon-text">Angular</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSelenium />
        <p className="tech-icon-text">Selenium</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiQemu />
        <p className="tech-icon-text">QEMU</p>
      </Col>
      
    </Row>
  );
}

export default Techstack;

import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiPowerbi,
  SiJenkins,
  SiAzuredevops
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <p className="tech-icon-text">Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className="tech-icon-text">Visual Studio Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p className="tech-icon-text">Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
        <p className="tech-icon-text">PowerBI</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
        <p className="tech-icon-text">Jenkins</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops />
        <p className="tech-icon-text">Azure DevOps</p>
      </Col>
    </Row>
  );
}

export default Toolstack;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/radu.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I’ve been passionate about electronics and software from a young age, starting with tinkering projects like jailbreaking my iPod Touch 2nd Gen to customize its features. That curiosity has grown into a career where I thrive on building innovative software and solving challenging problems.

              <br />
              <br />
              I am fluent in languages like <b className="purple">C++, JavaScript, and Java</b>, with expertise spanning front-end and back-end development, embedded systems, and cloud infrastructure. My professional experience includes designing and implementing cutting-edge solutions, such as embedded Linux devices with natural language capabilities, OCR-enhanced applications, and scalable web technologies.
              <br />
              <br />
              I am constantly learning, building, and pushing boundaries to create systems that are not only functional but also impactful.
            </p>
          </Col>
          <Col md={4} className="myPicture">
            <Tilt>
              <img src={myImg} className="img-fluid picture" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/radu-cernatescu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/raducernatescu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/radcern"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

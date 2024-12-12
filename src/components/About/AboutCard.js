import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Radu Cernatescu </span>
            from <span className="purple"> Toronto, Canada.</span>
            <br/> 
            <br />I'm currently a Software Engineer at Trysight Inc., where I design and build innovative software solutions, including advanced embedded Linux devices with natural language capabilities. With a strong background in software development and a Bachelor's degree in Software Development from Seneca College, I specialize in front-end, back-end, and cloud-based technologies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Skiing ⛷
            </li>
            <li className="about-activity">
              <ImPointRight /> Mountain Biking 🚵‍♀️
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling ✈🧳
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

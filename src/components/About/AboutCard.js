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
            <br />I'm a new graduate from the Software Development degree at Seneca
            College.
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

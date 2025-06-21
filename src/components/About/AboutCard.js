import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kondreddy Mounika </span>
            from <span className="purple"> Kakinada, Andhra Pradesh</span>
            <br />
            I have completed my Bachelor's degree in Computer Science and Engineering with Artificial Intelligence at
            <span className="purple"> Kakinada Institute of Enginnering & Technology.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Browsing new technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mounika</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

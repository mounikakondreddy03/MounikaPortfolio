import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Streaming App"
              description="A full-stack streaming platform inspired by Netflix, built with React.js, Tailwind CSS, and Node.js. Features include user authentication, personalized profiles, movie browsing by genre, real-time search, video playback, and a sleek responsive design. Backend powered by MongoDB for storing user and movie data securely."
              ghLink="https://github.com/mounikakondreddy03/Netflix"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Crop Yield Predicition"
              description="Developed a machine learning model using Python and SVM (Support Vector Machine) techniques to predict crop yield based on various environmental factors. Built a web application using Flask for users to input data and get real-time yield predictions. The model provides accurate results, helping farmers and researchers make informed agricultural decisions."
              ghLink="https://github.com/mounikakondreddy03/crop-yield-predicition"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Luckytrendz Boutique"
              description="An elegant online boutique platform built with HTML, CSS, and JavaScript, showcasing a curated collection of western wear, sarees, and customized maggam blouses. Features include a responsive design, product galleries, detailed fashion categories, and smooth navigation to enhance the shopping experience.."
              ghLink="https://github.com/mounikakondreddy03/Boutique_Website"
              demoLink="https://mounikakondreddy03.github.io/Boutique_Website/signupForm/signup.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Fruit Shop"
              description="A static and responsive fruit shop website built using HTML, CSS, and Media Queries. The website showcases a vibrant selection of fruits with attractive layouts, product sections, and mobile-friendly design. Features include smooth navigation, visually appealing grids, and fully responsive pages for different device sizes."
              ghLink="https://github.com/mounikakondreddy03/Fruit-Shop"
              demoLink="https://mounikakondreddy03.github.io/Fruit-Shop/landing_page.html"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
};

export default Projects;

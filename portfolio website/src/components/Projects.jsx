import 'animate.css';
import { Col, Container, Row, Tab } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import bootstrapLogo from "../assets/img/bootstrap.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import cssLogo from "../assets/img/css.svg";
import javascriptLogo from "../assets/img/javascript.svg";
import mongoLogo from "../assets/img/mongodb.svg";
import node1Logo from "../assets/img/node.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import reactLogo from "../assets/img/react.svg";


import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  const projects = [ // Fixed variable name
    {
      title: "Cozy Place",
      imgUrl: projImg1,
      logos: [node1Logo, javascriptLogo, bootstrapLogo, mongoLogo,cssLogo],
      link: "https://travel-website-mern-project.onrender.com/listings",
    },
    {
      title: "Portfolio",
      imgUrl: projImg2,
      logos: [reactLogo, cssLogo, bootstrapLogo],
      link: "#home",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <br />
                  <br />
                  <br />
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={project.link} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Add relevant content here if needed. You can delete
                          this tab if unused.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Add relevant content here if needed. You can delete
                          this tab if unused.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background Design"
      />
    </section>
  );
}

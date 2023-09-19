import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

import tarotLogo from "../assets/img/projects/tarot.png";
import hrLeaveManagementLogo from "../assets/img/projects/HrLeaveManagement.png";
import sociopediaLogo from "../assets/img/projects/Sociopedia.png";
import constrictorLogo from "../assets/img/projects/Constrictor.png";

import tamnacityLogo from "../assets/img/projects/TAMNACITYLOGO2023.png";
import kingsmenLogo from "../assets/img/projects/KINGSMEN2.png";
import beulahLogo from "../assets/img/projects/Beulah2.png";
import handymanLogo from "../assets/img/projects/Handyman.png";
import bronwinLogo from "../assets/img/projects/Bronwin.png";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Sociopedia",
      description: "MongoDB,Node.js,Express.js,React.js",
      imgUrl: sociopediaLogo,
      githubUrl: "https://github.com/BronwinHeppell/MERN_Social_App",
    },
    {
      title: "HR Leave Management",
      description: "Entity Framework core, ASP.NET, SQL",
      imgUrl: hrLeaveManagementLogo,
      githubUrl: "https://github.com/BronwinHeppell/LeaveManagement.Web",
    },
    {
      title: "Butterfly Tarot Cards",
      description: "JavaScript, CSS, HTML",
      imgUrl: tarotLogo,
      githubUrl: "https://github.com/BronwinHeppell/ButterflyTarot",
    },
    {
      title: "Constrictor Jiu Jitsu",
      description: "TypeScript, React,JavaScript,CSS",
      imgUrl: constrictorLogo,
      githubUrl:
        "https://github.com/BronwinHeppell/React_Constrictor_Jiu_Jitsu",
    },
    {
      title: "Tamnacity Logo Design",
      description: "Design for a nail Salon",
      imgUrl: tamnacityLogo,
    },
    {
      title: "Kingsmen BarberShop Logo Design",
      description: "Design for a Barbershop ",
      imgUrl: kingsmenLogo,
    },
    {
      title: "Handyman.co.za Logo Design",
      description: "Design for a Handyman website ",
      imgUrl: handymanLogo,
    },
    {
      title: "Beulah Lashes & Brows Logo Design",
      description: "Design for a Lash and Brow studio",
      imgUrl: beulahLogo,
    },
    {
      title: "Bronwin Heppell Logo Design",
      description: "Design for my own work ",
      imgUrl: bronwinLogo,
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
                  <p>
                    I focus on crafting meaningful logo designs and software
                    solutions that aim to make a positive impact. My work
                    combines creative design sensibilities with strong technical
                    knowledge, resulting in visually appealing logos and
                    functional software applications that strive to meet and
                    often surpass clients' expectations.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Get In Touch</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Fun Fact</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          To get in touch with me, feel free to fill in the form
                          below and you will hear back from me soon!
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          I'm a multifaceted enthusiast with a love for true
                          crime, coding, logo design, and a heart that beats for
                          epic Dungeons & Dragons adventures. My interests are
                          as diverse as the realms I explore in D&D campaigns!
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

import proj1Img from "../assets/img/qtify.png";
import proj2Img from "../assets/img/restRating.png";
import proj3Img from "../assets/img/qkart.png";
import proj4Img from "../assets/img/ercica.webp";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "QTify",
      description:
        "QTify is a song-browsing application built from scratch using ReactJS paired with Material UI and Swiper to deliver a seamless and aesthetic user interface, offering songs from different albums and genres for music lovers.",
      link: "https://bing-qtify.netlify.app/",
      imgUrl: proj1Img,
    },
    {
      title: "Machine Coding - Restaurant Rating",
      description:
        "Everyone uses zomato or swiggy, but have you ever seen how restaurant rating systems work? Design a restaurant rating platform.",
      link: "https://github.com/mRbinG11/RestaurantRating/tree/main/java/src/main/java/com/example/demo",
      imgUrl: proj2Img,
    },
    {
      title: "QKart Backend",
      description:
        "QKart is an E-commerce application offering a variety of products for customers to choose from.",
      link: "https://github.com/mRbinG11/Qkart-Backend/tree/master/src",
      imgUrl: proj3Img,
    },
    {
      title: "QKart Frontend",
      description:
        "QKart is an E-commerce application offering a variety of products for customers to choose from.",
      link: "https://bing-qkart.vercel.app/",
      imgUrl: proj3Img,
    },
    {
      title: "Automatic Gate Control System",
      description: "Technical Paper published in ERCICA, Springer.",
      link: "https://link.springer.com/chapter/10.1007/978-981-16-1338-8_25",
      imgUrl: proj4Img,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Here are some of my recent projects:</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">TWO</Tab.Pane>
                <Tab.Pane eventKey="third">THREE</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};

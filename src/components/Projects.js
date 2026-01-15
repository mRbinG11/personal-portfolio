import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { ProjectCard } from "./ProjectCard";
import proj1Img from "../assets/img/qtify.png";
import proj2Img from "../assets/img/xflix.png";
import proj3Img from "../assets/img/qkart.png";
import proj4Img from "../assets/img/bingtrip.png";
import proj5Img from "../assets/img/restRating.png";
import proj6Img from "../assets/img/jukebox.png";
import proj7Img from "../assets/img/qcontest.png";
import proj8Img from "../assets/img/xcompany.png";
import proj9Img from "../assets/img/ercica.webp";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects1 = [
    {
      title: "QTify",
      description:
        "QTify is a song-browsing application built from scratch using ReactJS paired with Material UI and Swiper to deliver a seamless and aesthetic user interface, offering songs from different albums and genres for music lovers.",
      link: "https://bing-qtify.netlify.app/",
      imgUrl: proj1Img,
    },
    {
      title: "XFlix Node",
      description:
        "XFlix is a video sharing platform which hosts videos for the world to watch. It also features uploading new videos by using external video links (eg: Youtube) and playing these videos.",
      link: "https://github.com/mRbinG11/Xflix-Backend/tree/master/backend",
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
      title: "Bing Trip",
      description:
        "Bing Trip is a travel website aimed at travellers looking for a multitude of adventures in different cities.",
      link: "https://bingtrip-dynamic-frontend.netlify.app/",
      imgUrl: proj4Img,
    },
  ];

  const projects2 = [
    {
      title: "Restaurant Rating",
      description:
        "Everyone uses zomato or swiggy, but have you ever seen how restaurant rating systems work? Designed a restaurant rating platform.",
      link: "https://github.com/mRbinG11/RestaurantRating/tree/main/java/src/main/java/com/example/demo",
      imgUrl: proj5Img,
    },
    {
      title: "Jukebox",
      description:
        "Everyone listens to songs on their favorite app ( Savvn, Wynk ) but have you ever thought about How you would make your music player? Design a music player.",
      link: "https://github.com/mRbinG11/Jukebox/tree/master/java/src/main/java/com/example/demo",
      imgUrl: proj6Img,
    },
    {
      title: "QContest",
      description: "A Hackerrank-like contest application.",
      link: "https://github.com/mRbinG11/QContest/tree/master/java/src/main/java/com/crio/qcontest",
      imgUrl: proj7Img,
    },
    {
      title: "XCompany",
      description:
        "XCompany is a KYC (Know Your Company) application which allows employees working in their respective company to know about the hierarchy structure of the people working with them.",
      link: "https://github.com/mRbinG11/XCompany/tree/master/python/src",
      imgUrl: proj8Img,
    },
  ];
  const projects3 = [
    {
      title: "Automatic Gate Control System",
      description: "Technical Paper published in ERCICA 2020, Springer.",
      link: "https://link.springer.com/chapter/10.1007/978-981-16-1338-8_25",
      imgUrl: proj9Img,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInDown" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Here are some of my recent projects:</p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">MERN</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">System Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Others</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects1.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects2.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects3.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
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

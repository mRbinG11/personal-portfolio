import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TrackVisibility from "react-on-screen";
import colorSharp from "../assets/img/color-sharp.png";
import certPDF from "../assets/PDFs/WIN_Certificate.pdf";

export const Experience = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section id="exp" className="experience">
      <Container>
        <Row>
          <Col>
            <div className="exp-bx">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__headShake" : ""
                    }
                  >
                    <h2>Work Experience</h2>
                  </div>
                )}
              </TrackVisibility>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="exp-slider"
              >
                <div className="item">
                  <h4>SENIOR DEVELOPER - APPLICATIONS</h4>
                  <h5>MICROLAND LTD | April 2023 - March 2026</h5>
                  <ul>
                    <li>
                      Working with MS SQL, Node.js, React.js, Express.js, PTC
                      ThingWorx, Kepware & PostgreSQL.
                    </li>
                    <li>
                      Designed and implemented reusable React components to
                      streamline development and maintain consistency across
                      applications.
                    </li>
                    <li>
                      Applied React hooks and Context API for efficient state
                      management in complex applications.
                    </li>
                    <li>
                      Developed dynamic front-end features such as interactive
                      dashboards, forms, and real-time data rendering.
                    </li>
                    <li>
                      Integrated React applications with RESTful APIs, enabling
                      smooth communication between front-end and back-end
                      services.
                    </li>
                    <li>
                      Enhanced application performance through code splitting,
                      lazy loading, and component optimization.
                    </li>
                    <li>
                      Collaborated with cross-functional teams to deliver
                      full-stack solutions, connecting React front-end with
                      Thingworx back-end services.
                    </li>
                  </ul>
                </div>
                <div className="item">
                  <h4>ENGINEER</h4>
                  <h5>WIPRO PARI | November 2021 - March 2023</h5>
                  <ul>
                    <li>Working with PTC ThingWorx, Kepware & Sewio RTLS.</li>
                    <li>
                      Designed & implemented robust business logic, automated
                      timers, & sche duling mechanisms to optimize workflow
                      efficiency & ensure timely execution of critical
                      processes.
                    </li>
                    <li>
                      Expertly developed mashups & implemented dynamic data
                      binding to create seamless, interactive user experiences
                      that drive data accuracy & operational efficiency.
                    </li>
                    <li>
                      Designed & delivered tailored mashups, user interfaces, &
                      comprehensive reports addressing diverse business needs,
                      enhancing data accessibility & informed decision-making.
                    </li>
                  </ul>
                </div>
                <div className="item">
                  <h4>GRADUATE ENGINEER TRAINEE</h4>
                  <h5>
                    WIPRO INFRASTRUCTURE ENGINEERING | November 2020 - October
                    2021
                  </h5>
                  <ul>
                    <li>Working with PTC ThingWorx, Kepware & Sewio RTLS.</li>
                    <li>
                      Recipient of the{" "}
                      <a
                        href={certPDF}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WIN Star Award
                      </a>{" "}
                      for independently spearheading application development &
                      testing efforts, consistently ensuring on time &
                      high-quality delivery of critical customer projects.
                    </li>
                    <li>
                      Engineered & deployed customized mashups, intuitive user
                      interfaces, & insightful reports across multiple use
                      cases, significantly improving data-driven decision-making
                      & operational effectiveness.
                    </li>
                  </ul>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="experience background"
      />
    </section>
  );
};

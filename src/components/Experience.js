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
                      Working with PTC ThingWorx, Kepware, PostgreSQL, MS SQL,
                      Node.js, React.js & Express.js.
                    </li>
                    <li>
                      Driving end-to-end project success by translating customer
                      requirements into innovative & scalable software
                      solutions.
                    </li>
                    <li>
                      Leading a cross-functional team to deliver high-quality
                      project outcomes through effective planning,
                      collaboration, & technical excellence.
                    </li>
                    <li>
                      Led the design & implementation of comprehensive data &
                      IoT device models, enhancing system interoperability, data
                      accuracy, & scalability to support complex project
                      requirements.
                    </li>
                    <li>
                      Developed customized mashups, user interfaces, & detailed
                      reports tailored to diverse business use cases, enhancing
                      data visualization & decision-making capabilities.
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

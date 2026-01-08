import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import percent40 from "../assets/img/40-percent.png";
import percent60 from "../assets/img/60-percent.png";
import percent80 from "../assets/img/80-percent.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section id="skills" className="skill">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Here are some of my technical skills and proficiencies.</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={percent60} alt="JavaScript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={percent60} alt="Node.js" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={percent60} alt="React.js" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={percent40} alt="Express.js" />
                  <h5>Express.js</h5>
                </div>
                <div className="item">
                  <img src={percent60} alt="SQL" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={percent80} alt="PTC ThingWorx" />
                  <h5>PTC ThingWorx</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background"
      />
    </section>
  );
};

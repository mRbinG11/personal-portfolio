import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [
    "Full-Stack Developer",
    "Software Engineer",
    "ThingWorx Developer",
  ];
  const period = 750;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__shakeY" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                </div>
              )}
            </TrackVisibility>
            <h1>
              {`Hi! I'm Sujith `}
              <br></br>
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Accomplished PTC ThingWorx Developer with over 5 years of overall
              experience, highly proficient in Node.js, Express.js, MongoDB, &
              React.js. Seeking to completely transition into a full-stack
              development role to embrace new challenges & expand technical
              expertise. Eager to join an innovative organization that offers
              growth opportunities & empowers individual creativity &
              development.
            </p>
            {/* <button onClick={() => scrollToSection("connect")}>
                    Let's Connect <ArrowRightCircle size={25} />
                  </button> */}
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Banner" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

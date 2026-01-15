import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const serverUrl = process.env.SERVER_URL || "http://localhost";
  const port = process.env.PORT || 5000;

  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch(`${serverUrl}:${port}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDetails),
    });
    setFormDetails(formInitialDetails);
    setButtonText("Send");

    let result = await response.json();
    if (result.code !== 200) {
      setStatus({ success: false, message: "Message sending failed." });
    } else {
      setStatus({ success: true, message: "Message sent successfully." });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__lightSpeedInLeft"
                      : ""
                  }
                >
                  <img src={contactImg} alt="Contact Us" />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__lightSpeedInLeft"
                      : ""
                  }
                >
                  <h2>Get In Touch</h2>
                </div>
              )}
            </TrackVisibility>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col md={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    placeholder="First Name"
                  />
                </Col>
                <Col md={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    placeholder="Last Name"
                  />
                </Col>
                <Col md={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    placeholder="Email Address"
                  />
                </Col>
                <Col md={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                    placeholder="Phone Number"
                  />
                </Col>
                <Col md={12} className="px-1">
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    placeholder="Message"
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p className={status.success ? "success" : "danger"}>
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

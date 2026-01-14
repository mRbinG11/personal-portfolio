import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.png";
import navIcon5 from "../assets/img/nav-icon5.png";
import resumePDF from "../assets/PDFs/Sujith_Resume.pdf";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col md={6}>
            <p>&copy; 2026 PSB. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

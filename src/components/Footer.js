import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";

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

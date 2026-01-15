import { Col } from "react-bootstrap";

export const CertificationCard = ({ title, issuer, link }) => {
  return (
    <Col sm={6} md={4}>
      <div className="cert-card">
        <h4>{title}</h4>
        <h5>{issuer}</h5>
        {link && (
          <a
            href={typeof link === "string" ? link : link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certification
          </a>
        )}
      </div>
    </Col>
  );
};

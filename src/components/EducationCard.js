import { Col } from "react-bootstrap";

export const EducationCard = ({ school, degree, field, year, description }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="education-card">
        <h4>{school}</h4>
        <p>{degree}</p>
        {field && <p>{field}</p>}
        <p>{year}</p>
        <p>{description}</p>
      </div>
    </Col>
  );
};

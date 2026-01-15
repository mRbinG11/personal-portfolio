import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { EducationCard } from "./EducationCard";

export const Education = () => {
  const educationData = [
    {
      school: "NITTE MEENAKSHI INSTITUTE OF TECHNOLOGY",
      degree: "BACHELOR OF ENGINEERING (VTU)",
      field: "Computer Science & Engineering",
      year: "2016 - 2020",
      description: "CGPA: 9.1/10",
    },
    {
      school: "KENDRIYA VIDYALAYA, IISC",
      degree: "SENIOR SECONDARY (XII, CBSE BOARD)",
      field: "Science (PCMC)",
      year: "2015 - 2016",
      description: "92.8%",
    },
    {
      school: "KENDRIYA VIDYALAYA, IISC",
      degree: "SECONDARY (X, CBSE)",
      field: "",
      year: "2013 - 2014",
      description: "CGPA: 9.6/10",
    },
  ];

  return (
    <section className="education" id="edu">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__pulse" : ""
                  }
                >
                  <h2>Education</h2>
                  <Row>
                    {educationData.map((eduItem, index) => {
                      return <EducationCard key={index} {...eduItem} />;
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

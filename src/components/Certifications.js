import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { CertificationCard } from "./CertificationCard";
import cert1 from "../assets/PDFs/Programming_for_Data_Science.pdf";
import cert2 from "../assets/PDFs/Microsoft_Certified_Azure_AI_Fundamentals.pdf";
import cert3 from "../assets/PDFs/ThingWorx_Associate_Certification.pdf";

export const Certifications = () => {
  const certs = [
    {
      title: "Programming for Data Science",
      issuer: "CBT Nuggets",
      link: { href: cert1 },
    },
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "CBT Nuggets",
      link: { href: cert2 },
    },
    {
      title: "Fellowship Advanced Full Stack (React + Node.js)",
      issuer: "Crio.Do",
      link: "https://www.crio.do/learn/portfolio/sujithbhat97/",
    },
    {
      title: "ThingWorx Associate Certification",
      issuer: "PTC University",
      link: { href: cert3 },
    },
    {
      title: "Full-Stack Web Development with React",
      issuer: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/75MPFPFRRQVA",
    },
  ];

  return (
    <section id="cert" className="certification">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__tada" : ""}
                >
                  <h2>Certifications</h2>
                </div>
              )}
            </TrackVisibility>
            <Row>
              {certs.map((cert, index) => {
                return <CertificationCard key={index} {...cert} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

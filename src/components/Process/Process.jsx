import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaLightbulb,
  FaPalette,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import "./Process.css";

const steps = [
  {
    number: "01",
    icon: <FaSearch />,
    title: "Discovery",
    text: "Understanding your goals, audience, and project requirements.",
  },
  {
    number: "02",
    icon: <FaLightbulb />,
    title: "Strategy",
    text: "Creating a roadmap and selecting the right technologies.",
  },
  {
    number: "03",
    icon: <FaPalette />,
    title: "Design",
    text: "Designing beautiful, user-friendly, and responsive interfaces.",
  },
  {
    number: "04",
    icon: <FaCode />,
    title: "Development",
    text: "Building secure, scalable, and high-performance applications.",
  },
  {
    number: "05",
    icon: <FaRocket />,
    title: "Launch",
    text: "Testing, deploying, and continuously improving your product.",
  },
];

function Process() {
  return (
    <section className="process-section">
      <Container>
        <div className="text-center mb-5">
          <span className="section-tag">Our Process</span>

          <h2 className="section-title">
            How We Turn
            <span> Ideas Into Reality</span>
          </h2>

          <p className="section-text">
            Our streamlined workflow ensures every project is delivered with
            quality, speed, and attention to detail.
          </p>
        </div>

        <Row>
          {steps.map((step, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <motion.div
                className="process-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="step-number">{step.number}</div>

                <div className="step-icon">{step.icon}</div>

                <h4>{step.title}</h4>

                <p>{step.text}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Process;

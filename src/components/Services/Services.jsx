import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaBullhorn,
  FaCloud,
  FaChartLine,
} from "react-icons/fa";
import "./Services.css";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    text: "Modern, scalable, and responsive websites built with the latest technologies.",
  },
  {
    icon: <FaMobileAlt />,
    title: "App Development",
    text: "Cross-platform mobile applications with smooth user experiences.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI / UX Design",
    text: "Creative and user-focused designs that improve engagement.",
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    text: "SEO, social media, and paid campaigns to grow your brand online.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Solutions",
    text: "Secure cloud infrastructure and deployment for modern businesses.",
  },
  {
    icon: <FaChartLine />,
    title: "Business Growth",
    text: "Technology-driven strategies to help your business scale faster.",
  },
];

function Services() {
  return (
    <section className="services-section">
      <Container>
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Our Services</span>

          <h2 className="section-title">
            Everything You Need To
            <span> Grow Digitally</span>
          </h2>

          <p className="section-text">
            We provide complete digital solutions from strategy and design to
            development and marketing.
          </p>
        </motion.div>

        <Row>
          {services.map((service, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="service-card h-100">
                  <div className="service-icon">{service.icon}</div>

                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>

                    <Card.Text>{service.text}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;

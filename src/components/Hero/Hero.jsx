import { Container, Row, Col, Button } from "react-bootstrap";
import { FaRocket, FaPlayCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="hero-badge">
                <FaRocket className="ms-2" /> Trusted by 150+ Businesses
              </span>

              <h1 className="hero-title">
                Build Modern
                <span> Digital Experiences</span>
                <br />
                That Drive Growth.
              </h1>

              <p className="hero-text">
                We design and develop premium websites, web apps and digital
                products that help businesses scale faster.
              </p>

              <div className="hero-buttons">
                <Button className="btn-primary-custom">
                  Start Project
                  <FaRocket className="ms-2" />
                </Button>

                <Button variant="outline-light" className="btn-video">
                  <FaPlayCircle className="me-2" />
                  Watch Demo
                </Button>
              </div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="glass-card">
                <img src="/Hero.png" alt="Hero Image" className="hero-image" />
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;

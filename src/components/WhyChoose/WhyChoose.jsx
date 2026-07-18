import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaCheckCircle,
  FaArrowRight,
  FaUsers,
  FaAward,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";
import "./WhyChoose.css";

function WhyChoose() {
  return (
    <section className="why-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <span className="section-tag">Why Choose Us</span>

            <h2 className="why-title">
              We Build Digital Products
              <span> That Deliver Results</span>
            </h2>

            <p className="why-text">
              We combine creativity, technology, and strategy to help businesses
              grow with impactful digital solutions.
            </p>

            <div className="feature-list">
              <div>
                <FaCheckCircle /> Experienced Team
              </div>
              <div>
                <FaCheckCircle /> Modern Technologies
              </div>
              <div>
                <FaCheckCircle /> Scalable Solutions
              </div>
              <div>
                <FaCheckCircle /> Dedicated Support
              </div>
            </div>

            <Button className="explore-btn">
              Explore More <FaArrowRight className="ms-2" />
            </Button>
          </Col>

          <Col lg={6}>
            <Row>
              <Col md={6} className="mb-4">
                <div className="info-card">
                  <FaUsers className="card-icon" />
                  <h3>150+</h3>
                  <p>Happy Clients</p>
                </div>
              </Col>

              <Col md={6} className="mb-4">
                <div className="info-card">
                  <FaAward className="card-icon" />
                  <h3>250+</h3>
                  <p>Projects Completed</p>
                </div>
              </Col>

              <Col md={6} className="mb-4">
                <div className="info-card">
                  <FaClock className="card-icon" />
                  <h3>5+</h3>
                  <p>Years Experience</p>
                </div>
              </Col>

              <Col md={6} className="mb-4">
                <div className="info-card">
                  <FaShieldAlt className="card-icon" />
                  <h3>24/7</h3>
                  <p>Support</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhyChoose;

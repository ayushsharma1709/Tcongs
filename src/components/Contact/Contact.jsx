import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <Container>
        <div className="text-center mb-5">
          <span className="section-tag">Contact Us</span>

          <h2 className="section-title">
            Let's Build Something
            <span> Amazing Together</span>
          </h2>

          <p className="section-text">
            Have an idea? We'd love to hear about your project.
          </p>
        </div>

        <Row className="g-5 align-items-center">
          <Col lg={5}>
            <div className="contact-info">
              <div className="info-box">
                <FaPhoneAlt />
                <div>
                  <h5>Call Us</h5>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="info-box">
                <FaEnvelope />
                <div>
                  <h5>Email</h5>
                  <p>hello@company.com</p>
                </div>
              </div>

              <div className="info-box">
                <FaMapMarkerAlt />
                <div>
                  <h5>Location</h5>
                  <p>Pune, Maharashtra</p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <div className="contact-form">
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Control type="email" placeholder="Email Address" />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Control type="text" placeholder="Subject" />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control
                    as="textarea"
                    rows={6}
                    placeholder="Tell us about your project..."
                  />
                </Form.Group>

                <Button className="contact-btn">Send Message</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;

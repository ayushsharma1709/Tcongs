import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row className="gy-5">
            <Col lg={4} md={6}>
              <h2 className="footer-logo">
                T<span>CONGS</span>
              </h2>

              <p className="footer-text">
                We craft premium digital experiences that help businesses grow
                with modern technology and beautiful design.
              </p>

              <div className="social-icons">
                <a href="/">
                  <FaFacebookF />
                </a>

                <a href="/">
                  <FaInstagram />
                </a>

                <a href="/">
                  <FaLinkedinIn />
                </a>

                <a href="/">
                  <FaGithub />
                </a>
              </div>
            </Col>

            <Col lg={2} md={6}>
              <h5>Company</h5>

              <ul>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
              </ul>
            </Col>

            <Col lg={3} md={6}>
              <h5>Services</h5>

              <ul>
                <li>Web Development</li>
                <li>UI / UX Design</li>
                <li>Mobile Apps</li>
                <li>Cloud Solutions</li>
              </ul>
            </Col>

            <Col lg={3} md={6}>
              <h5>Contact</h5>

              <ul>
                <li>Pune, Maharashtra</li>
                <li>+91 98765 43210</li>
                <li>hello@company.com</li>
              </ul>
            </Col>
          </Row>

          <hr />

          <div className="footer-bottom">
            <p>© 2026 TCONGS. All Rights Reserved.</p>

            <button
              className="top-btn"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              <FaArrowUp />
            </button>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;

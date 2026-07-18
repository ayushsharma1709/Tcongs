import { Container, Accordion } from "react-bootstrap";
import "./FAQ.css";

function FAQ() {
  const faqs = [
    {
      title: "How long does a project take?",
      body: "The timeline depends on the project scope. Most websites are completed within 2–6 weeks.",
    },
    {
      title: "Do you provide maintenance?",
      body: "Yes, we offer ongoing maintenance, security updates, and technical support after launch.",
    },
    {
      title: "Can you redesign an existing website?",
      body: "Absolutely! We specialize in redesigning outdated websites with modern UI/UX practices.",
    },
    {
      title: "Do you build mobile-friendly websites?",
      body: "Yes. Every project we build is fully responsive and optimized for all screen sizes.",
    },
    {
      title: "Which technologies do you use?",
      body: "We work with React, Node.js, Express, MongoDB, Bootstrap, Tailwind CSS, and cloud services.",
    },
  ];

  return (
    <section className="faq-section">
      <Container>
        <div className="text-center mb-5">
          <span className="section-tag">FAQ</span>

          <h2 className="section-title">
            Frequently Asked
            <span> Questions</span>
          </h2>

          <p className="section-text">
            Answers to the most common questions about our services.
          </p>
        </div>

        <Accordion defaultActiveKey="0" flush>
          {faqs.map((item, index) => (
            <Accordion.Item
              eventKey={index.toString()}
              key={index}
              className="faq-item"
            >
              <Accordion.Header>{item.title}</Accordion.Header>

              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}

export default FAQ;

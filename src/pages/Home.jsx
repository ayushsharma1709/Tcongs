import CustomNavbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Process from "../components/Process/Process";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import FAQ from "../components/FAQ/FAQ";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Divider from "../components/Divider/Divider";

function Home() {
  return (
    <>
      <CustomNavbar />
      <Hero />

      <Divider />
      <Services />

      <Divider />
      <Process />

      <Divider />
      <WhyChoose />

      <Divider />
      <FAQ />

      <Divider />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;

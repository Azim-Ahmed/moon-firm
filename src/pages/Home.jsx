import About from "../components/about";
import Banner from "../components/Banner";
import Contact from "../components/contact";
import Footer from "../components/footer";
import NavSection from "../components/NavSection";
import MoonProducts from "../components/products";
import SpecialOffer from "../components/specialOffer";
import SuccessCount from "../components/successCount";
import Testimonial from "../components/testimonial";

const Home = () => {
  return (
    <div>
      <NavSection />
      <Banner />
      <About />
      <SuccessCount />
      <SpecialOffer />
      <MoonProducts />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

import { Helmet } from "react-helmet";
import About from "../components/about";
import Banner from "../components/Banner";
import Contact from "../components/contact";
import Footer from "../components/footer";
import NavSection from "../components/NavSection";
import MoonProducts from "../components/products";
import SpecialOffer from "../components/specialOffer";
import SuccessCount from "../components/successCount";
import Testimonial from "../components/testimonial";

const App = () => {
  return (
    <div>
      <Helmet>
        <title>Moon Firm | Home</title>
        {/* <link rel="stylesheet" href="../assets/css/bootstrap.min.css" /> */}
        {/* style css */}
        {/* <link rel="stylesheet" href="../assets/css/style.css" /> */}
        {/* Responsive */}/
        {/* <link rel="stylesheet" href="../assets/css/responsive.css" /> */}
        {/* Scrollbar Custom CSS  */}
        {/* <link
          rel="stylesheet"
          href="../assets/css/jquery.mCustomScrollbar.min.css"
        ></link> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css"
          media="screen"
        />
      </Helmet>
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

export default App;

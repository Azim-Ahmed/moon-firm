import { Helmet } from "react-helmet";
import Home from "../pages/Home";

const App = () => {
  return (
    <div>
      <Helmet>
        <title>Moon Firm | Home</title>
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
      <Home />
    </div>
  );
};

export default App;

import logo from "../../assets/images/logo.png";
import lockIcon from "../../assets/icon/loc.png";
import iconThree from "../../assets/icon/3.png";
import emailIcon from "../../assets/icon/email.png";
import callIcon from "../../assets/icon/call.png";

const Footer = () => {
  return (
    <footer>
      <div class="footer top_layer">
        <div class="container">
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div class="address">
                <a href="index.html">
                  <img src={logo} alt="logo" />
                </a>
                <p>
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et sdolor sit amet, consectetur
                  adipiscing elit,
                </p>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div class="address">
                <h3>Quick links</h3>
                <ul class="Links_footer">
                  <li>
                    <img src={iconThree} alt="#" /> <a href="#/"> Join Us</a>
                  </li>
                  <li>
                    <img src={iconThree} alt="#" /> <a href="#/">Maintenance</a>
                  </li>
                  <li>
                    <img src={iconThree} alt="#" />
                    <a href="#/">Language Packs</a>
                  </li>
                  <li>
                    <img src={iconThree} alt="#" /> <a href="#/">LearnPress</a>
                  </li>
                  <li>
                    <img src={iconThree} alt="#" />
                    <a href="#/">Release Status</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div class="address">
                <h3>Subcribe email</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
                <input
                  class="form-control"
                  placeholder="Your Email"
                  type="type"
                  name="Your Email"
                />
                <button class="submit-btn">Submit</button>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div class="address">
                <h3>Contact Us</h3>

                <ul class="loca">
                  <li>
                    <a href="#/">
                      <img src={lockIcon} alt="#" />
                    </a>
                    London 145
                    <br />
                    United Kingdom
                  </li>
                  <li>
                    <a href="#/">
                      <img src={emailIcon} alt="#" />
                    </a>
                    demo@gmail.com
                  </li>
                  <li>
                    <a href="#/">
                      <img src={callIcon} alt="#" />
                    </a>
                    +12586954775
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="copyright">
        <div class="container">
          <p>
            © {new Date().getFullYear()} All Rights Reserved. Design By
            <a href="https://azimuahamed.netlify.app/"> Azim Uddin Ahamed</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

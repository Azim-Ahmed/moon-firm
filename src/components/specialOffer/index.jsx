import offer1 from "../../assets/images/offer1.png";
import offer2 from "../../assets/images/offer2.png";
import offer3 from "../../assets/images/offer3.png";

const SpecialOffer = () => {
  return (
    <div class="offer">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="title">
              <h2>
                Special <br /> <strong class="black"> Offers</strong>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div class="offer-bg">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div class="offer_box">
                <h3>Agriculture Products</h3>
                <figure>
                  <img src={offer1} alt="img" />
                </figure>
                <p>
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin_ttt">
              <div class="offer_box">
                <h3>Fresh Vegatables</h3>
                <figure>
                  <img src={offer2} alt="img" />
                </figure>
                <p>
                  consectetur adipiscing elit, sed do eiusmodmpor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin-lkk">
              <div class="offer_box">
                <h3>Farm Factory</h3>
                <figure>
                  <img src={offer3} alt="img" />
                </figure>
                <p>
                  consectetur adipiscing elit, sed do eiusmodmpor incididunt ut
                  labore et dolore magna
                </p>
              </div>
            </div>

            <div class="col-md-12">
              <a class="read-more">See More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;

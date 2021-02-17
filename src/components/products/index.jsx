import productImageOne from "../../assets/images/product_img1.jpg";
import productImageTwo from "../../assets/images/product_img2.jpg";
import productImageThree from "../../assets/images/product_img3.jpg";
import productImageFour from "../../assets/images/product_img4.jpg";
import productImageFive from "../../assets/images/product_img5.jpg";

const MoonProducts = () => {
  return (
    <div id="product" class="product">
      <div class="container">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title">
                <h2>
                  Moon <strong class="black"> products</strong>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div class="product_box">
                  <figure>
                    <img src={productImageOne} alt="#" />
                    <h3>Fresh Apple</h3>
                  </figure>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div class="product_box">
                  <figure>
                    <img src={productImageTwo} alt="#" />
                    <h3>Fresh Aalu</h3>
                  </figure>
                </div>
              </div>
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div class="product_box">
                  <figure>
                    <img src={productImageThree} alt="#" />
                    <h3>Rice Field</h3>
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div class="product_box">
                  <figure>
                    <img src={productImageFour} alt="#" />
                    <h3>Vegetables</h3>
                  </figure>
                </div>
              </div>
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div class="product_box">
                  <figure>
                    <img src={productImageFive} alt="#" />
                    <h3>Field Wheat</h3>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoonProducts;

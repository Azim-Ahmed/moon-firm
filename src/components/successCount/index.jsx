import successOne from "../../assets/images/1.png";
import successTwo from "../../assets/images/2.png";
import successThree from "../../assets/images/3.png";
import successFour from "../../assets/images/4.png";

const SuccessCount = () => {
  return (
    <div class="for_box_bg">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-lg-3 col-md-3 co-sm-l2">
            <div class="for_box">
              <i>
                <img src={successOne} alt="#" />
              </i>
              <span>1996923</span>
              <h3>Harvesta</h3>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3 co-sm-l2">
            <div class="for_box">
              <i>
                <img src={successTwo} alt="#" />
              </i>
              <span>8000</span>
              <h3>Units of Cattle</h3>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3 co-sm-l2">
            <div class="for_box">
              <i>
                <img src={successThree} alt="#" />
              </i>
              <span>60002</span>
              <h3>Farm</h3>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3 co-sm-l2">
            <div class="for_box">
              <i>
                <img src={successFour} alt="#" />
              </i>
              <span>1623</span>
              <h3>Units of Technic</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessCount;

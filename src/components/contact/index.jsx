import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const containerStyle = {
  width: "100%",
  height: "100%",
  minHeight: "670px",
};
const location = {
  lat: 23.733348,
  lng: 90.406707,
};

const onLoad = (marker) => {
  console.log("marker: ", marker);
};
const Contact = () => {
  return (
    <div>
      <div id="contact" class="contact">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title">
                <h2>
                  Get In <br /> <strong class="black"> Touch</strong>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid padddd">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 padddd">
          <div class="map_section">
            <div class="container">
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <form class="main_form">
                    <div class="row">
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <input
                          class="form-control"
                          placeholder="Name"
                          type="text"
                          required
                          name="Name"
                        />
                      </div>
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <input
                          class="form-control"
                          placeholder="Email"
                          type="text"
                          required
                          name="Email"
                        />
                      </div>
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <input
                          class="form-control"
                          placeholder="Phone"
                          type="text"
                          required
                          name="Phone"
                        />
                      </div>
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <textarea
                          class="textarea"
                          placeholder="Message"
                          type="text"
                          name="Message"
                          required
                        ></textarea>
                      </div>
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <button class="send">Send</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div>
              <LoadScript googleMapsApiKey="AIzaSyA8eaHt9Dh5H57Zh0xVTqxVdBFCvFMqFjQ">
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={location}
                  zoom={16}
                >
                  <Marker onLoad={onLoad} position={location} />
                </GoogleMap>
              </LoadScript>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

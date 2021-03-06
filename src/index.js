import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./responsive.css";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();

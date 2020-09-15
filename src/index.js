import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <App />
      <div>
        <a href="https://github.com/Ju640/weather-react" target="_blank">
          Open-Source code
        </a>
        , by{" "}
        <a
          href="https://www.linkedin.com/in/judy-dionne-7a5093107/"
          target="_blank"
        >
          Judy Dionne
        </a>{" "}
        👩‍💻
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

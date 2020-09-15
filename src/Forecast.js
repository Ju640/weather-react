import React from "react";
import "./Forecast.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          Fri
          <div>
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="goldenrod"
              size={50}
              animate={true}
            />
            <div>20°C</div>
          </div>
        </div>
        <div className="col-2">
          Sat
          <ReactAnimatedWeather
            icon="CLOUDY"
            color="goldenrod"
            size={50}
            animate={true}
          />
          <div>16°C</div>{" "}
        </div>
        <div className="col-2">
          Sun
          <ReactAnimatedWeather
            icon="RAIN"
            color="goldenrod"
            size={50}
            animate={true}
          />
          <div>10°C</div>
        </div>
        <div className="col-2">
          Mon
          <ReactAnimatedWeather
            icon="WIND"
            color="goldenrod"
            size={50}
            animate={true}
          />
          <div>22°C</div>{" "}
        </div>
        <div className="col-2">
          Tues
          <ReactAnimatedWeather
            icon="FOG"
            color="goldenrod"
            size={50}
            animate={true}
          />
          <div>15°C</div>{" "}
        </div>
      </div>
    </div>
  );
}

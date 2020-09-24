import React from "react";
import "./App.css";
import Forecast from "./Forecast.js";
import ReactAnimatedWeather from "react-animated-weather";

export default function App() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    icon: "CLOUDY",
    humidity: 80,
    wind: 10,
  };

  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-6">
            <div className="currentTime">11:46</div>
          </div>
          <div className="col-6">
            <input
              type="search"
              placeholder="Search City..."
              className="searchCity"
              autoComplete="off"
            />{" "}
            <button class="searchButton">
              <i class="fas fa-search shadow-sm"></i>
            </button>
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <ReactAnimatedWeather
              icon={weatherData.icon}
              color="goldenrod"
              size={50}
              animate={true}
            />
            <div className="float-left">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
        <Forecast icon={weatherData.imgUrl} />
      </div>
    </div>
  );
}

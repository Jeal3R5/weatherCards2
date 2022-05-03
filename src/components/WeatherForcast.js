import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";

const WeatherForcast = (props) => {
  return (
    <div className="weather">
      <WeatherIcon img={props.img} />
      <p>
        <span>conditions</span>
      </p>
      <p>
        <span>time</span>
      </p>
      <WeatherData conditions={props.conditions} time={props.time} />
    </div>
  );
};

export default WeatherForcast;

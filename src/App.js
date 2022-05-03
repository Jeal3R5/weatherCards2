import React from "react";
import "./styles.css";
import weatherData from "./weatherData";
import WeatherForcast from "./components/WeatherForcast";

export default function App() {
  const allWeatherData = weatherData.map((ele, index) => {
    return (
      <WeatherForcast
        img={ele.img}
        conditions={ele.conditions}
        time={ele.time}
        key={index}
      />
    );
  });
  return (
    <div className="App">
      <section>{allWeatherData}</section>
    </div>
  );
}

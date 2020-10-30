import React, { useState } from "react";
import axios from "axios";


export default function App(props) {
  let [city, setCity] = useState(null);
  let [tempInfo, setTempInfo] = useState(false);
  let [weather, setWeather] = useState({});

  function showTemp(response) {
    setTempInfo(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleChange(event) {
    event.preventDefault();
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemp);
  }

  let form = (
    <div>
      <form onSubmit={handleChange}>
        <input type="text" placeholder="Type a City" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );

  if (tempInfo) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
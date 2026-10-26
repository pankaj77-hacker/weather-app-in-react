import "./Weather.css";
import { useState } from "react";

function Weather() {
  const apiKey = "025098e046370da3ed4a4c498313eb98";

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const searchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeather(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter your city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={searchWeather}>Search</button>

      {weather && weather.main && (
        <>
             <h2>📍 City: {weather.name}</h2>
    <h3>🌡️ Temperature: {weather.main.temp}°C</h3>
    <p>💧 Humidity: {weather.main.humidity}%</p>
    <p>🌤️ Weather: {weather.weather[0].description}</p>
    <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
        </>
      )}
    </div>
  );
}

export default Weather;

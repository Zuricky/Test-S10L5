import React, { useState } from "react";
import { Search, ThermometerHalf, Wind, DropletFill } from "react-bootstrap-icons";
import Details from "./Details";

function Weather() {
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = "8a8b79bfc5281a0848b4c7ae760dd103";

  const fetchWeatherData = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setCurrentWeather(null);
    setCoords(null);

    try {
      const geoResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`);
      if (!geoResponse.ok) {
        throw new Error("Error retrieving coordinates");
      }
      const geoData = await geoResponse.json();
      console.log("GeoData:", geoData);
      if (geoData.length === 0) {
        throw new Error("No city found. Try another city name.");
      }
      const { lat, lon } = geoData[0];
      setCoords({ lat, lon });

      const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
      if (!weatherResponse.ok) {
        throw new Error("Error retrieving weather data");
      }
      const weatherData = await weatherResponse.json();
      console.log("Current Weather Data:", weatherData);
      setCurrentWeather(weatherData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Search the weather forecast</h1>
      <form onSubmit={fetchWeatherData} className="mb-4">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="City Name (ex. Tokyo)" value={city} onChange={(e) => setCity(e.target.value)} required />
          <button className="btn btn-primary" type="submit">
            <Search size={25} color="white" />
          </button>
        </div>
      </form>

      {loading && <div className="text-center">Loading...</div>}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {currentWeather && (
        <div className="card mb-4">
          <div className="card-body text-center">
            <h2 className="card-title">{currentWeather.name}</h2>
            <img src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} alt="Weather icon" />
            <p className="card-text text-capitalize">{currentWeather.weather[0].description}</p>
            <p className="card-text">
              <ThermometerHalf size={30} className="text-danger" /> {currentWeather.main.temp}°C
            </p>
            <p className="card-text">
              <DropletFill size={23} className="text-info" /> {currentWeather.main.humidity} %
            </p>
            <p className="card-text">
              <Wind size={25} /> {currentWeather.wind.speed} m/s
            </p>
          </div>
        </div>
      )}

      {coords && <Details coords={coords} apiKey={apiKey} />}
    </div>
  );
}

export default Weather;

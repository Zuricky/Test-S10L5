import React, { useState, useEffect } from "react";

function Details({ coords, apiKey }) {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!coords) return;

    const fetchForecast = async () => {
      setLoading(true);
      setError(null);
      try {
        const { lat, lon } = coords;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
        if (!response.ok) {
          throw new Error("Error retrieving forecast data");
        }
        const data = await response.json();
        setForecast(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [coords, apiKey]);

  return (
    <div>
      <h2 className="text-center mb-4">Forecast for the next days</h2>
      {loading && <div className="text-center">Loading forecast...</div>}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      {forecast && (
        <div className="row">
          {forecast.list.map((item, index) => (
            <div className="col-12 col-md-4 mb-3" key={index}>
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">
                    {new Date(item.dt_txt).toLocaleDateString("it-IT", {
                      weekday: "long",
                      day: "numeric",
                      month: "short",
                    })}
                  </h5>
                  <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="Weather icon" />
                  <p className="card-text">{item.main.temp}°C</p>
                  <p className="card-text text-capitalize">{item.weather[0].description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Details;

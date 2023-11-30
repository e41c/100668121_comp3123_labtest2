// WeatherInfo.js
import React from 'react';

const WeatherInfo = ({ data }) => {
  const { name, weather, main, wind } = data;

  return (
    <div>
      <h2>{name}</h2>
      <p>{weather[0].description}</p>
      <div>
        <strong>Temperature:</strong> {Math.round(main.temp - 273.15)}°C
      </div>
      <div>
        <strong>Humidity:</strong> {main.humidity}%
      </div>
      <div>
        <strong>Wind Speed:</strong> {wind.speed} m/s
      </div>
      {/* Add more information as needed */}
    </div>
  );
};

export default WeatherInfo;

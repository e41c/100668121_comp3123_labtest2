// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherIcon from './WeatherIcon';
import WeatherInfo from './WeatherInfo';

const App = () => {
  const [city, setCity] = useState('Toronto');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '14000a33cfe9e730009dfd9d3a2fef4f'; // Replace with your actual API key
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data', error);
      }
    };

    fetchData();
  }, [city]);

  return (
    <div>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={() => setCity(city)}>Search</button>
      {weatherData && (
        <div>
          <WeatherIcon iconCode={weatherData.weather[0].icon} />
          <WeatherInfo data={weatherData} />
        </div>
      )}
    </div>
  );
};

export default App;

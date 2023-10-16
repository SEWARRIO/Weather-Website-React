                

// Weather.tsx

import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css'; // Import the CSS file
import '../App.css';

interface Coord {
  lon: number;
  lat: number;
}

interface Weather {
  description: string;
  icon: string; // Add icon property to Weather interface
}

interface Main {
  temp: number;
}

interface Wind {
  speed: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  country: string;
}

interface WeatherData {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  name?: string; // Make the 'name' property optional
}

const Weather: React.FC = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:3000/weather?city=${city}`);
      console.log('Weather API response:', response.data);

      // Check if the required properties are present in the response
      if (!response.data.weatherData || !response.data.weatherData.name || !response.data.weatherData.sys) {
        throw new Error('Invalid API response');
      }

      // Set weather data when successful
      setWeatherData({
        ...response.data.weatherData,
        main: {
          ...response.data.weatherData.main,
          temp: response.data.weatherData.main?.temp,
        },
      });
      setError(null);
    } catch (error) {
      console.error('Weather API error:', error);
      setWeatherData(null);
      setError('Error fetching weather data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <input type="text" placeholder="Enter City" value={city} onChange={(e) => setCity(e.target.value)} className="search" />
      <button onClick={handleSearch} disabled={loading}>
        Search
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="bold">Error: {error}</p>}

      {weatherData && weatherData.name && (
        <div className="divs">
           <div className="image">
          {weatherData.weather[0]?.icon && (
            <img className="image"
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="Weather Icon"
            />
          )}
          </div>
         <div className="weatherDetails"> <h3 className="myColor">{weatherData.name}, {weatherData.sys?.country}</h3>
          <p className="bold"> {weatherData.weather[0]?.description}</p>
          {/* Display temperature in Celsius */}
          <p className="bold">{weatherData.wind?.speed} m/s</p>
          <p className="temp"> {Math.round((weatherData.main?.temp)-273)}°C</p>
          {/* Display image based on the icon */}</div>
         
        </div>
      )}
    </div>
  );
};

export default Weather;


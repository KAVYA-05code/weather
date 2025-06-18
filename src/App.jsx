import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";

const API_KEY = "fc334f3fe9dba5bb7a2a62b62a753f85";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
      setError("");
    } catch (err) {
      setError("City not found. Please try again.");
      setWeatherData(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] flex items-center justify-center p-6">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8 text-blue-800">
          Weather Report 🌤️
        </h1>

        <div className="flex gap-4 mb-6">
          <input
            type="text"
            value={city}
            placeholder="Enter city name"
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 px-5 py-3 rounded-xl border border-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={fetchWeather}
            className="bg-yellow-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold transition"
          >
            Search
          </button>
        </div>

        {error && <p className="text-red-600 text-sm mb-6 text-center">{error}</p>}

        {weatherData && <WeatherCard data={weatherData} />}
      </div>
    </div>

  );
};

export default App;

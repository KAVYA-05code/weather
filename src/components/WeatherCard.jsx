import React from "react";

const WeatherCard = ({ data }) => {
  return (
    <div className="text-center bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>
      <p className="text-gray-600 text-sm">{data.weather[0].description}</p>
      <div className="mt-4">
        <p className="text-4xl font-bold text-gray-800">{Math.round(data.main.temp)}°C</p>
        <p className="text-sm text-gray-600">Feels like {Math.round(data.main.feels_like)}°C</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-700">
        <div>
          <p className="font-semibold">Humidity</p>
          <p>{data.main.humidity}%</p>
        </div>
        <div>
          <p className="font-semibold">Wind</p>
          <p>{data.wind.speed} m/s</p>
        </div>
        <div>
          <p className="font-semibold">Pressure</p>
          <p>{data.main.pressure} hPa</p>
        </div>
        <div>
          <p className="font-semibold">Min/Max</p>
          <p>{Math.round(data.main.temp_min)}°C / {Math.round(data.main.temp_max)}°C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

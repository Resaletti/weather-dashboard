import { useState } from "react";
import { getWeatherByCity, getForecast } from "../services/weatherService";

export const useWeather = () => {
  const [data, setData] = useState(null);
  const [forecast, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError("");

      const weather = await getWeatherByCity(city);
      const forecastData = await getForecast(city);

      setData(weather);
      setForecastData(forecastData);

      localStorage.setItem("lastCity", city);
    } catch (err) {
      setError(err?.message || "City not found");
    } finally {
      setLoading(false);
    }
  };

  return { data, forecast, loading, error, fetchWeather };
};
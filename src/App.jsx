import { useEffect } from "react";
import { useWeather } from "./hooks/useWeather";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";

export default function App() {
  const { data, forecast, loading, error, fetchWeather } = useWeather();

  useEffect(() => {
    const lastCity = localStorage.getItem("lastCity") || "Orlando";
    fetchWeather(lastCity);
  }, []);

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>

      <SearchBar onSearch={fetchWeather} />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <WeatherCard data={data} />
      <Forecast data={forecast} />
    </div>
  );
}

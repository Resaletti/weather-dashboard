export default function WeatherCard({ data }) {
  if (!data) return null;

  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="card">
      <div className="weather-header">
        <h2>{data.name}</h2>
        <img src={iconUrl} alt={data.weather[0].description} className="weather-icon" />
      </div>
      <p className="temp">{Math.round(data.main.temp)}°C</p>
      <p className="desc">{data.weather[0].description}</p>

      <div className="details">
        <div className="detail-item">
          Feels like {Math.round(data.main.feels_like)}°C
        </div>
        <div className="detail-item">
          Humidity {data.main.humidity}%
        </div>
        <div className="detail-item">
          Wind {Math.round(data.wind?.speed)} m/s
        </div>
      </div>
    </div>
  );
}
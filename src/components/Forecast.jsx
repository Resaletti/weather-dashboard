export default function Forecast({ data }) {
  if (!data) return null;

  // pega 1 previsão por dia (a cada 8 registros ~ 24h)
  const daily = data.list.filter((_, index) => index % 8 === 0);

  return (
    <div className="forecast">
      {daily.map((item, i) => {
        const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;

        return (
          <div key={i} className="forecast-card">
            <p className="forecast-date">
              {new Date(item.dt_txt).toLocaleDateString([], {
                weekday: "short",
                day: "numeric",
                month: "short",
              })}
            </p>
            <img src={iconUrl} alt={item.weather[0].description} className="forecast-icon" />
            <p className="forecast-temp">{Math.round(item.main.temp)}°C</p>
            <p className="forecast-main">{item.weather[0].main}</p>
          </div>
        );
      })}
    </div>
  );
}
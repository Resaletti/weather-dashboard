const getApiKey = () => {
  const key = import.meta.env.VITE_OPENWEATHER_API_KEY;
  if (!key) {
    throw new Error(
      "Missing OpenWeather API key. Create a .env file and set VITE_OPENWEATHER_API_KEY=your_key"
    );
  }
  return key;
};

const buildUrl = (path, city) => {
  const encodedCity = encodeURIComponent(city.trim());
  const apiKey = getApiKey();
  return `https://api.openweathermap.org/data/2.5/${path}?q=${encodedCity}&appid=${apiKey}&units=metric`;
};

export const getWeatherByCity = async (city) => {
  const res = await fetch(buildUrl("weather", city));

  if (!res.ok) {
    const payload = await res.json().catch(() => ({}));
    const message = payload.message || "City not found";
    throw new Error(message);
  }

  return res.json();
};

export const getForecast = async (city) => {
  const res = await fetch(buildUrl("forecast", city));

  if (!res.ok) {
    const payload = await res.json().catch(() => ({}));
    const message = payload.message || "Forecast not found";
    throw new Error(message);
  }

  return res.json();
};
import axios from "axios";

const geolocationUrl = "https://geolocation-db.com";
const openweathermapUrl = "https://api.openweathermap.org";

const getLocation = async () => {
  return await axios.post(
    `${geolocationUrl}/json/${process.env.REACT_APP_GEOLOCATION_API_KEY}`
  );
};

const getWeather = async (city) => {
  return await axios.post(
    `${openweathermapUrl}/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
  );
};

export { getLocation, getWeather };

import axios from "axios";
const baseURL = import.meta.env.VITE_WEATHER_KEY;

export const CloudRequest = name => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${baseURL}&units=metric`)
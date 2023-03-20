import axios from "axios";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";

// const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";

const getWeather = async (lat, lon) => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error("API key not found, type -t [API_KEY]");
    }
    const { data } = await axios(
        "https://api.openweathermap.org/data/2.5/weather",
        {
            params: {
                lat: lat,
                lon: lon,
                appid: token,
                lang: "ru",
                units: "metric",
            },
        }
    );
    return data;
};

export { getWeather };

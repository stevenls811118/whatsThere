// https://api.open-meteo.com/v1/forecast?daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto

import axios from "axios";

const URL = "https://api.open-meteo.com/v1/forecast?daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timeformat=unixtime&timezone=auto";

export const getWeather = (lat, lon) => {
  return axios.get(URL, {
    params: {
      latitude: lat,
      longitude: lon,
    },
  }).then(({data}) => {
    return {
      current: parseCurrentWeather(data),
      daily: parseDailyWeather(data),
    }
  })
};

const parseCurrentWeather = ({current_weather}) => {
  const {
    temperature: currentTemp, 
    weathercode: iconCode
  } = current_weather;

  return {
    currentTemp: Math.round(currentTemp),
    iconCode,
  }
};

const parseDailyWeather = ({daily}) => {
  return daily.time.map((time, i) => {
    return {
      timestamp: time * 1000,
      iconCode: daily.weathercode[i],
      maxTemp: Math.round(daily.temperature_2m_max[i]),
      minTemp: Math.round(daily.temperature_2m_min[i]),
    }
  })
};
import axios from "axios";

const API_key = process.env.REACT_APP_X_Rapid_API_Key;
const URL =
'https://visual-crossing-weather.p.rapidapi.com/forecast';

export const getWeather = async () => {
  const cord = '51.17773369863653, -114.10285881591027';
  try {
    const data = await axios.get(URL, {
      params: {
        aggregateHours: '1',
        location: cord,
        contentType: 'json',
        unitGroup: 'metric',
        shortColumnNames: '0'
      },
      headers: {
        "X-RapidAPI-Key": API_key,
        "X-RapidAPI-Host": 'visual-crossing-weather.p.rapidapi.com',
      },
    });
    console.log(data.data.locations[cord].values);
    return data.data.locations[cord].values;
  } catch (error) {
    console.log(error);
  }
};

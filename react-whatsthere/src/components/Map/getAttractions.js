import axios from "axios";

const API_key = process.env.REACT_APP_X_Rapid_API_Key;
const URL = 'https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary';

const options = {

  params: {
    tr_longitude: '-113.9828387',
    tr_latitude: '51.2476578',
    bl_longitude: '-114.2228387',
    bl_latitude: '51.1076578',
    min_rating: '4.2',
    limit: '20',
  },
  headers: {
    'X-RapidAPI-Key': API_key,
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

export const getAttractions = async () => {
  try {
    const { data: {data} } = await axios.get(URL, options);
    const result = data.filter(i => i.ad_position === undefined);
    return result;
  } catch (error) {
    console.log(error);
  }
}


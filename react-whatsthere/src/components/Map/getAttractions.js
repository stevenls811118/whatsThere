import axios from "axios";

<<<<<<< HEAD
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
    'X-RapidAPI-Key': process.env.REACT_APP_X_Rapid_API_Key,
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

export const getAttractions = async () => {
=======
const API_key = process.env.REACT_APP_X_Rapid_API_Key;
const URL =
  "https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary";

export const getAttractions = async (ne, sw) => {
>>>>>>> origin/attractions-around
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        bl_latitude: sw.lat,
        min_rating: "4.2",
        limit: "30",
      },
      headers: {
        "X-RapidAPI-Key": API_key,
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    const noAdd = data.filter((i) => i.ad_position === undefined);
    const result = noAdd.filter((i) => i.rating >= 4.2);
    return result;
  } catch (error) {
    console.log(error);
  }
};

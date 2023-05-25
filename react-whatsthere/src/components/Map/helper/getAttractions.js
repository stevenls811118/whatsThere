import axios from "axios";

const API_key = process.env.REACT_APP_X_Rapid_API_Key;
const URL =
  "https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary";

export const getAttractions = async (ne, sw) => {
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
        limit: "15",
      },
      headers: {
        "X-RapidAPI-Key": API_key,
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    const noAdd = data.filter((i) => i.ad_position === undefined);
    const result = noAdd.filter((i) => i.rating >= 4);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

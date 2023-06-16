import React, { useEffect } from "react";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getWeather } from "./helper/getWeather";
import { displayDate } from "./helper/displayDate";
import { weatherIcon } from "./helper/weatherIcon";

export default function RenderWeather({ attraction, weather, setWeather }) {
  
  useEffect(() => {
    getWeather(attraction.lat, attraction.lon)
      .then((res) => {
        setWeather(res);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [attraction]);
  
  return (
    <div>
      {Object.keys(weather).length !== 0 && 
      <div>
        <div className="mb-1">
          <span className="font-semibold text-sm mr-2">Current weather:</span>{" "}
          {weatherIcon(weather.current.iconCode)}
          <span className="ml-2"> {weather.current.currentTemp} </span>&deg;C
        </div>
        <div className="mb-1">
          <span className="font-semibold text-sm mr-2">Forecast:</span>{" "}
          <div className="flex flex-row justify-between">
            {weather.daily.map((w, i) => (
                <div className="flex flex-col items-center scale-90" key={i}>
                  {weatherIcon(w.iconCode)}
                  <span> {i === 0 ? "Today" : displayDate(w.timestamp)} </span>
                  <span> {w.minTemp} ~ {w.maxTemp} &deg;C</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      }
    </div>    
  );
}

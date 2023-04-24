import React, { useEffect, useState } from "react";
import { compare } from "./helper/compare";

export default function Alarm({ items }) {
  
  const [sortTimeArray, setSortTimeArray] = useState([]);
  let array = [];
  let sortArray = [];

  const handleAlarm = (sortTimeArray) => {
    const timeDif = sortTimeArray[0].startTime - Date.now()
    // console.log(timeDif);
    const [nextComing] = items.filter((i) => i.id === sortTimeArray[0].id);
    console.log(nextComing);
    if (timeDif < 1000 * 60 * 60) {
      const alarmMessage = `You need to get ready, you are going to visit ${nextComing.name} in an hour!`
      console.log(alarmMessage);
    }
  }
  
  useEffect(() => {
    console.log(items)
    if (items.length !== 0) {
      items.forEach(i => {
        const startTime = new Date(i.startTime).getTime();
        const id = i.id;
        // console.log(startTime);
        array.push({startTime, id});
        // console.log(array);
      });     

      // console.log(array);
      sortArray = array.sort(compare)
      // console.log(sortArray);
      setSortTimeArray(sortArray);
    }
  }, [items])

  useEffect(() => {
    clearInterval()
    setInterval(() => {
      if (sortTimeArray.length !== 0) {
        handleAlarm(sortTimeArray)
      }
    }, 1000 * 20);  
  }, [sortTimeArray]);

  return (
    <div>
      
    </div>
  );
}
import React, { useEffect, useState } from "react";
import { compare } from "./helper/compare";
import Swal from "sweetalert2";
import axios from "axios";

export default function Alert({ items, setItems, selectedList }) {
  const [sortTimeArray, setSortTimeArray] = useState([]);
  let array = [];
  let sortArray = [];

  const handleAlert = (sortTimeArray) => {
    const oneHour = 1000 * 60 * 60;
    let results = [];
    let alertMessage = "";
    let TD = 1000 * 60 * 70;

    if (sortTimeArray.length !== 0) {
      const nextComingitems = sortTimeArray.filter(
        (i) => i.startTime - Date.now() <= oneHour
      );

      for (let i of nextComingitems) {
        let [filterItem] = items.filter((j) => j.id === i.id);
        results.push(filterItem);
      }

      results.forEach((i) => {
        const ST = new Date(i.startTime).getTime();
        TD = ST - Date.now();
        alertMessage += `You are going to visit: ${i.name} in ${Math.ceil(
          TD / 60000
        )} minutes! <br/>`;
      });

      let timeDif = sortTimeArray[0].startTime - Date.now();
      if (timeDif < oneHour && timeDif > 0) {
        Swal.fire({
          html: alertMessage,
          width: "60vw",
          timer: 5000,
          imageUrl:
            "http://hopeedu.com.pk/wp-content/uploads/2016/06/Get-Ready.png",
          imageWidth: "40vw",
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          },
          showCloseButton: true,
        });
      }
      if (timeDif < 0) {
        if (sortTimeArray.length > 0) {
          axios
            .delete(`/api/attractions/${sortTimeArray[0].id}`)
            .then((res) =>
              axios.put("/api/attractions", { id: selectedList.id })
            )
            .then((res) => setItems(res.data))
            .catch((error) => {
              console.log(error);
            });
        }
      }
    }
  };

  useEffect(() => {
    console.log(items);
    if (items.length !== 0) {
      items.forEach((i) => {
        const startTime = new Date(i.startTime).getTime();
        const id = i.id;
        array.push({ startTime, id });
      });
      sortArray = array.sort(compare);
      setSortTimeArray(sortArray);
    } else {
      setSortTimeArray([]);
    }
  }, [items]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleAlert(sortTimeArray);
    }, 30000);
    return () => clearInterval(interval);
  }, [sortTimeArray]);

  return <div></div>;
}

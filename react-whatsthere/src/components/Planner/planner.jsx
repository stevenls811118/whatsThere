import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
// import { id } from "date-fns/locale";

export default function Planner({ items, setItems, selectedList }) {
  const [editingIndex, setEditingIndex] = useState(-1);
  const [newTitle, setNewTitle] = useState("");
  const [newTime, setNewTime] = useState("");


  const handleSaveClick = (index, newTitle, newTime) => {
    const newItems = [...items];
    newItems[index] = { title: newTitle, time: newTime };
    setItems(newItems);
    setEditingIndex(-1);
  };

  const handleCancelClick = () => {
    setEditingIndex(-1);
    setNewTitle("");
    setNewTime("12:00pm");
  };

  const handleDeleteClick = (id) => {
    axios
      .delete(`/api/attractions/${id}`)
      .then((res) => axios.put("/api/attractions", {id: selectedList.id}))
      .then((res) => setItems(res.data))
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNewTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleNewTimeChange = (event) => {
    setNewTime(event.target.value);
  };

  return (
    <div className="">
      <div className="bg-tertiary text-white text-lg flex justify-between px-2">
        <div>Locations to Visit</div>
        <div>Edit/Delete</div>
      </div>
      <ul className="h-[35vh] overflow-y-auto">
        {items.map((item, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <div>
                <input
                  type="text"
                  value={newTitle}
                  onChange={handleNewTitleChange}
                />
                <input
                  type="time"
                  value={newTime}
                  onChange={handleNewTimeChange}
                />
                <button
                  onClick={() => handleSaveClick(index, newTitle, newTime)}
                >
                  Save
                </button>
                <button onClick={handleCancelClick}>Cancel</button>
              </div>
            ) : (
              <div className="bg-secondary flex justify-between">
                <div className="text-white px-2 py-2">
                  <div className="flex justify-between text-xl font-semibold">
                    <span>{item.name}</span>
                  </div>
                  <div className="text-m">
                    <span>{item.address}</span>
                  </div>
                  <div className="text-m">
                    <span>{item.startTime}</span>
                  </div>
                  <div className="text-">
                    <span>{item.endTime}</span>
                  </div>
                </div>
                <div className="space-x-4 px-4 py-2">
                  <button onClick={() => handleDeleteClick(item.id)}>
                    <FontAwesomeIcon icon={faTrash} size="lg" />
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

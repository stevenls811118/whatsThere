import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
// import { id } from "date-fns/locale";

const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};

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
      .then((res) => axios.put("/api/attractions", { id: selectedList.id }))
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
    <div>
      <div className="bg-tertiary/80 text-black text-lg flex justify-center px-2 font-bold ">
        <div>Attractions to Visit</div>
        <div>

        </div>
      </div>
      <ul className="h-[60vh] overflow-y-auto">
        {items.map((item, index) => (
          <li key={index} className="rounded-b-md">
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
                <div className=" flex justify-between shadow-md shadow-black rounded-b-md bg-secondary/80">
                  <div className="text-black p-2 w-[85%] border">
                    <div className="flex justify-between text-lg font-semibold underline">
                    <span>{item.name}</span>
                  </div>
                  <div className="text-m">
                    <span>
                      <strong>Address:</strong> {item.address.split(",")[0]}
                    </span>
                  </div>
                  <div className="text-m">
                    <span>
                      <strong>City:</strong> {item.city}
                    </span>
                  </div>
                  <div className="text-m">
                    <span>
                      {" "}
                      <strong>Visiting:</strong> {item.startTime} to{" "}
                      {item.endTime}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-around w-[15%] border">
                  <button
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps/search/?api=1&query=${item.address}`,
                        "_blank"
                      )
                    }
                  >
                    <FontAwesomeIcon icon={faMapLocationDot} size="lg" />
                  </button>
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

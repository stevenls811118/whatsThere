import React, { useEffect, useState } from "react";
import DatePicker from "../Date-Picker/Date-Picker";

export default function Adding({ attraction }) {
  console.log(attraction);
  const [newTitle, setNewTitle] = useState("");
  const [newStartTime, setNewStartTime] = useState("");
  const [newEndTime, setNewEndTime] = useState("");
  useEffect(() => {
    setNewTitle(attraction.name);
  }, [attraction]);
  const handleNewTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleNewStartTimeChange = (event) => {
    setNewStartTime(event.target.value);
  };

  const handleNewEndTimeChange = (event) => {
    setNewEndTime(event.target.value)
  };

  const handleNewSaveClick = () => {
    setNewTitle("");
    setNewStartTime("");
    setNewEndTime("");
  };

  const handleCancelClick = () => {
    setNewTitle("");
    setNewStartTime("");
    setNewEndTime("");
  };

  return (
    <div className="border-double border-2 border-white flex flex-col justify-between text-xl space-y-2 rounded-xl w-96">
      <div className="flex flex-col w-full">
        <div className="border-hidden p-3 pb-2 rounded-md w-full ">
          <input
            type="text"
            value={newTitle}
            onChange={handleNewTitleChange}
            placeholder="Enter new location here"
            className="w-[100%] rounded-lg p-2"
          />
        </div>
        <DatePicker/>
        <div className="border-hidden rounded-md w-full flex">
          <div className="text-center">
            Start Time
            <input type="time" className="rounded-md" value={newStartTime} onChange={handleNewStartTimeChange} required/>
          </div>
          <div className="text-center"> 
            End Time
            <input type="time" className="rounded-md" value={newEndTime} onChange={handleNewEndTimeChange} required/>
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-2 justify-around">
        <div className="boarder-hidden rounded-2xl p-2 font-bold bg-blue-500 w-28 text-center text-white">
          <button onClick={handleNewSaveClick}>Save</button>
        </div>
        <div className="border-double border-2 border-white rounded-2xl p-2 font-bold bg-grey-600 w-28 text-center">
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

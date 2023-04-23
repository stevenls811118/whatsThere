import React, { useEffect, useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Adding({ attraction, setDisplay, setData }) {
  const [date, setDate] = useState(new Date());
  const [newTitle, setNewTitle] = useState("");
  const [newStartTime, setNewStartTime] = useState("");
  const [newEndTime, setNewEndTime] = useState("");

  useEffect(() => {
    
    if (attraction) {
      setNewTitle(attraction.name);
    }
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
    setDisplay("invisible")
    
    const startTime = `${date.toLocaleDateString()}, ${newStartTime}`
    const endTime = `${date.toLocaleDateString()}, ${newEndTime}`
    setData({...attraction, startTime: startTime, endTime: endTime, listId: 1})
  };

  const handleCancelClick = () => {
    setNewTitle("");
    setNewStartTime("");
    setNewEndTime("");
    setDisplay("invisible")
  };

  return (
    <div className="border-double border-2 border-white flex flex-col justify-center text-xl space-y-2 rounded-xl w-96 bg-gray-300 scale-95 ">
      <div className="flex flex-col w-full items-center">
        <div className="border-hidden p-3 pb-2 rounded-md w-full ">
          <input
            type="text"
            value={newTitle}
            onChange={handleNewTitleChange}
            placeholder="Enter new location here"
            className="w-[100%] rounded-lg p-2"
          />
        </div>
        <Calendar onChange={setDate} value={date} className="rounded-xl"/>
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
        <div>
          <button onClick={handleNewSaveClick} className="border-double border-2 border-blue-500 rounded-2xl p-2 font-bold bg-blue-500 w-28 text-center text-white">Save</button>
        </div>
        <div>
          <button onClick={handleCancelClick} className="border-double border-2 border-white rounded-2xl p-2 font-bold bg-grey-600 w-28 text-center">Cancel</button>
        </div>
      </div>
    </div>
  );
}

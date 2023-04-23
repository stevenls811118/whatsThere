import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

export default function AddAttraction({items, setItems}) {

  const [editingIndex, setEditingIndex] = useState(-1);
  const [newTitle, setNewTitle] = useState('');
  const [newTime, setNewTime] = useState('');

  const handleCancelClick = () => {
    setEditingIndex(-1);
    setNewTitle('');
    setNewTime('12:00pm');
  };

  const handleAddClick = () => {
    setEditingIndex(null);
    setNewTitle('');
    setNewTime('12:00pm');
  };

  const handleNewTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleNewTimeChange = (event) => {
    setNewTime(event.target.value);
  };

  const handleNewSaveClick = () => {
    const newItems = [...items, { title: newTitle, time: newTime }];
    setItems(newItems);
    setEditingIndex(-1);
    setNewTitle('');
    setNewTime('12:00pm');
  };

  return (
    <div>
      {editingIndex === null && (
        <div className="flex flex-row justify-between text-xl space-x-2">
          <div className="flex flex-row space-x-2 w-[100%]">
            <div className="border-double border-2 border-black p-2 rounded-md w-[100%]">
              <input type="text" value={newTitle} onChange={handleNewTitleChange} placeholder="Enter new location here" className="w-[100%]" />
            </div>
            <div className="border-double border-2 border-black p-2 rounded-md">
              <input type="time" value={newTime} onChange={handleNewTimeChange} />
            </div>
          </div>
          <div className="flex flex-row space-x-2">
            <div className="border-double border-2 border-black rounded-md p-2 font-bold bg-green-400">
              <button onClick={handleNewSaveClick}>Save</button>
            </div>
            <div className="border-double border-2 border-black rounded-md p-2 font-bold bg-red-600">
              <button onClick={handleCancelClick}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      {editingIndex && (
      <button onClick={handleAddClick} className="bg-gray-400 text-lg font-semibold p-2 ">
        Add Location <FontAwesomeIcon icon={faMapLocationDot} size="lg" />
      </button>
        )}
    </div>
  )
}
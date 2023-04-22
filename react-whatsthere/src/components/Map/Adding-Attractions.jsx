import React, { useState } from 'react';

export default function Adding({attraction}) {

  console.log(attraction.name);
  const [newTitle, setNewTitle] = useState('');
  const [newTime, setNewTime] = useState('');

  const handleNewTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleNewTimeChange = (event) => {
    setNewTime(event.target.value);
  };

  const handleNewSaveClick = () => {  
    setNewTitle('');
    setNewTime('');
  };

  const handleCancelClick = () => {
    setNewTitle('');
    setNewTime('');
  };

  return (
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
  );
};
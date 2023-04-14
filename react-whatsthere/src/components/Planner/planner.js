import React, { useState } from 'react';

function Planner() {
  const [items, setItems] = useState([
    { title: 'Item 1', time: '12:00pm' },
    { title: 'Item 2', time: '12:00pm' },
    { title: 'Item 3', time: '12:00pm' },
  ]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [newTitle, setNewTitle] = useState('');
  const [newTime, setNewTime] = useState('12:00pm');

  const handleEditClick = (index) => {
    setEditingIndex(index);
  };

  const handleSaveClick = (index, newTitle, newTime) => {
    const newItems = [...items];
    newItems[index] = { title: newTitle, time: newTime };
    setItems(newItems);
    setEditingIndex(-1);
  };

  const handleCancelClick = () => {
    setEditingIndex(-1);
    setNewTitle('');
    setNewTime('12:00pm');
  };

  const handleDeleteClick = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
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
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <div>
                <input type="text" value={newTitle} onChange={handleNewTitleChange} />
                <input type="time" value={newTime} onChange={handleNewTimeChange} />
                <button onClick={() => handleSaveClick(index, newTitle, newTime)}>Save</button>
                <button onClick={handleCancelClick}>Cancel</button>
              </div>
            ) : (
              <div>
                <span>{item.title}</span>
                <span>{item.time}</span>
                <button onClick={() => handleEditClick(index)}>Edit</button>
                <button onClick={() => handleDeleteClick(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      {editingIndex === null && (
        <div>
          <input type="text" value={newTitle} onChange={handleNewTitleChange} />
          <input type="time" value={newTime} onChange={handleNewTimeChange} />
          <button onClick={handleNewSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      )}
      {editingIndex === -1 && (
        <button onClick={handleAddClick}>Add Item</button>
      )}
    </div>
  );
}

export default Planner;

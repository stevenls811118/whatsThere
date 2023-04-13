import React, { useState } from 'react';

function Planner() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleEditClick = (index) => {
    setEditingIndex(index);
  };

  const handleSaveClick = (index, newValue) => {
    const newItems = [...items];
    newItems[index] = newValue;
    setItems(newItems);
    setEditingIndex(-1);
  };

  const handleCancelClick = () => {
    setEditingIndex(-1);
  };

  const handleDeleteClick = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div style={{ overflowY: 'scroll', height: '200px' }}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <div>
                <input
                  type="text"
                  defaultValue={item}
                  onBlur={(e) => handleSaveClick(index, e.target.value)}
                />
                <button onClick={() => handleSaveClick(index, document.querySelector(`#item-${index}-input`).value)}>Save</button>
                <button onClick={handleCancelClick}>Cancel</button>
              </div>
            ) : (
              <div>
                <span>{item}</span>
                <button onClick={() => handleEditClick(index)}>Edit</button>
                <button onClick={() => handleDeleteClick(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Planner;

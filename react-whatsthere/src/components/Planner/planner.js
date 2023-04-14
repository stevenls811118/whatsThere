import React, { useState } from 'react';

function Planner() {
  const [items, setItems] = useState([
    { name: 'Item 1', time: '12:00 PM' },
    { name: 'Item 2', time: '12:00 PM' },
    { name: 'Item 3', time: '12:00 PM' },
  ]);
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleEditClick = (index) => {
    setEditingIndex(index);
  };

  const handleSaveClick = (index, newName, newTime) => {
    const newItems = [...items];
    newItems[index] = { name: newName, time: newTime };
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
                  defaultValue={item.name}
                  onBlur={(e) =>
                    handleSaveClick(index, e.target.value, item.time)
                  }
                />
                <input
                  type="time"
                  defaultValue={item.time}
                  onChange={(e) =>
                    handleSaveClick(index, item.name, e.target.value)
                  }
                />
                <button
                  onClick={() =>
                    handleSaveClick(
                      index,
                      document.querySelector(`#item-${index}-input`).value,
                      document.querySelector(`#item-${index}-time`).value
                    )
                  }
                >
                  Save
                </button>
                <button onClick={handleCancelClick}>Cancel</button>
              </div>
            ) : (
              <div>
                <span>{item.name}</span>
                <input
                  type="time"
                  value={item.time}
                  onChange={(e) =>
                    handleSaveClick(index, item.name, e.target.value)
                  }
                  readOnly
                />
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

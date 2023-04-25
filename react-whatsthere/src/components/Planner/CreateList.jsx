import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function CreateList({ userId }) {
  const [name, setName] = useState("");
  const inputRef = useRef(null);
  
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newList = {
      name: name,
      userId: userId,
    };
    axios
      .put(`/api/lists`, newList)
      .then((res) => {
        setName("");
      })
      .catch((error) => console.log(error));
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        List Name:
        <input type="text" value={name} onChange={handleNameChange} ref={inputRef} />
      </label>
      <button type="submit">Create List</button>
    </form>
  );
}
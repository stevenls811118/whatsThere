import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import axios from "axios";

export default function CreateList({ userId, showMenu, SetShowMenu, selectedList, setSelecteList, searchName, setSearchName, lists, setLists }) {
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
      .post(`/api/lists`, newList)
      .then((res) => {
        setName("");
        axios.put("/api/lists", {userId}).then((res) => {
          console.log(res.data);
          setLists(res.data);
        });
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <Dropdown searchable placeHolder={"select a list"} lists={lists} showMenu={showMenu} SetShowMenu={SetShowMenu} selectedList={selectedList} setSelecteList={setSelecteList} searchName={searchName} setSearchName={setSearchName} />
      <div className="flex flex-col bg-tertiary border-2 border-black p-1 text-lg" >
        <form onSubmit={handleFormSubmit} className="flex flex-row justify-around ">
          <label>
            <strong>List Name: </strong>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              ref={inputRef}
              className="rounded-sm"
            />
          </label>
          <button type="submit" className="bg-primary text-white text-sm p-1">Create List</button>
        </form>
      </div>
    </>
  );
}

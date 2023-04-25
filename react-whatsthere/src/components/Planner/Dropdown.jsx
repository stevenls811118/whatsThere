import { useState, useEffect, useRef } from "react";

const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};

export default function Dropdown({ placeHolder, lists, searchable }) {
  const [showMenu, SetShowMenu] = useState();
  const [selectedList, setSelecteList] = useState();
  const [searchName, setSearchName] = useState();

  const searchRef = useRef();

  const getDisplay = () => {
    if (selectedList) {
      return selectedList.name;
    }
    return placeHolder;
  };

  const OnItemClick = (list) => {
    setSelecteList(list);
  };

  //search handlers
  const onSearch = (e) => {
    setSearchName(e.target.value);
  };
  const getOptions = () => {
    if (!searchName) {
      return lists;
    }
    return lists.filter(
      (list) =>
        list.name.toLowerCase().indexOf(searchName.toLowerCase()) >= 0
    );
  };

  useEffect(() => {
    //this useEffect closes the menu when users click anywhere outside of the list
    const handler = () => SetShowMenu(false);
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);

  //this will utilize the previous useEffect to close the dropdown menu
  const handleInputClick = (e) => {
    e.stopPropagation();
    SetShowMenu(!showMenu);
  };

  //this use effect is for the search functionality of the dropdown menu
  useEffect(() => {
    setSearchName("");
    if (showMenu && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showMenu]);

  return (
    <div className="dropdown-container bg-tertiary text-white text-center ">
      <div className="dropdown-input relative">
        <div className="relative">
          <div className="flex items-center">
            <div className="mr-2 font-semibold">Trip Name:</div>
            <div className="dropdown-container-wrapper relative flex-row items-center ">
              <div className="flex flex-row">
                <div
                  onClick={handleInputClick}
                  className="dropdown-selected-value cursor-pointer flex-grow-0 flex-shrink-0"
                >
                  {getDisplay()}
                </div>
                <div className="dropdown-tools ml-2 flex-grow-0 flex-shrink-0">
                  <div className="mr-2">
                    <Icon />
                  </div>
                </div>
              </div>
              {showMenu && (
                <div className="dropdown-menu absolute top-full left-0 w-32">
                  {lists.map((list) => (
                    <div
                      onClick={() => OnItemClick(list)}
                      key={list.name}
                      className="dropdown-item text-black flex items-center justify-center cursor-pointer"
                    >
                      {list.icon && (
                        <div className="mr-2">
                          <list.icon />
                        </div>
                      )}
                      <div>{list.name}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
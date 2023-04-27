import Planner from "./Planner";
import Dropdown from "./Dropdown";
import CreateList from "./CreateList";


export default function UserDash({
  userId,
  showMenu,
  SetShowMenu,
  selectedList,
  setSelecteList,
  searchName,
  setSearchName,
  lists,
  setLists,
  setItems,
 }) {
  return (
    <>
      <CreateList
        userId={userId}
        showMenu={showMenu}
        SetShowMenu={SetShowMenu}
        selectedList={selectedList}
        setSelecteList={setSelecteList}
        searchName={searchName}
        setSearchName={setSearchName}
        lists={lists}
        setLists={setLists}
        setItems={setItems}
      />
      <Planner
        items={items}
        setItems={setItems}
        selectedList={selectedList}
      />
    </>
  )


}
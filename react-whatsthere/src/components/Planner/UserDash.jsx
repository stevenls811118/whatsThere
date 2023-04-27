import Planner from "./Planner";
import CreateList from "./CreateList";


export default function UserDash({
  userId,
  items,
  setItems,
  lists,
  setLists,
  showMenu,
  SetShowMenu,
  selectedList,
  setSelecteList,
  searchName,
  setSearchName,
 }) {
  return (
    <>
      <div className="px-5">
        <div>
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
        </div>
      </div>
    </>
  )
}
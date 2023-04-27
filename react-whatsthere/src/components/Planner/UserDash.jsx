import Planner from "./Planner";
import CreateList from "./CreateList";
import Header from "../Header/Header";


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
      <div className="z-20" >
        <div className="flex flex-col justify-center rounded-b-lg z-20"> 
          <div>
            <Header />
          </div>
          <div className="scale-90">
            <div className="z-20">
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
            </div>
            <div className="rounded-b-lg">
              <Planner
                items={items}
                setItems={setItems}
                selectedList={selectedList}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
import UserName from "./UserName"
import UserPic from "./UserPic"
import Logout from "./Logout"

export default function UserInfo( {
  user,
  setUser,
  userData,
  setUserData,
  userPicture,
  setUserPicture,
  setUserId,
}) {
  return (
    <div className=" flex flex-row p-2 space-x-2 absolute top-0 right-0 z-20">
      <div className="flex flex-col space-y-1 p-1 shadow-lg shadow-black bg-secondary/50 rounded-md">
        <UserPic userPicture={userPicture} />
      </div>
      <div className="shadow-lg shadow-black bg-secondary/30 rounded">
        <UserName
          userData={userData}
          user={user}
          setUser={setUser}
          setUserData={setUserData}
          setUserPicture={setUserPicture}
          setUserId={setUserId}
        />
      </div>
    </div>
  )
}
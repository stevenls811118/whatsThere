import { useEffect } from "react";
import Logout from "./Logout";

export default function UserName({
  user,
  userData,
  setUser,
  setUserData,
  setUserPicture,
  setUserId,
}) {
  useEffect(() => {
    console.log("userData changed:", userData);
  }, [userData]);

  return (
    <div className="flex flex-row justify-around p-4 h-full ">
      <div className="flex flex-col justify-center text-lg font-bold text-black font-mono px-3 text-slate-100 italic">
        <div>
          {userData && userData.name ? (
            <div>
              {userData.name}
              <Logout
                user={user}
                setUser={setUser}
                setUserData={setUserData}
                setUserPicture={setUserPicture}
                setUserId={setUserId}
              />
            </div>
          ) : (
            <h5>User</h5>
          )}
        </div>
      </div>
    </div>
  );
}

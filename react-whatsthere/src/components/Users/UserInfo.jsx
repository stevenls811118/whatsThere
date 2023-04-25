import { useEffect } from "react";

export default function UserInfo({ userData, userPicture }) {
  
  useEffect(() => {
    console.log("userData changed:", userData);
  }, [userData]);

  useEffect(() => {
    console.log("userPicture changed:", userPicture);
  }, [userPicture]);


  return (
    <div className="flex flex-row justify-around p-4 bg-primary" >
      <div>
        {userPicture && userPicture.picture ? (
          <img
            src={userPicture.picture}
            alt="user"
            className="rounded-full w-24 h-24"
          />
        ) : (
          <img src="https://via.placeholder.com/150" className="rounded-full w-24 h-24" alt="user" />
        )}
      </div>
      <div className="flex flex-col justify-center text-xl font-bold text-white">
        <div>
          {userData && userData.name ? (
            <h1>{userData.name}</h1>
          ) : (
            <h1>User</h1>
          )}
        </div>
      </div>
    </div>
  );
}
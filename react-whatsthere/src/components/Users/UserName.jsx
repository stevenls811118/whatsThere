import { useEffect } from "react";


export default function UserName({ userData }) {
  
  useEffect(() => {
    console.log("userData changed:", userData);
  }, [userData]);

  return (
    <div className="flex flex-row justify-around p-4 h-full " >
      <div className="flex flex-col justify-center text-3xl font-bold text-black font-mono px-3">
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
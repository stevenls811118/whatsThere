import React from "react";

export default function Logout({ user, setUser, setUserData, setUserPicture }) {


  const handleSignOut = () => {
    setUser({});
    setUserData({});
    setUserPicture({});
    window.open("/", "_self");
  };


  return (
    <div className="flex justify-center">
      {Object.keys(user).length !== 0 &&
        <button
          onClick={handleSignOut}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md py-1 px-2 text-sm"
        >
          Sign Out
        </button>
      }
    </div>
  );
}
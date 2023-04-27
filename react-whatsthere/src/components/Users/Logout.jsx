import React from "react";

export default function Logout({
  user,
  setUser,
  setUserData,
  setUserPicture,
  setUserId,
}) {
  const handleSignOut = () => {
    setUser({});
    setUserData({});
    setUserPicture({});
    setUserId(0);
    window.open("/", "_self");
  };

  return (
    <div className="flex justify-center">
      {Object.keys(user).length !== 0 && (
        <button
          onClick={handleSignOut}
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold rounded-md py-1 px-2 text-sm text-slate-200"
        >
          Sign Out
        </button>
      )}
    </div>
  );
}

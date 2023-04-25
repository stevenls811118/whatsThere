import React from "react";

export default function Logout({ user, setUser, setUserData, setUserPicture }) {

  // const handleCallbackResponse = (response) => {
  //   // response.credential is an encoded jwt
  //   const userObj = jwt_decode(response.credential);
  //   setUser(userObj); // decoded jwt object
  //   console.log(user)

  //   const Data = {
  //     email: userObj.email,
  //     name: userObj.name,
  //   };

  //   const userPic = {
  //     picture: userObj.picture,
  //   }

  //   setUserData(Data);
  //   setUserPicture(userPic);
  //   console.log(`UserData: ${userData}`);
  // };

  const handleSignOut = () => {
    setUser({});
    setUserData({});
    setUserPicture({});
    setUserId(0)
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
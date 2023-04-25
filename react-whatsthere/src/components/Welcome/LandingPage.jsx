import { useEffect } from "react";
import jwt_decode from "jwt-decode"
import axios from "axios";
import Features from "./Features";
import VideoPlayer from "./VideoPlayer";

export default function LandingPage({ user, setUser, userData, setUserData, userPicture, setUserPicture, userId, setUserId }) {

  const handleCallbackResponse = (response) => {
    // response.credential is an encoded jwt
    const userObj = jwt_decode(response.credential);
    setUser(userObj); // decoded jwt object
    console.log(user)

    const userData = {
      email: userObj.email,
      name: userObj.name,
    };

    const userPic = {
      picture: userObj.picture,
    }

    setUserData(userData);
    setUserPicture(userPic);
    console.log(`UserData: ${userData}`)
    setUserId(userObj.id);
  };

  const handleSignOut = () => {
    setUser({});
    setUserData({});
    setUserPicture({});
    google.accounts?.id.prompt();
  };

  const handleLogin = () => {
    google.accounts?.id.prompt();
  };

  useEffect(() => {
    // global google
    if (Object.keys(user).length === 0) {
      google.accounts?.id.initialize({
        client_id:
          "632068121299-unggfu717fg5kklshvbmn1kl6s6nl9ue.apps.googleusercontent.com",
        callback: handleCallbackResponse,
        auto_select: false,
        cancel_on_tap_outside: true,
      });
    }
  }, [user]);

  // useEffect(() => {
  //   if (Object.keys(userData).length !== 0) {
  //     axios
  //         .get("/api/users").then((res) => {
  //           const users = res.data;
  //           if (users.length !== 0) {
  //             const foundUser = users.filter((i) => i.email === userData.email);
  //             if (foundUser.length === 0) {
  //               axios.put("/api/users", userData);
  //             }
  //         })  
  //   }
  // }, [userData]);

  return (
    <div>
      <div>
        {Object.keys(user).length === 0 ? (
          <button
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Login with Google
            </button>
        ) : (
          <button
            onClick={handleSignOut}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Sign Out
          </button>
        )}
      </div>
      <div>
        <Features />
        <VideoPlayer />
      </div>
    </div>
  );
}

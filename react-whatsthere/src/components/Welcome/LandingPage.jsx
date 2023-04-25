import { useEffect } from "react";
import jwt_decode from "jwt-decode"
import axios from "axios";

// Components
import Features from "./Features";
import VideoPlayer from "./VideoPlayer";

// Media
import logo from '../../images/logo2.png';

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
        cancel_on_tap_outside: false,
      });
    }
  }, [user]);

  useEffect(() => {
    if (userData) {
      axios.put("/api/users", userData);
    }
  }, [userData]);

  google.accounts.id.renderButton(document.getElementById("signInDiv"), {
    theme: "outline",
    size: "large",
  });

  return (
    <div className="h-full">
      {/* top container with logo and login */}
      <div>
        <header className="flex items-center justify-between h-40 px-4 bg-primary bg-gradient-to-r from-tertiary to-primary">
          <div className="flex-1"></div>
          <div className="h-full flex items-center justify-center">
            <img src={logo} alt="logo" className="h-full" />
          </div>
          <div id='signInDiv'></div>
          <div className="flex-1 flex justify-end">
            {Object.keys(user).length === 0 ? (
              <button
                onClick={handleLogin}
                className="bg-tertiary hover:bg-secondary text-white font-bold py-2 px-4 rounded h-1/2"
              >
                Login with Google
              </button>
            ) : (
              <button
                onClick={handleSignOut}
                className="bg-tertiary hover:bg-secondary text-white font-bold py-2 px-4 rounded-full"
              >
                Sign Out
              </button>
            )}
          </div>
        </header>
        <Features />
      </div>
      <VideoPlayer />
      <div>

      </div>
    </div>
  );
}

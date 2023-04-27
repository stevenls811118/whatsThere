import { useEffect } from "react";
import jwt_decode from "jwt-decode";

// Components
import Features from "./Features";
import VideoPlayer from "./VideoPlayer";

// Threejs components
import World from "./threejs/World";

export default function LandingPage({
  user,
  setUser,
  userData,
  setUserData,
  userPicture,
  setUserPicture,
  userId,
  setUserId,
}) {
  const handleCallbackResponse = (response) => {
    // response.credential is an encoded jwt
    const userObj = jwt_decode(response.credential);
    setUser(userObj); // decoded jwt object

    const userData = {
      email: userObj.email,
      name: userObj.name,
    };

    const userPic = {
      picture: userObj.picture,
    };

    setUserData(userData);
    setUserPicture(userPic);
  };

  useEffect(() => {
    // global google
    if (Object.keys(user).length === 0) {
      google.accounts?.id.initialize({
        client_id:
          "632068121299-unggfu717fg5kklshvbmn1kl6s6nl9ue.apps.googleusercontent.com",
        callback: handleCallbackResponse,
        auto_select: true,
        cancel_on_tap_outside: false,
      });
    }
  }, [user]);

  google.accounts.id.renderButton(document.getElementById("signInDiv"), {
    theme: "filled_black",
    size: "large",
    shape: "pill",
    ux_mode: "redirect",
  });

  return (
    <div className="h-screen w-screen bg-black ">
      <div className="absolute top-0 right-0 z-20">
        <div id='signInDiv' className="p-8"></div>
      </div>
      <Features />
      <World />
      {/* <VideoPlayer /> */}
    </div>
  );
}

import Features from "welcome/features";
import VideoPlayer from "./components/Welcome/videoPlayer";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

function WelcomePage() {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    // response.credential is an encoded jwt
    let userObj = jwt_decode(response.credential);
    setUser(userObj); //decoded jwt object
    //If we have no user: show sign in button, else show sign out button
    document.getElementById("signInDiv").hidden = true;
  }
  function handleSignOut() {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }
  useEffect(() => {
    // global google
    google.accounts.id.initialize({
      client_id:
        "632068121299-unggfu717fg5kklshvbmn1kl6s6nl9ue.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });

    //prompts users to login with usual accounts (oneTap login)
    google.accounts.id.prompt();
  }, []);
  return (
    <div>
      <div>
        <div id="signInDiv"></div>
        {Object.keys(user).length != 0 && (
          <div>
            <button onClick={(e) => handleSignOut(e)}>Sign out</button>
          </div>
        )}
      </div>
      <VideoPlayer />
      <Features />
    </div>
  );
}

export default WelcomePage;

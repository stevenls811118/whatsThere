import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const Login = () => {
  const [user, setUser] = useState({});

  const handleCallbackResponse = (response) => {
    // response.credential is an encoded jwt
    const userObj = jwt_decode(response.credential);
    setUser(userObj); // decoded jwt object
  };

  const handleSignOut = () => {
    setUser({});
    google.accounts.id.prompt();
  };

  useEffect(() => {
      // global google
      google.accounts.id.initialize({
        client_id:
          "632068121299-unggfu717fg5kklshvbmn1kl6s6nl9ue.apps.googleusercontent.com",
        callback: handleCallbackResponse,
      });


      // prompts users to login with usual accounts (oneTap login)
      google.accounts.id.prompt();
  }, []);

  return (
    <div>
      <head>
        <script src="https://accounts.google.com/gsi/client" async></script>
      </head>
      {Object.keys(user).length !== 0 && (
        <div>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      )}
    </div>
  );
};

export default Login;

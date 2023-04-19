import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
export default function Login() {
  return (
    <div id="signInButton">
      <GoogleOAuthProvider clientId="632068121299-unggfu717fg5kklshvbmn1kl6s6nl9ue.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        ;
      </GoogleOAuthProvider>
    </div>
  );
  //this component will allow users to login
}

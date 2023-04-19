import { GoogleLogin } from 'react-google-login' ;
const clientId = "632068121299-unggfu717fg5kklshvbmn1kl6s6nl9ue.apps.googleusercontent.com"

export default function Login() {
    const onSuccess = (res) =>{
        console.log("Login success! Current user: ", res.profileObj)
    }
    const onFailure = (res) => {
        console.log("Login failed! res: ", res)
    }
    return (
    <div id="signInButton">
        <GoogleLogin
        client_id ={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        ></GoogleLogin>

    </div>
    )
    //this component will allow users to login
    //this will likely just handle OAuth 

}
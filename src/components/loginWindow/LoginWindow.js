import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";

import "./LoginWindow.css";
import { signIn } from "../../features/loggedUser/loggedUserSlice";

function LoginWindow() {
  const dispatch = useDispatch();

  return (
    <div className="LoginWindow">
      <div className="logo">
        <img
          src={require("../../data/images/header_logo.png")}
          alt="Rick and Morty Logo"
        />
      </div>

      <div className="login_header">
        <h1>Please sign in</h1>
      </div>

      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const decoded = jwt_decode(credentialResponse.credential);
          dispatch(signIn(decoded));
        }}
        onError={() => {
          console.log("Login Failed");
          alert("Sorry, Login Failed");
        }}
      />
    </div>
  );
}

export default LoginWindow;

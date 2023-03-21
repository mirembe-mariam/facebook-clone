import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../Firebase";
import { signInWithPopup } from "firebase/auth";
import { actionTypes } from "../reducer/reducer";
import { useStateValue } from "../StateProvider/StateProvider";
//import { EmailAuthProvider } from "firebase/auth";
function Login() {
  const [state,dispatch] =  useStateValue();
  const signIn = () => {
    //sign in...(we have craeted a function wen one clicks submit)
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        //console.log(result.user);
        });
      })
      .catch((error) => alert(error.message));
  };
  //createUserWithEmailAndPassword(auth, email, password)
  //.then((userCredential) => {
    // Signed in 
    //const user = userCredential.user;
    // ...
  //})
  //.catch((error) => {
    //const errorCode = error.code;
    //const errorMessage = error.message;
    // ..
  //});
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://www.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png"
          alt="Facebook Logo"
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
/*auth is likely a reference to the Firebase Authentication service that has been initialized in the application.
signInWithPopup(provider) triggers the popup window that prompts the user to sign in with the specified provider (e.g. Google, Facebook, etc.).
The then() function is a promise method that is called when the signInWithPopup() method resolves successfully. It passes the result object to the function, which is then logged to the console using console.log().
The catch() function is a promise method that is called when the signInWithPopup() method fails to resolve successfully (i.e. an error occurs). 
It passes the error object to the function, which is then used to display an alert dialog box with the error message using alert().*/

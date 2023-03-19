import React from "react";
import "./Login.css";
import { Button } from '@material-ui/core';

function Login() {
    const signIn = () => {
        //sign in...(we have craeted a function wen one clicks submit)
    };
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
      <Button type="submit" onClick={signIn}
      >Sign In
      </Button>
    </div>
  );
}

export default Login;

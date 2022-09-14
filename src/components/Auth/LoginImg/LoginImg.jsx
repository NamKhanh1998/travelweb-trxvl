import "./LoginImg.scss";
import { FaFacebook } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { BsGoogle } from "react-icons/bs";

import { Link } from "react-router-dom";
import { memo } from "react";

const LoginImg = memo(({ bgImg }) => {
  const googleLogin = async () => {
    window.open("http://localhost:8000/auth/google/login", "_self");
  };
  const fbLogin = async () => {
    window.open("http://localhost:8000/auth/facebook", "_self");
  };
  return (
    <div className="login-img" style={{ background: `url(${bgImg})` }}>
      <div className="blur-layer"></div>
      <Link to="/" className="login-logo">
        trxvl.
      </Link>
      <div className="Social-login">
        <div className="Social-login-item" onClick={googleLogin}>
          <BsGoogle className="Social-login-icon" />
          <span>Sign in with Google</span>
        </div>

        <div className="Social-login-item" onClick={fbLogin}>
          <FaFacebook className="Social-login-icon" />{" "}
          <span>Sign in with Facebook</span>
        </div>

        <div className="Social-login-item">
          <ImTwitter className="Social-login-icon" />{" "}
          <span>Sign in with Twitter</span>
        </div>
      </div>
    </div>
  );
});

export default LoginImg;

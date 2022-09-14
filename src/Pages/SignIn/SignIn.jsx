import { useSelector } from "react-redux";
import loginBgImg from "../../assets/images/login.png";
import PopUp from "../../components/PopUp/PopUp";
import LoginImg from "../../components/Auth/LoginImg/LoginImg";
import "./signnn.scss";
import SignInform from "../../components/Auth/SignInForm/SignInform";
import { useLocation } from "react-router-dom";

const SignInPage = ({ type }) => {
  const { success } = useSelector((state) => state.auth.register);
  const location = useLocation();

  return (
    <div
      className={"signup-container " + (location.state?.animation && "swipe")}
    >
      <LoginImg bgImg={loginBgImg} />

      <div className="signup-form">
        <div className="signup-form-title">
          <h2>Sign In</h2>
          <p>Get started absolutely free</p>
        </div>
        <SignInform />
      </div>
    </div>
  );
};

export default SignInPage;

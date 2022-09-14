import { useSelector } from "react-redux";
import loginBgImg from "../../assets/images/login.png";
import PopUp from "../../components/PopUp/PopUp";
import LoginImg from "../../components/Auth/LoginImg/LoginImg";
import SignUpForm from "../../components/Auth/SignUpForm/SignUpForm";
import "./signup.scss";

const SignUpPage = ({ type }) => {
  const { success } = useSelector((state) => state.auth.register);
  return (
    <div className="signup-container">
      {success && type !== "login" && <PopUp />}
      <LoginImg bgImg={loginBgImg} />

      <div className="signup-form">
        <div className="signup-form-title">
          <h2>Sign Up</h2>
          <p>Get started absolutely free</p>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;

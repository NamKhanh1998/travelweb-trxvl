import "./SignInSuccess.scss";
import { FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authSlice from "../../../redux/authSlice";
import { useEffect, useState } from "react";

const SignInSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [time, setTime] = useState(5);

  const goLogIn = () => {
    navigate("/SignIn", { state: { animation: true } });
    dispatch(authSlice.actions.registerFailure());
  };

  useEffect(() => {
    const id = setTimeout(() => {
      setTime(time - 1);
    }, 1000);

    if (time === 0) {
      goLogIn();
    }
    return () => clearTimeout(id);
  }, [time]);
  return (
    <div className="Register-success">
      <FiCheckCircle className="success-icon" />
      <h1 className="success-title">Registration Successul !</h1>
      <h2>You have been successfully registered</h2>
      <h3>
        You will be automatically to a login page in{" "}
        <span style={{ color: "#03a9f4" }}>{time}</span> seconds, or you can
        click Log In below
      </h3>
      <button className="popup-btn" onClick={goLogIn}>
        Log In
      </button>
    </div>
  );
};

export default SignInSuccess;

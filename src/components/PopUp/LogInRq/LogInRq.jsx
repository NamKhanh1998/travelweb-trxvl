import "./LogInRq.scss";
import { GoSignIn } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import authSlice from "../../../redux/authSlice";
import userSlice from "../../../redux/userSlice";
import Cookies from "universal-cookie";

const LogInRq = ({ title, desc }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [time, setTime] = useState(5);
  const [test, setTest] = useState(false);

  const cookies = new Cookies();

  const goLogIn = async () => {
    dispatch(authSlice.actions.logOut());
    dispatch(userSlice.actions.logOut());
    localStorage.clear("user");
    cookies.remove("refreshToken", { path: "/" });
    cookies.remove("accessToken", { path: "/" });
    navigate("/SignIn", { state: { animation: true } });
  };

  useEffect(() => {
    const id = setTimeout(() => {
      if (id >= 0) {
        setTime(time - 1);
      }
    }, 1000);
    if (time === 0) {
      goLogIn();
    }
    return () => clearTimeout(id);
  }, [time]);
  return (
    <div className="LoginRq-success">
      <GoSignIn className="require-icon" />
      <h1 className="require-title">{title}</h1>
      <h2> {desc}</h2>
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

export default LogInRq;

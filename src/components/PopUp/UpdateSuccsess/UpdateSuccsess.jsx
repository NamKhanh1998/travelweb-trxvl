import { useEffect, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import userSlice from "../../../redux/userSlice";
import "./UpdateSuccsess.scss";

const UpdateSuccsess = ({ title, desc }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [time, setTime] = useState(5);

  const gotoPrf = () => {
    navigate("/profile", { state: { animation: true } });
    dispatch(userSlice.actions.updatePasswordFailure(false));
  };

  useEffect(() => {
    const id = setTimeout(() => {
      setTime(time - 1);
    }, 1000);

    if (time === 0) {
      gotoPrf();
    }
    return () => clearTimeout(id);
  }, [time]);
  return (
    <div className="Update-success">
      <FiCheckCircle className="Update-success-icon" />
      <h1 className="Update-success-title">{title}</h1>
      <h2>{desc}</h2>
      <h3>
        You will be automatically to profile page in
        <span style={{ color: "#03a9f4" }}>{time}</span> seconds, or you can
        click button below
      </h3>
      <button className="popup-btn" onClick={gotoPrf}>
        Go to Profile
      </button>
    </div>
  );
};

export default UpdateSuccsess;

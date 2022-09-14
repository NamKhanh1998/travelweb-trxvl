import "./InputNoOutLine.scss";
import { AiFillSave, AiOutlineCheckCircle } from "react-icons/ai";
import { BiLoaderAlt } from "react-icons/bi";
import { BsCheckLg } from "react-icons/bs";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useUpdateProfile } from "../../../hooks/ApiRequest";
import authSlice from "../../../redux/authSlice";
import userSlice from "../../../redux/userSlice";
const InputNoOutLine = ({ setIsSuccess }) => {
  const [inputData, setInputData] = useState(null);
  const [call, setCall] = useState(0);
  const { loading, error, success } = useSelector((state) => state.auth.mobile);
  const { user } = useSelector((state) => state.auth.login);
  const dispatch = useDispatch();

  //Handle Func
  const handleSave = () => {
    setCall((prev) => prev + 1);
  };
  const handleChange = (e) => {
    setInputData({ mobile: e.target.value });
  };
  //Call APi
  useUpdateProfile("user/", user?.id, inputData, call, dispatch);

  useEffect(() => {
    if (success?.data) {
      dispatch(authSlice.actions.updateUserSuccess(success.data));
      setIsSuccess(true);
    }
    if (error) {
      if (error?.message == "TokenExpired") {
        dispatch(userSlice.actions.getPrfFailure(error));
      }
    }
  }, [success, error]);

  return (
    <div className="mobile-input-container">
      <div className="mobile-input">
        <input type="text" onChange={handleChange} />
        {!success && !loading && (
          <AiFillSave className="mb-input-save" onClick={handleSave} />
        )}
        {loading && <BiLoaderAlt className="loadicon" />}
      </div>
      {error &&
        (typeof error.message === "string" ? (
          <span className="mobile-input-error">{error?.message}</span>
        ) : (
          <span className="mobile-input-error">{error?.message[0]}</span>
        ))}
    </div>
  );
};

export default InputNoOutLine;

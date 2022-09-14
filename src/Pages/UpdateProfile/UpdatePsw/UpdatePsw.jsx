import { useLocation } from "react-router-dom";
import LoginImg from "../../../components/Auth/LoginImg/LoginImg";
import "./updatepsw.scss";
import UpdateImg from "../../../assets/images/updateprofile.png";
import UpdatePswForm from "../../../components/Forms/UpdatePswForm/UpdatePswForm";
import PopUp from "../../../components/PopUp/PopUp";
import { useSelector } from "react-redux";

const UpdatePsw = () => {
  const location = useLocation();
  const { error, success } = useSelector((state) => state.user.password);
  const { user } = useSelector((state) => state.auth.login);

  return (
    <>
      {error?.message == "TokenNotValid" && <PopUp type="accessdenied" />}
      {error?.message == "TokenExpired" && <PopUp type="timeout" />}
      {!user && <PopUp type="loginneed" />}
      {success && <PopUp type="updateSuccess" />}

      {user && (
        <div
          className={
            "UpdateProfile-container " + (location.state?.animation && "swipe")
          }
        >
          <LoginImg bgImg={UpdateImg} />

          <div className="update-form">
            <div className="update-form-title">
              <h2>Update Password</h2>
            </div>
            <UpdatePswForm />
          </div>
        </div>
      )}
    </>
  );
};

export default UpdatePsw;

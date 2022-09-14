import "./PopUp.scss";

import SignInSuccess from "./SignInSuccess/SignInSuccess";
import LogInRq from "./LogInRq/LogInRq";
import UpdateSuccsess from "./UpdateSuccsess/UpdateSuccsess";
const PopUp = ({ type }) => {
  return (
    <div className="popup-layer">
      {!type && <SignInSuccess />}
      {type === "loginneed" && (
        <LogInRq title="Please login !" desc="You have not login" />
      )}
      {type === "timeout" && (
        <LogInRq
          title="The session has expired !"
          desc="The session has expired. Please log in"
        />
      )}
      {type === "accessdenied" && (
        <LogInRq
          title="Acess denied !"
          desc="You do not have permission to access, Please log in"
        />
      )}
      {type === "updateSuccess" && (
        <UpdateSuccsess
          title="Update Success !"
          desc="You have been update your password success !"
        />
      )}
    </div>
  );
};

export default PopUp;

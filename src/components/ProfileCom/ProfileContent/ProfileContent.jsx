import "./ProfileContent.scss";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { useSelector } from "react-redux";
import { AiFillEdit } from "react-icons/ai";
import InputNoOutLine from "../InputNoOutLine/InputNoOutLine";
import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ProfileContent = () => {
  const { user } = useSelector((state) => state.auth.login);
  const [click, setClick] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {user && (
        <div className="ProfileContent-container">
          <div className="profile-info">
            <div className="info-title">
              <div className="title-details">
                <p>Profile Information</p>
                <BsFillPersonLinesFill />
              </div>

              <div className="title-desc">
                Hi, I’m Alec Thompson, Decisions: If you can’t decide, the
                answer is no. If two equally difficult paths, choose the one
                more painful in the short term (pain avoidance is creating an
                illusion of equality).
              </div>
            </div>

            <div className="info-details">
              <div className="detail-item">
                <p>
                  Full Name:
                  <span>{user.username}</span>
                </p>
              </div>
              <div className="detail-item">
                <div className="mobile-item-con">
                  Mobile:
                  {user.mobile ? (
                    <span>
                      <div className="mobile-item">
                        <div className="phone-number">{user.mobile}</div>
                        <AiFillEdit />
                        {isSuccess && (
                          <>
                            <BsCheckLg className="checkicon" />
                            <div className="mobile-input-succ">
                              Update success !
                            </div>
                          </>
                        )}
                      </div>
                    </span>
                  ) : (
                    <span>
                      <div className="mobile-item">
                        {!click ? (
                          <>
                            <div>Add phone number</div>
                            <AiFillEdit onClick={() => setClick(!click)} />
                          </>
                        ) : (
                          <InputNoOutLine setIsSuccess={setIsSuccess} />
                        )}
                      </div>
                    </span>
                  )}
                </div>
              </div>
              <div className="detail-item">
                <p>
                  Email:
                  <span>{user.email}</span>
                </p>
              </div>
              <div className="detail-item">
                <p>
                  Location:
                  <span>USA</span>
                </p>
              </div>
              <div className="detail-item">
                <p className="social-title">
                  Social:
                  <span className="social-items">
                    <FaFacebook className="social-icon" />
                    <ImTwitter className="social-icon" />
                    <BsLinkedin className="social-icon" />
                  </span>
                </p>
              </div>
              {user?.authType === "local" && (
                <div className="detail-item">
                  <p>
                    Password:
                    <span>
                      <span>********</span>
                      <span>
                        <AiFillEdit
                          className="edit-icon"
                          onClick={() =>
                            navigate("/updateinfos", {
                              state: { animation: true },
                            })
                          }
                        />
                      </span>
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}{" "}
    </>
  );
};

export default ProfileContent;

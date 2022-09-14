import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Loading/Loading";
import { useUpdatePsw } from "../../../hooks/ApiRequest";

const SignupSchema = Yup.object().shape({
  CurrentPsw: Yup.string()
    .min(8, "Please enter at least 8 character !")
    .max(50, "Too Long!")
    .required("This input required !"),
  NewPsw: Yup.string()
    .min(8, "Please enter at least 8 character !")
    .max(50, "Too Long!")
    .required("This input required !"),
  ConfirmPsw: Yup.string()
    .min(8, "Please enter at least 8 character !")
    .max(50, "Too Long!")
    .required("This input required !"),
});

const UpdatePswForm = () => {
  const [Info, setInfo] = useState(null);
  const [call, setCall] = useState(0);
  const [isConfirm, setIsConfirm] = useState(false);
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth.login);

  const { error, loading } = useSelector((state) => state.user.password);

  // Call API
  useUpdatePsw("user/psw/", user?.id, Info, call, isConfirm, dispatch);

  return (
    <div>
      <Formik
        initialValues={{
          CurrentPsw: "",
          NewPsw: "",
          ConfirmPsw: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          const { NewPsw, ConfirmPsw } = values;
          if (NewPsw === ConfirmPsw) {
            setInfo(values);
            setCall(call + 1);
            setIsConfirm(true);
          } else {
            setIsConfirm("NotMatch");
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-Item">
              <label className="form-Item-label" htmlFor="username">
                Current Password
              </label>
              <Field
                name="CurrentPsw"
                type="password"
                className={
                  "form-item-input " +
                  (errors.CurrentPsw && touched.CurrentPsw && "error")
                }
              />
              {errors.CurrentPsw && touched.CurrentPsw ? (
                <div className="form-item-error">{errors.CurrentPsw}</div>
              ) : null}
              {/* My error */}
              {error?.statusCode == 404 && !errors.CurrentPsw && (
                <div className="form-item-error">{error.message}</div>
              )}
            </div>

            <div className="form-Item">
              <label className="form-Item-label" htmlFor="email">
                New Password
              </label>

              <Field
                className={
                  "form-item-input " +
                  (errors.NewPsw && touched.NewPsw && "error")
                }
                name="NewPsw"
                type="password"
              />
              {errors.NewPsw && touched.NewPsw ? (
                <div className="form-item-error">{errors.NewPsw}</div>
              ) : null}
              {/* My error */}
              {error?.statusCode == 403 && !errors.NewPsw && (
                <div className="form-item-error">{error.message}</div>
              )}
            </div>

            <div className="form-Item">
              <label className="form-Item-label" htmlFor="password">
                Confirm Password
              </label>

              <Field
                className={
                  "form-item-input " +
                  (errors.ConfirmPsw && touched.ConfirmPsw && "error")
                }
                name="ConfirmPsw"
                type="password"
              />
              {errors.ConfirmPsw && touched.ConfirmPsw ? (
                <div className="form-item-error">{errors.ConfirmPsw}</div>
              ) : null}
              {/* My error */}
              {isConfirm == "NotMatch" && (
                <div className="form-item-error">
                  New Password and Confirm Password not match !
                </div>
              )}
            </div>
            <button type="submit" className="auth-btn">
              {loading ? <Loading /> : "Update"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdatePswForm;

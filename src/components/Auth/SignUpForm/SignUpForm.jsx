import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import authSlice from "../../../redux/authSlice";
import axios from "axios";
import Loading from "../../Loading/Loading";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, "Username Too Short!")
    .max(50, "Username Too Long!")
    .required("This input required !"),
  password: Yup.string()
    .min(8, "Please enter at least 8 character !")
    .max(50, "Too Long!")
    .required("This input required !"),
  email: Yup.string().email("Invalid email").required("This input required !"),
});

const SignUpForm = () => {
  const [Info, setInfo] = useState(null);
  const [call, setCall] = useState(0);

  const dispatch = useDispatch();

  const { error, loading, success } = useSelector(
    (state) => state.auth.register
  );

  useEffect(() => {
    const fetch = async () => {
      if (true) {
        dispatch(authSlice.actions.registerStart());
        try {
          const res = await axios.post("/auth/local/signup", Info);
          dispatch(authSlice.actions.registerSuccess(res.data));
        } catch (error) {
          dispatch(authSlice.actions.registerFailure(error.response.data));
        }
      }
    };
    if (Info) {
      fetch();
    }
  }, [Info, call]);

  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          setInfo(values);
          setCall(call++);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-Item">
              <label className="form-Item-label" htmlFor="username">
                User Name
              </label>
              <Field
                name="username"
                className={
                  "form-item-input " +
                  (errors.username && touched.username && "error")
                }
              />
              {errors.username && touched.username ? (
                <div className="form-item-error">{errors.username}</div>
              ) : null}
            </div>

            <div className="form-Item">
              <label className="form-Item-label" htmlFor="email">
                Email
              </label>

              <Field
                className={
                  "form-item-input " +
                  (errors.email && touched.email && "error")
                }
                name="email"
              />
              {errors.email && touched.email ? (
                <div className="form-item-error">{errors.email}</div>
              ) : null}
              {/* My error */}
              {error?.statusCode == 403 && !errors.email && (
                <div className="form-item-error">{error.message}</div>
              )}
            </div>

            <div className="form-Item">
              <label className="form-Item-label" htmlFor="password">
                password
              </label>

              <Field
                className={
                  "form-item-input " +
                  (errors.password && touched.password && "error")
                }
                name="password"
                type="password"
              />
              {errors.password && touched.password ? (
                <div className="form-item-error">{errors.password}</div>
              ) : null}
            </div>
            <button type="submit" className="auth-btn">
              {loading ? <Loading /> : "Sign Up"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;

import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import authSlice from "../../../redux/authSlice";
import axios from "axios";
import Loading from "../../Loading/Loading";
import Cookies from "universal-cookie";

import { useLocation, useNavigate } from "react-router-dom";

const SignInSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Please enter at least 8 character !")
    .max(50, "Too Long!")
    .required("This input required !"),
  email: Yup.string().email("Invalid email").required("This input required !"),
});

const SignInform = () => {
  const [Info, setInfo] = useState(null);
  const [call, setCall] = useState(0);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const cookies = new Cookies();

  const { error, loading } = useSelector((state) => state.auth.login);

  useEffect(() => {
    if (location.search) {
      const path = location.search.split("?");

      if (path[1] == "authTypeInvalid") {
        dispatch(
          authSlice.actions.logInFailure({
            statusCode: 111,
            message: `Email ${path[2]} is already in use by another login method  that is not ${path[3]} !`,
          })
        );
      } else {
        const email = path[1];
        const psw = path[2] + path[2].slice(3, 3);

        setInfo({
          email: email,
          password: psw,
        });
      }
    }
  }, [location]);

  useEffect(() => {
    const fetch = async () => {
      if (true) {
        dispatch(authSlice.actions.loginStart());
        try {
          const res = await axios.post("/auth/local/signin", Info);

          dispatch(authSlice.actions.logInSuccess(res.data.user));

          await cookies.set("accessToken", res.data.token.access_token, {
            path: "/",
          });
          await cookies.set("refreshToken", res.data.token.refresh_token, {
            path: "/",
          });

          const userLocalstorage = JSON.stringify({
            user: res.data.user,
            expiry: new Date().getTime() + 60000 * 20,
          });
          localStorage.setItem("user", userLocalstorage);
          navigate("/");
        } catch (error) {
          dispatch(authSlice.actions.logInFailure(error.response.data));
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
          email: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={(values) => {
          setInfo(values);
          setCall(call++);
        }}
      >
        {({ errors, touched }) => (
          <Form>
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
              {error?.statusCode == 404 && !errors.email && (
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
              {/* My error */}
              {error?.statusCode == 403 && !errors.password && (
                <div className="form-item-error">{error.message}</div>
              )}
            </div>
            <button type="submit" className="auth-btn">
              {loading ? <Loading /> : "Sign In"}
            </button>
            {error?.statusCode == 111 && (
              <div className="form-Item">
                <div className="form-item-error under">{error.message}</div>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignInform;

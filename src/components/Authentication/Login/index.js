import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { useStateValue } from "src/StateProvider";
import { useNavigate } from "react-router-dom";

import logo from "src/assets/logo/logo-text.svg";

export default function Login() {
  const navigate = useNavigate();
  const [{}, dispatch] = useStateValue();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const loginEmail = window.localStorage.getItem("loginEmail")
    ? window.localStorage.getItem("loginEmail")
    : "";

  return (
    <div className="mt-12 md:mt-28">
      <div className="flex justify-center content-center max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl">
        <div className="hidden bg-cover lg:block lg:w-1/2 bg-login"></div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <Link to="/">
            <div className="flex justify-center mb-8">
              <img
                className="w-1/2 h-5/6 sm:w-1/2 sm:h-3/4 md:w-1/2 md:h-full z-10"
                src={logo}
                alt=""
              ></img>
            </div>
          </Link>

          {/* <p className="text-xl text-center text-gray-600 dark:text-gray-200">
            Welcome back!
          </p> */}

          <Link
            to="#"
            className="flex items-center justify-center mt-4 text-gray-600 border rounded-lg hover:bg-gray-50"
          >
            <div className="px-4 py-2">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>

            <span className="w-5/6 px-4 text-crypto-purple py-3 font-bold text-center">
              Sign in with Google
            </span>
          </Link>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b lg:w-1/4"></span>

            <Link
              to="#"
              className="text-xs text-center text-gray-500 uppercase hover:underline"
            >
              or login with email
            </Link>

            <span className="w-1/5 border-b lg:w-1/4"></span>
          </div>

          <Formik
            initialValues={{
              email: loginEmail,
              password: "",
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Must be a valid email")
                .max(255)
                .required("Email is required"),
              password: Yup.string().max(255).required("Password is required"),
            })}
            onSubmit={async (values) => {
              try {
                setEmailError("");
                setPasswordError("");
                const res = await fetch(
                  `${process.env.REACT_APP_SERVER_URL}/login`,
                  {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: { "Content-Type": "application/json" },
                  }
                );
                const data = await res.json();
                if (data.errors) {
                  if (data.errors.email) {
                    setEmailError(data.errors.email);
                  }
                  if (data.errors.password) {
                    setPasswordError(data.errors.password);
                  }
                }
                if (data.user) {
                  localStorage.setItem("topset_jwt", data.jwt);
                  dispatch({
                    type: "SET_USER",
                    user: data.user,
                  });
                  navigate("/dashboard");
                  //window.location.reload();
                }
              } catch (error) {
                console.log("caught error: ", error);
              }
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form noValidate onSubmit={handleSubmit}>
                <div className="mt-4">
                  <label className="block mb-2 text-crypto-purple text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    value={values.email}
                  />
                  <p className="text-crypto-red text-sm">{emailError}</p>
                </div>

                <div className="mt-4">
                  <div className="flex justify-between">
                    <label className="block mb-2 text-crypto-purple text-sm font-medium">
                      Password
                    </label>
                    <Link
                      to="#"
                      className="text-xs text-gray-500 hover:underline"
                    >
                      Forget Password?
                    </Link>
                  </div>

                  <input
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    name="password"
                    value={values.password}
                  />
                  <p className="text-crypto-red text-sm">{passwordError}</p>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-crypto-purple rounded hover:bg-light-green hover:text-white focus:outline-none focus:bg-mid-green"
                  >
                    Login
                  </button>
                </div>
              </form>
            )}
          </Formik>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b md:w-1/4"></span>

            <Link
              to="#"
              className="text-xs text-gray-500 uppercase hover:underline"
            >
              or sign up
            </Link>

            <span className="w-1/5 border-b md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

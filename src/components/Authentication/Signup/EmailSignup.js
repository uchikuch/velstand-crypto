import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { useStateValue } from "src/StateProvider";
import { useNavigate } from "react-router-dom";

export default function EmailSignup() {
  const navigate = useNavigate();
  const [{}, dispatch] = useStateValue();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const loginEmail = window.localStorage.getItem("loginEmail")
    ? window.localStorage.getItem("loginEmail")
    : "";

  return (
    <div className="w-full">
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
              <label className="block uppercase mb-2 text-gray-400 text-xs font-medium">
                Email
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border-2 rounded-xl focus:border-blue-500 focus:outline-none focus:ring"
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                name="email"
                value={values.email}
              />
              <p className="text-red-600 text-xs mt-2">{emailError}</p>
            </div>

            <div className="mt-6">
              <div>
                <label className="block mb-2 uppercase text-gray-400 text-xs font-medium">
                  Password
                </label>
              </div>

              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border-2 rounded-xl focus:border-blue-500 focus:outline-none focus:ring"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                name="password"
                value={values.password}
              />
              <p className="text-red-600 text-xs mt-2">{passwordError}</p>
            </div>
            <div className="mt-6">
              <div>
                <label className="block mb-2 uppercase text-gray-400 text-xs font-medium">
                  Confirm Password
                </label>
              </div>

              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border-2 rounded-xl focus:border-blue-500 focus:outline-none focus:ring"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                name="password"
                value={values.password}
              />
              <p className="text-red-600 text-xs mt-2">{passwordError}</p>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-velstand-primary rounded-2xl hover:bg-velstand-black hover:text-white focus:outline-none focus:bg-mid-green"
              >
                Sign up
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { useStateValue } from "src/StateProvider";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import clsx from "clsx";

export default function EmailLogin() {
  const navigate = useNavigate();
  const [{}, dispatch] = useStateValue();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const loginEmail = window.localStorage.getItem("loginEmail")
    ? window.localStorage.getItem("loginEmail")
    : "";

  const togglePasswordType = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    }
    if (passwordType === "text") {
      setPasswordType("password");
    }
  };

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
            navigate("/dashboard");
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
                Email Address
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border-2 rounded-xl focus:border-blue-500 focus:outline-none focus:ring"
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                placeholder="Email address"
                name="email"
                value={values.email}
              />
              <p className="text-red-600 text-xs mt-2">{emailError}</p>
            </div>

            <div className="mt-6 relative">
              <div>
                <label className="block mb-2 uppercase text-gray-400 text-xs font-medium">
                  Password
                </label>
              </div>

              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border-2 rounded-xl focus:border-blue-500 focus:outline-none focus:ring"
                onBlur={handleBlur}
                onChange={handleChange}
                type={passwordType}
                placeholder="Password"
                name="password"
                value={values.password}
              />
              <div
                className="absolute top-9 right-3 cursor-pointer text-gray-500"
                onClick={togglePasswordType}
              >
                <AiOutlineEye
                  size={23}
                  className={clsx({ hidden: passwordType === "text" })}
                />
                <AiOutlineEyeInvisible
                  size={23}
                  className={clsx({ hidden: passwordType === "password" })}
                />
              </div>
              <p className="text-red-600 text-xs mt-2">{passwordError}</p>
              <div className="flex justify-between mt-4">
                <label className="block mb-2 text-gray-500 text-xs font-medium">
                  Sacn to login
                </label>
                <Link
                  to="#"
                  className="text-xs text-light-green hover:underline"
                >
                  Forget Password?
                </Link>
              </div>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-velstand-primary rounded-2xl hover:bg-velstand-black hover:text-white focus:outline-none focus:bg-mid-green"
              >
                Login
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

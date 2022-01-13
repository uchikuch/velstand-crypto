import React, { useState } from "react";
import { HiOutlineLockClosed } from "react-icons/hi";
import { Link } from "react-router-dom";
import clsx from "clsx";
import EmailLogin from "./EmailLogin";
import MobileLogin from "./MobileLogin";

export default function Login() {
  const [loginType, setLoginType] = useState("email");
  return (
    <>
      <div className="flex h-screen">
        {/* Left Div */}
        <div className="h-screen hidden lg:flex bg-login bg-no-repeat bg-cover w-2/5"></div>
        {/* Right Div */}
        <div className="h-screen flex flex-col items-center justify-center w-full lg:w-3/5">
          {/* Top Account Message */}
          <div className="flex gap-2">
            <p className="text-xs">Don't have an account?</p>
            <Link to="/signup">
              <p className="text-light-green text-xs">Sign up for free</p>
            </Link>
          </div>
          {/* Heading */}
          <div className="mt-6 flex gap-2 items-center">
            <h3 className="text-2xl">Sign in to</h3>
            <Link to="/">
              <h3 className="font-cairo text-2xl uppercase font-bold text-velstand-primary">
                Velstand
              </h3>
            </Link>
          </div>
          {/* Warning */}
          <div className="mt-6 flex flex-col">
            <p className="text-gray-600 text-xxs text-center">
              Please ensure you are visiting the correct url
            </p>
            <div className="flex bg-gray-100 rounded-2xl px-4 py-2 mt-2">
              <HiOutlineLockClosed className="mr-1 text-light-green" />
              <p className="text-xs text-light-green">https://</p>
              <p className="text-xs">accounts.velstand.com/login</p>
            </div>
          </div>
          {/* Divider */}
          <div className="border-b-[1px] border-gray-300 w-[22rem] py-4"></div>
          {/* Select */}
          <div className="flex mt-8 gap-6">
            <div
              className={clsx({
                "bg-velstand-primary text-white px-4 py-1 rounded-2xl":
                  loginType === "email",
                "hover:bg-velstand-primary text-black px-4 py-1 cursor-pointer rounded-2xl hover:text-white":
                  loginType === "mobile",
              })}
              onClick={() => setLoginType("email")}
            >
              <p>Email</p>
            </div>
            <div
              className={clsx({
                "bg-velstand-primary text-white px-4 py-1 rounded-2xl":
                  loginType === "mobile",
                "hover:bg-velstand-primary text-black px-4 py-1 cursor-pointer rounded-2xl hover:text-white":
                  loginType === "email",
              })}
              onClick={() => setLoginType("mobile")}
            >
              <p>Mobile</p>
            </div>
          </div>
          {/* Login */}
          <div
            className={clsx({
              hidden: loginType === "mobile",
              "w-[22rem] mt-8": loginType === "email",
            })}
          >
            <EmailLogin />
          </div>
          <div
            className={clsx({
              hidden: loginType === "email",
              "w-[22rem] mt-8": loginType === "mobile",
            })}
          >
            <MobileLogin />
          </div>
        </div>
      </div>
    </>
  );
}

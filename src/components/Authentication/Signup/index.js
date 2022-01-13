import React, { useState } from "react";
import { AiFillApple, AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
import clsx from "clsx";
import EmailLogin from "./EmailSignup";
import MobileLogin from "./MobileLogin";

export default function Signup() {
  const [loginType, setLoginType] = useState("email");
  return (
    <>
      <div className="flex h-screen">
        {/* Left Div */}
        <div className="h-screen bg-signup bg-no-repeat bg-cover w-2/5"></div>
        {/* Right Div */}
        <div className="h-screen flex flex-col items-center justify-center w-3/5">
          {/* Top Account Message */}
          <div className="flex gap-2">
            <p className="text-xs">Already have an account?</p>
            <Link to="/login">
              <p className="text-light-green text-xs">Login</p>
            </Link>
          </div>
          {/* Heading */}
          <div className="mt-6 flex gap-2 items-center">
            <h3 className="text-2xl font-semibold">Sign up</h3>
          </div>
          {/* Warning */}
          <div className="mt-6 flex flex-col">
            <p className="text-gray-600 text-xxs text-center">
              Use your OpenID to Sign up
            </p>
            <div className="flex gap-2 mt-4">
              <div className="flex w-24 bg-velstand-primary justify-center rounded-2xl px-4 py-2 mt-2">
                <AiOutlineGoogle className="mr-1 text-white" />
                <p className="text-xs text-white">Google</p>
              </div>
              <div className="flex w-24 bg-velstand-black justify-center rounded-2xl px-4 py-2 mt-2">
                <AiFillApple className="mr-1 text-white" />
                <p className="text-xs text-white">Apple</p>
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="border-b-[1px] border-gray-300 w-[22rem] py-4"></div>
          {/* Select */}
          <div className="flex mt-8 text-xs text-gray-500">
            <p>Or continue with email</p>
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

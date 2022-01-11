import { XIcon, MenuIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import clsx from "clsx";
import logo from "src/assets/logo/logo.svg";
import { NavLink } from "react-router-dom";

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header
      className="top-0 
    p-5 md:px-10 relative"
    >
      <nav className="container mt-2 flex gap-10 justify-between">
        {/* left */}
        <div
          className="relative flex lg:ml-28 justify-left items-left h-10 
            cursor-pointer my-auto"
        >
          <img src={logo} width={60} alt="" height={40} />
        </div>

        {/* middle - search */}
        <div className="lg:flex hidden items-center ml-24">
          <ul
            className="hidden md:flex flex-1 
          gap-6 text-xs uppercase font-light font-cairo"
          >
            <li className="cursor-pointer text-white text-s hover:text-light-green">
              About
            </li>
            <li className="cursor-pointer text-white text-s hover:text-light-green">
              Features
            </li>
            <li className="cursor-pointer text-white text-s hover:text-light-green">
              Community
            </li>
            <li className="cursor-pointer text-white text-s hover:text-light-green">
              Contact
            </li>
          </ul>
        </div>

        {/* right */}
        <div className="lg:flex items-center justify-end space-x-3 hidden">
          <NavLink to="/login">
            <button
              type="button"
              className="bg-black hover:shadow-xl text-light-green rounded-2xl
              px-4 py-1 text-sm hover:bg-light-green hover:text-black font-cairo"
            >
              LOGIN
            </button>
          </NavLink>
          <NavLink to="/signup">
            <button
              type="button"
              className="bg-black shadow-xl text-light-green rounded-2xl
              px-4 py-1 text-sm hover:bg-light-green hover:text-black font-cairo"
            >
              SIGNUP
            </button>
          </NavLink>
        </div>
        <div
          className={clsx({
            block: !showMobileMenu,
            hidden: showMobileMenu,
          })}
        >
          <MenuIcon
            onClick={toggleMenu}
            className="inline-flex h-10 w-10 text-white lg:hidden cursor-pointer"
          />
        </div>
        <div
          className={clsx({
            block: showMobileMenu,
            hidden: !showMobileMenu,
          })}
        >
          <XIcon
            onClick={toggleMenu}
            className="inline-flex h-10 w-10 text-white lg:hidden cursor-pointer"
          />
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={clsx({
          block: showMobileMenu,
          hidden: !showMobileMenu,
        })}
      >
        <div className="w-full px-6 pb-8 -ml-5 lg:hidden absolute bg-dark-green-bg">
          <ul className="pt-4 pb-12 font-cairo">
            <li className="cursor-pointer text-white text-s hover:text-light-green">
              About
            </li>
            <li className="cursor-pointer text-white text-s hover:text-light-green">
              Features
            </li>
            <li className="cursor-pointer text-white text-s hover:text-light-green">
              Community
            </li>
            <li className="cursor-pointer text-white text-s hover:text-light-green">
              Contact
            </li>
          </ul>
          <div>
            <NavLink to="/login">
              <button
                type="button"
                className="bg-black w-full mt-1 hover:bg-secondary-light hover:bg-light-green hover:text-black hover:shadow-xl text-light-green rounded-2xl
              px-7 py-2 z-10 font-cairo"
              >
                SIGN UP
              </button>
            </NavLink>
            <NavLink to="/login">
              <button
                type="button"
                className="bg-black mt-4 w-full  hover:bg-light-green hover:text-black hover:shadow-xl text-light-green rounded-2xl
              px-7 py-2 z-10 font-cairo"
              >
                LOGIN
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

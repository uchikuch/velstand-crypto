import React from "react";
import { BiLineChart } from "react-icons/bi";
import {
  HiOutlineChartSquareBar,
  HiOutlineLightningBolt,
  HiOutlineCog,
} from "react-icons/hi";
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";

export default function Menu() {
  const location = useLocation();

  return (
    <>
      <div className="grid grid-cols-4">
        <NavLink to="/dashboard">
          <div
            className={clsx(
              {
                "flex flex-col items-center justify-center text-sm border-x-2 border-x-gray-200 py-4 px-8 text-gray-500":
                  "/dashboard" !== location.pathname,
              },
              {
                "flex flex-col items-center justify-center text-sm border-b-4 border-b-green-800 border-x-2 border-x-gray-200 py-4 px-8 text-green-800":
                  "/dashboard" === location.pathname,
              }
            )}
          >
            <BiLineChart size={18} />
            <p>Overview</p>
          </div>
        </NavLink>
        <NavLink to="/dashboard/balance">
          <div
            className={clsx(
              {
                "flex flex-col items-center justify-center border-r-2 text-sm border-r-gray-200 py-4 px-8 text-gray-500":
                  "/dashboard/balance" !== location.pathname,
              },
              {
                "flex flex-col items-center justify-center border-b-4 text-sm border-b-green-800 border-r-2 border-r-gray-200 py-4 px-8 text-green-800":
                  "/dashboard/balance" === location.pathname,
              }
            )}
          >
            <HiOutlineChartSquareBar size={18} />
            <p>Balance</p>
          </div>
        </NavLink>
        <NavLink to="/dashboard/convert">
          <div
            className={clsx(
              {
                "flex flex-col items-center justify-center border-r-2 text-sm border-r-gray-200 py-4 px-8 text-gray-500":
                  "/dashboard/convert" !== location.pathname,
              },
              {
                "flex flex-col items-center justify-center border-b-4 text-sm border-b-green-800 border-r-2 border-r-gray-200 py-4 px-8 text-green-800":
                  "/dashboard/convert" === location.pathname,
              }
            )}
          >
            <HiOutlineLightningBolt size={18} />
            <p>Convert</p>
          </div>
        </NavLink>
        <NavLink to="/dashboard/settings">
          <div
            className={clsx(
              {
                "flex flex-col items-center justify-center border-r-2 text-sm border-r-gray-200 py-4 px-8 text-gray-500":
                  "/dashboard/settings" !== location.pathname,
              },
              {
                "flex flex-col items-center justify-center border-b-4 text-sm border-b-green-800 border-r-2 border-r-gray-200 py-4 px-8 text-green-800":
                  "/dashboard/settings" === location.pathname,
              }
            )}
          >
            <HiOutlineCog size={18} />
            <p>Settings</p>
          </div>
        </NavLink>
      </div>
    </>
  );
}

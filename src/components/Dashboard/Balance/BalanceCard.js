import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { RiInformationFill, RiPulseLine } from "react-icons/ri";
import clsx from "clsx";

export default function BalanceCard({ title, amount, percent, previous }) {
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    if (percent.charAt(0) === "-") {
      setDirection("down");
    }
    if (percent.charAt(0) === "+") {
      setDirection("up");
    }
  }, [percent]);

  return (
    <div className="bg-white rounded-xl px-2 py-8 w-full hover:shadow-lg">
      <div className="px-6 flex flex-col gap-2">
        <div
          className={clsx({
            "w-[60px] h-[60px] bg-light-green rounded-full flex items-center justify-center":
              title === "Total Balance",
            "w-[60px] h-[60px] bg-orange-200 rounded-full flex items-center justify-center":
              title === "Velstand Token",
            "w-[60px] h-[60px] bg-pink-200 rounded-full flex items-center justify-center":
              title === "V Stable Coin",
            "w-[60px] h-[60px] bg-blue-200 rounded-full flex items-center justify-center":
              title === "Earning this week",
          })}
        >
          <RiPulseLine size={20} />
        </div>
        <div className="flex gap-2 items-center text-gray-500 mt-4">
          <p className="text-sm">{title}</p>
          <RiInformationFill />
        </div>
        <div className="flex items-center">
          <h3
            className={clsx({
              "text-2xl text-velstand-primary font-semibold pr-3":
                title === "Your earning this month",
              "text-2xl text-velstand-black font-semibold pr-3":
                title !== "Your earning this month",
            })}
          >
            {amount}
          </h3>
        </div>
        <div className="flex items-center gap-0.5">
          <AiOutlineArrowUp
            className={clsx({
              "text-green-600": direction === "up",
              hidden: direction === "down",
            })}
            size={15}
          />
          <AiOutlineArrowDown
            className={clsx({
              "text-red-600": direction === "down",
              hidden: direction === "up",
            })}
            size={15}
          />
          <div className="flex gap-1 text-xs">
            <p
              className={clsx({
                "text-green-600": direction === "up",
                "text-red-600": direction === "down",
              })}
            >
              {percent}
            </p>
            <p className="text-gray-500">this week</p>
          </div>
        </div>
      </div>
    </div>
  );
}

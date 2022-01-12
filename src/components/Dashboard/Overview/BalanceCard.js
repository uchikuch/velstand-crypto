import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import clsx from "clsx";

export default function Balancecard({ title, amount, percent, previous }) {
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
    <div className="bg-white rounded-xl px-2 py-6 w-full">
      <div className="px-6 flex flex-col gap-1">
        <p className="text-lg">{title}</p>
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
          <p
            className={clsx({
              "text-green-600": direction === "up",
              "text-red-600": direction === "down",
            })}
          >
            {percent}
          </p>
          <AiOutlineArrowUp
            className={clsx({
              "text-gray-500": direction === "up",
              hidden: direction === "down",
            })}
          />
          <AiOutlineArrowDown
            className={clsx({
              "text-gray-500": direction === "down",
              hidden: direction === "up",
            })}
          />
        </div>
        <p className="text-xs text-gray-500">
          Compared to ({previous}) last year
        </p>
      </div>
    </div>
  );
}

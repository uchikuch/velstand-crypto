import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function Balancecard({ title, amount, percent, previous }) {
  return (
    <div className="bg-white rounded-xl px-2 py-6 w-full">
      <div className="px-6 flex flex-col gap-1">
        <p className="text-lg">{title}</p>
        <div className="flex items-center">
          <h3 className="text-2xl text-velstand-primary font-semibold pr-3">
            {amount}
          </h3>
          <p className="text-green-600">{percent}</p>
          <AiOutlineArrowUp className="text-gray-500" />
        </div>
        <p className="text-xs text-gray-500">
          Compared to ({previous}) last year
        </p>
      </div>
    </div>
  );
}

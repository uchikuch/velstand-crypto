import React, { useState } from "react";
import clsx from "clsx";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

export default function SwapCard({ title, amount, img, balance, coin }) {
  const [showUtilityMenu, setShowUtilityMenu] = useState(false);

  const toggleUtilityMenu = () => {
    setShowUtilityMenu(!showUtilityMenu);
  };

  return (
    <section className="bg-velstand-verylight-green rounded-xl p-4">
      <div className="flex justify-between text-xs text-gray-600">
        <p>{title}</p>
        <p>Balance: {balance}</p>
      </div>
      <div className="flex justify-between mt-3 items-center">
        <p className="font-bold text-3xl text-velstand-primary">{amount}</p>
        <div
          className="text-velstand-primary hover:text-white flex justify-between hover:bg-velstand-primary
        cursor-pointer items-center p-2 gap-2 rounded-xl"
        >
          <img src={img} alt="" className="w-8" />
          <div className="flex gap-4">
            <div>{coin}</div>
          </div>
          <div>
            <div
              className={clsx({
                hidden: !showUtilityMenu,
                block: showUtilityMenu,
              })}
            >
              <BiChevronUp size={23} />
            </div>
            <div
              className={clsx({
                block: !showUtilityMenu,
                hidden: showUtilityMenu,
              })}
            >
              <BiChevronDown size={23} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

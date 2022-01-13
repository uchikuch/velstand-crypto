import React from "react";
import { FiSettings } from "react-icons/fi";
import { AiOutlineArrowDown } from "react-icons/ai";
import SwapCard from "./SwapCard";
import v_stable from "src/assets/images/v-stable-rounded.png";
import bitcoin_sm from "src/assets/images/bitcoin-sm.png";

export default function Exchange() {
  return (
    <section className="rounded-2xl px-6 py-6 bg-white hover:shadow-lg">
      <div className="flex justify-between items-center mt-4">
        <p>Easy Exchange</p> <FiSettings className="cursor-pointer" size={20} />
      </div>
      <div className="mt-6">
        <SwapCard
          title="From"
          amount="0.00"
          balance="234.3459"
          coin="Bitcoin"
          img={bitcoin_sm}
        />
      </div>
      <div className="flex justify-around py-4">
        <AiOutlineArrowDown className="text-velstand-primary" size={23} />
      </div>
      <div>
        <SwapCard
          title="To (estimated)"
          amount="0.00"
          balance="1.2334"
          coin="Bitcoin"
          img={v_stable}
        />
      </div>
      <div className="bg-gray-200 rounded-2xl flex justify-around py-4 mt-10">
        <p className="text-gray-400">Swap</p>
      </div>
    </section>
  );
}

import React from "react";
import Greeting from "../Greeting";
import Exchange from "./Exchange";
import Transactions from "./Transactions";

export default function Covert() {
  return (
    <div className="bg-dashboard pb-24">
      <div className="container py-8 pl-20 pr-12">
        <div>
          <Greeting sub="Lorem ipsum dolor sit amet," main="Convert ⚡" />
        </div>
        <div className="flex gap-6">
          {/* left */}
          <div className="flex flex-1 flex-col mt-8">
            {/* Small Cards Top Row */}
            <div className="flex gap-3">
              <div className="flex-grow">
                <Exchange />
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="mt-6">
            <div className="flex-grow mt-2">
              <Transactions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

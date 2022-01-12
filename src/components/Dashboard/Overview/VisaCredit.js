import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import visa from "src/assets/images/visa-logo.png";
import mastercard from "src/assets/images/mc-logo.png";

export default function VisaCredit({ title, amount, percent, previous }) {
  return (
    <>
      {/* Debit Card 1 */}
      <div className="bg-white rounded-xl px-2 py-6 w-full">
        <div className="pr-12 pl-6 flex gap-4">
          {/* Selector */}
          <div className="w-[25px] h-[25px] rounded-full border-[1px] border-velstand-primary flex items-center justify-center">
            <div className="w-[12px] mr-[1px]z h-[12px] rounded-full bg-velstand-primary"></div>
          </div>
          {/* Card Logo */}
          <div className="flex items-center p-1 border-2">
            <img src={visa} alt="" width={30} />
          </div>
          {/* Number */}
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <div className="w-[5px] h-[5px] bg-velstand-black rounded-full"></div>
              <div className="w-[5px] h-[5px] bg-velstand-black rounded-full"></div>
              <div className="w-[5px] h-[5px] bg-velstand-black rounded-full"></div>
              <div className="w-[5px] h-[5px] bg-velstand-black rounded-full"></div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[5px] h-[5px] bg-velstand-black rounded-full"></div>
              <div className="w-[5px] h-[5px] bg-velstand-black rounded-full"></div>
              <div className="w-[5px] h-[5px] bg-velstand-black rounded-full"></div>
              <div className="w-[5px] h-[5px] bg-velstand-black rounded-full"></div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[5px] h-[5px] bg-velstand-black rounded-full"></div>
              <div className="w-[5px] h-[5px] bg-velstand-black rounded-full"></div>
              <div className="w-[5px] h-[5px] bg-velstand-black rounded-full"></div>
              <div className="w-[5px] h-[5px] bg-velstand-black rounded-full"></div>
            </div>
            <div className="flex items-center gap-1">
              <p>3498</p>
            </div>
          </div>
          {/* Expiry */}
          <div className="ml-4 flex items-center gap-1">
            <p className="text-gray-400 text-sm">Expires 06/2024</p>
          </div>
        </div>
      </div>
      {/* Debit Card 2 */}
      <div className="bg-white rounded-xl px-2 py-6 w-full mt-6">
        <div className="pr-12 pl-6 flex gap-4">
          {/* Selector */}
          <div className="w-[25px] h-[25px] rounded-full border-[1px] border-velstand-primary flex items-center justify-center">
            <div className="w-[12px] mr-[1px]z h-[12px] rounded-full bg-velstand-primary"></div>
          </div>
          {/* Card Logo */}
          <div className="flex items-center p-1 border-2">
            <img src={mastercard} alt="" width={30} />
          </div>
          {/* Number */}
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <div className="w-[5px] h-[5px] bg-velstand-black rounded-full"></div>
              <div className="w-[5px] h-[5px] bg-velstand-black rounded-full"></div>
              <div className="w-[5px] h-[5px] bg-velstand-black rounded-full"></div>
              <div className="w-[5px] h-[5px] bg-velstand-black rounded-full"></div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[5px] h-[5px] bg-velstand-black rounded-full"></div>
              <div className="w-[5px] h-[5px] bg-velstand-black rounded-full"></div>
              <div className="w-[5px] h-[5px] bg-velstand-black rounded-full"></div>
              <div className="w-[5px] h-[5px] bg-velstand-black rounded-full"></div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[5px] h-[5px] bg-velstand-black rounded-full"></div>
              <div className="w-[5px] h-[5px] bg-velstand-black rounded-full"></div>
              <div className="w-[5px] h-[5px] bg-velstand-black rounded-full"></div>
              <div className="w-[5px] h-[5px] bg-velstand-black rounded-full"></div>
            </div>
            <div className="flex items-center gap-1">
              <p>1209</p>
            </div>
          </div>
          {/* Expiry */}
          <div className="ml-4 flex items-center gap-1">
            <p className="text-gray-400 text-sm">Expires 01/2029</p>
          </div>
        </div>
      </div>
    </>
  );
}

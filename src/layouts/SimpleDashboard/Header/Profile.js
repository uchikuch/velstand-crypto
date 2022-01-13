import React from "react";
import avatar from "src/assets/images/avatar_2.png";

export default function Profile() {
  return (
    <div className="flex flex-1 gap-4 cursor-pointer">
      <div>
        <img className="w-10 rounded-full" src={avatar} alt="" />
      </div>
      <div className="flex flex-col justify-between">
        <p className="font-semibold">Nicole Jansen</p>
        <p className="text-xs text-gray-400">Marketing</p>
      </div>
    </div>
  );
}

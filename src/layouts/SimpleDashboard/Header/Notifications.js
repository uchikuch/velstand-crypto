import React from "react";
import { HiOutlineBell } from "react-icons/hi";

export default function Notifications() {
  return (
    <section className="relative cursor-pointer">
      <div className="flex justify-center rounded-full w-11 shadow-xl p-2 text-center">
        <HiOutlineBell className="text-3xl" size={25} />
        {/* <div className="absolute flex justify-center bg-orange-500 text-white text-xs rounded-full px-2 -top-1 -right-2">
          <p className="mt-1 pb-0.5">2</p>
        </div> */}
      </div>
    </section>
  );
}

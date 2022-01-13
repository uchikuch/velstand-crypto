import React from "react";

export default function Greeting({ sub, main }) {
  return (
    <div>
      <h3 className="font-semibold font-cairo text-xl sm:text-2xl">{sub}</h3>
      <h2 className="font-bold text-3xl font-cairo text-velstand-primary sm:text-4xl lg:text-5xl">
        {main}
      </h2>
    </div>
  );
}

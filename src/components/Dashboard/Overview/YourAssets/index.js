import React from "react";
import Table from "./Table";

export default function YourAssets() {
  return (
    <section className="rounded-2xl px-6 py-6 bg-white">
      <div className="flex items-center">
        <p>Your Assets 💡</p>{" "}
      </div>
      <div className="mt-10">
        <Table />
      </div>
    </section>
  );
}

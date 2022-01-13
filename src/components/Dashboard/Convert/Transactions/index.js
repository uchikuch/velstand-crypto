import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import Table from "./Table";

export default function Transactions() {
  return (
    <section className="rounded-2xl px-6 py-6 bg-white hover:shadow-lg">
      <div className="flex items-center">
        <p>Recent Transactions 💰</p>{" "}
      </div>
      <div className="mt-8">
        <Table />
      </div>
    </section>
  );
}

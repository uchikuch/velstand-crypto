import React from "react";
import Header from "src/layouts/SimpleDashboard/Header";
// import { useStateValue } from "src/StateProvider";

export default function SimpleDashboardLayout({ children }) {
  // const [{ user }, dispatch] = useStateValue();
  return (
    <>
      <div>
        <div className="border-b-[1px]">
          <div className="container">
            <Header />
          </div>
        </div>
        <div className="bg-dashboard"></div>
        <div>{children}</div>
      </div>
    </>
  );
}

import React from "react";
import Header from "src/layouts/SimpleDashboard/Header";
import FooterMenu from "./FooterMenu";
// import { useStateValue } from "src/StateProvider";

export default function SimpleDashboardLayout({ children }) {
  // const [{ user }, dispatch] = useStateValue();
  return (
    <>
      <div>
        <div className="border-b-[1px] sticky top-0 bg-white">
          <div className="container">
            <Header />
          </div>
        </div>
        <div className="bg-dashboard"></div>
        <div>{children}</div>
        <div className="sticky bottom-0 lg:hidden">
          <FooterMenu />
        </div>
      </div>
    </>
  );
}

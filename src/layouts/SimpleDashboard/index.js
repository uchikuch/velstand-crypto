import React from "react";
import Header from "src/layouts/SimpleDashboard/Header";
// import { useStateValue } from "src/StateProvider";

export default function SimpleDashboardLayout({ children }) {
  // const [{ user }, dispatch] = useStateValue();
  return (
    <>
      <div>
        <Header />
      </div>
      <div>{children}</div>
    </>
  );
}

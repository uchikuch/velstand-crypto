import React from "react";
import LogoText from "src/components/Logo/LogoText";
import Menu from "./Menu";
import Notifications from "./Notifications";
import Profile from "./Profile";
import UpgradeButton from "./UpgradeButton";

export default function index() {
  return (
    <>
      <div className="flex px-6 items-center border-b-[1px] justify-between">
        {/* Logo */}
        <div className="px-4">
          <LogoText />
        </div>
        {/* Menu */}
        <div className="px-6">
          <Menu />
        </div>
        <div className="flex gap-6 items-center">
          <div>
            <UpgradeButton />
          </div>
          <div>
            <Notifications />
          </div>
          <div>
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
}

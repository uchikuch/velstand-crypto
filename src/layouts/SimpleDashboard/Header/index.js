import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import LogoText from "src/components/Logo/LogoText";
import LogoIcon from "src/components/Logo/LogoIcon";
import Menu from "./Menu";
import Notifications from "./Notifications";
import Profile from "./Profile";
import UpgradeButton from "./UpgradeButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <div className="flex px-6 items-center justify-between">
        {/* Logo */}
        <div className="lg:flex hidden px-4">
          <Link to="/">
            <LogoText />
          </Link>
        </div>
        <div className="lg:hidden flex py-1">
          <Link to="/">
            <LogoIcon />
          </Link>
        </div>
        {/* Menu */}
        <div className="lg:flex hidden px-6">
          <Menu />
        </div>
        <div className="lg:flex hidden gap-6 items-center">
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
        {/* Mobile Burger */}
        <div className="lg:hidden flex gap-6 items-center">
          <div
            className={clsx({
              block: !showMobileMenu,
              hidden: showMobileMenu,
            })}
          >
            <GiHamburgerMenu
              size={30}
              onClick={toggleMenu}
              className="text-velstand-black cursor-pointer"
            />
          </div>
          <div
            className={clsx({
              block: showMobileMenu,
              hidden: !showMobileMenu,
            })}
          >
            <GrClose
              size={30}
              onClick={toggleMenu}
              className="text-velstand-black cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

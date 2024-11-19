import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";
import browseIcon from "../assets/game.svg";
import signInIcon from "../assets/account.svg";

const Header = () => {
  return (
    <section className="fixed z-50 w-full bg-bg h-20 flex items-center">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <Link to="/" className="navbar">
            <img src={logo} className="w-52" alt="Logo" />
          </Link>
          <div className="flex items-end gap-16">
            <Link to="/browse" className="cursor-pointer">
              <img src={browseIcon} alt="Browse" className="w-10 h-10" />
            </Link>
            <Link to="/signin" className="cursor-pointer">
              <img src={signInIcon} alt="Sign In" className="w-10 h-10" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

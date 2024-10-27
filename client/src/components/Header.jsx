import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import logo from "../assets/logo.svg";
import { Button } from "@/components/UI/button";

const Header = () => {
  return (
    <section className="fixed z-50 w-full border-b relatve bg-bg-900/20 border-white/5 backdrop-blur-2xl lg:bg-vulcan-900/0 h-24 flex items-center">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <img src={logo} className="w-52" alt="Logo" />
          <nav className="flex gap-14 items-center">
            <Link to="/" className="navbar">
              Home
            </Link>
            <Link to="/browse" className="navbar">
              Browse Games
            </Link>
            <Link to="/support" className="navbar">
              Support
            </Link>
          </nav>
          <Button size="xl" className="text-lg h-12">
            Sign In
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Header;

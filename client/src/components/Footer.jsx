import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import logo from "../assets/logo.svg";
import { Button } from "@/components/UI/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <section className="bg-bg-900/20 backdrop-blur-2xl lg:bg-vulcan-900/0 pb-8">
      <div className="container mx-auto">
        <div className="flex justify-between lg:gap-12 flex-wrap">
          <div className="flex flex-col justify-between gap-8">
            <img src={logo} className="w-52" alt="Logo" />
            <p className="text">
              2024 PixelFusion Studio <br />
              All rights reserved
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <h3 className="title mt-2.5">Subscribe to News</h3>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Email" />
              <Button type="submit" className="h-10 text-sm">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-40 lg:flex-nowrap mt-2.5 lg:w-auto w-full">
            <div className="flex justify-between flex-col w-full lg:w-auto">
              <h3 className="title">Stay Updated</h3>
              <div className="flex flex-col ">
                <a className="text" href="">
                  License
                </a>
                <a className="text" href="">
                  @PixelFusion
                </a>
                <a className="text" href="">
                  Twitter
                </a>
              </div>
            </div>
            <div className="flex justify-between flex-col w-full lg:w-auto gap-8">
              <h3 className="title">Navigation</h3>
              <div className="flex flex-col">
                <Link to="/" className="text">
                  Home
                </Link>
                <Link to="/Account" className="text">
                  Account
                </Link>
                <Link to="/browse" className="text">
                  Browse Games
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";
import { Button } from "@/components/UI/button";

const Footer = () => {
  const [email, setEmail] = useState("");
  const isEmailValid = () => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section className="bg-bg-900/20 backdrop-blur-2xl lg:bg-vulcan-900/0 pb-8">
      <div className="container mx-auto">
        <div className="flex justify-between lg:gap-12 flex-wrap">
          <div className="flex flex-col justify-between gap-8">
            <Link to="/">
              <img src={logo} className="w-52" alt="Logo" />
            </Link>
            <p className="text">
              2024 PixelFusion Studio <br />
              All rights reserved
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <h3 className="title mt-2.5">Subscribe to News</h3>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className={`input-field ${
                  email && !isEmailValid() ? "border-red-500" : "border-focus"
                }`}
                value={email}
                onChange={handleEmailChange}
              />
              {email && !isEmailValid() && (
                <p className="error-text">
                  Please enter a valid email address.
                </p>
              )}
              <Button type="submit" className="h-10 text-sm">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-40 lg:flex-nowrap mt-2.5 lg:w-auto w-full">
            <div className="flex justify-between flex-col w-full lg:w-auto">
              <h3 className="title">Stay Updated</h3>
              <div className="flex flex-col ">
                <Link className="text" to="/license">
                  License
                </Link>
                <a
                  className="text"
                  href="https://www.instagram.com/your-instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @PixelFusion
                </a>
                <a
                  className="text"
                  href="https://x.com/your-twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                <Link to="/signin" className="text">
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

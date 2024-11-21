import React, { useState } from "react";
import { Button } from "../../components/UI/button";
import { Link } from "react-router-dom";
import Blob from "../../components/UI/Blob";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const isEmailValid = () => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const isPasswordValid = () => {
    return password.length <= 12;
  };

  return (
    <section className="container mx-auto pt-32 pb-20 relative overflow-hidden">
      <Blob />
      <div className="max-w-md mx-auto p-8 gradient-border bg-bg">
        <h2 className="text-3xl mb-2 text-center text-title font-roboto">
          Welcome Back
        </h2>
        <p className="text-xl text-center mb-6 text-text font-inter">
          Please enter your details
        </p>
        <form>
          <div className="mb-4">
            <label className="form-label">Email</label>
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
              <p className="error-text">Please enter a valid email address.</p>
            )}
          </div>
          <div className="mb-4 relative">
            <label className="form-label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className={`input-field ${
                  password && !isPasswordValid()
                    ? "border-red-500"
                    : "border-focus"
                } relative pr-10`}
                value={password}
                onChange={handlePasswordChange}
              />
              <img
                src={
                  showPassword
                    ? "../src/assets/opened-1.svg"
                    : "../src/assets/closed-1.svg"
                }
                alt="Toggle visibility"
                onClick={handlePasswordToggle}
                className="icon-eye absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer"
              />
            </div>
            {password && !isPasswordValid() && (
              <p className="error-text">
                Password must be 12 characters or less.
              </p>
            )}
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-5 h-5 rounded-sm border border-focus bg-transparent transition-colors duration-300 checked:bg-focus checked:border-transparent"
              />
              <span className="text-white ml-2">Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-focus underline">
              Forgot password?
            </Link>
          </div>
          <Button
            variant="outline"
            size="default"
            className="w-full flex items-center justify-center mb-6"
          >
            <span className="ml-2">Sign in with Google</span>
          </Button>
          <div className="text-center text-white mb-4">Or With</div>
          <Button variant="default" size="default" className="w-full">
            Login
          </Button>
        </form>
        <p className="text-white text-center mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-focus underline">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignIn;

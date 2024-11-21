import React, { useState } from "react";
import { Button } from "../../components/UI/button";
import { Link } from "react-router-dom";
import Blob from "../../components/UI/Blob";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const isEmailValid = () => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const isPasswordValid = () => {
    return password.length <= 12;
  };

  const isConfirmPasswordValid = () => {
    return password === confirmPassword;
  };

  return (
    <section className="container mx-auto pt-32 pb-20 relative overflow-hidden">
      <Blob />
      <div className="max-w-md mx-auto p-8 gradient-border bg-bg rounded-lg">
        <h2 className="text-3xl mb-2 text-center text-title font-roboto">
          Create an Account
        </h2>
        <p className="text-xl text-center mb-6 text-text font-inter">
          Please enter your details
        </p>
        <form>
          <div className="mb-4">
            <label className="form-label">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="input-field"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
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
          <div className="mb-4 relative">
            <label className="form-label">Confirm Password</label>
            <input
              type="text" // Changed to text to make it visible by default
              placeholder="Confirm your password"
              className={`input-field ${
                confirmPassword && !isConfirmPasswordValid()
                  ? "border-red-500"
                  : "border-focus"
              }`}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {confirmPassword && !isConfirmPasswordValid() && (
              <p className="error-text">Passwords do not match.</p>
            )}
          </div>
          <Button
            variant="outline"
            size="default"
            className="w-full flex items-center justify-center mb-6"
          >
            <span className="ml-2">Sign up with Google</span>
          </Button>
          <div className="text-center text-white mb-4">Or With</div>
          <Button variant="default" size="default" className="w-full">
            Sign Up
          </Button>
        </form>
        <p className="text-white text-center mt-6">
          Already have an account?{" "}
          <Link to="/signin" className="text-focus underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;

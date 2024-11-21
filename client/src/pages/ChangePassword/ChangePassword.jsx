import React, { useState } from "react";
import { Button } from "../../components/UI/button";
import Blob from "../../components/UI/Blob";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const isPasswordValid = () => {
    return newPassword.length <= 12;
  };

  const isConfirmPasswordValid = () => {
    return newPassword === confirmPassword;
  };

  return (
    <section className="container mx-auto pt-32 pb-20 relative overflow-hidden">
      <Blob />
      <div className="max-w-md mx-auto p-8 gradient-border bg-bg rounded-lg">
        <h2 className="text-3xl mb-2 text-center text-title font-roboto">
          New Password
        </h2>
        <p className="text-xl text-center mb-6 text-text font-inter">
          Set your new password
        </p>
        <form>
          <div className="mb-4 relative">
            <label className="form-label">New Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your new password"
                className={`input-field ${
                  newPassword && !isPasswordValid()
                    ? "border-red-500"
                    : "border-focus"
                } relative pr-10`}
                value={newPassword}
                onChange={handleNewPasswordChange}
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
            {newPassword && !isPasswordValid() && (
              <p className="error-text">
                Password must be 12 characters or less.
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your new password"
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
          <Button variant="default" size="default" className="w-full">
            Update
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ChangePassword;

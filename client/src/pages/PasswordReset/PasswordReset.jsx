import React, { useState } from "react";
import { Button } from "../../components/UI/button";

const PasswordReset = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const isEmailValid = () => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <section className="container mx-auto pt-32 pb-12">
      <div className="max-w-md mx-auto p-8 gradient-border">
        <h2 className="text-3xl mb-2 text-center text-title font-roboto">
          Reset Password
        </h2>
        <p className="text-xl text-center mb-6 text-text font-inter">
          Enter your email to reset your password
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
          <Button variant="default" size="default" className="w-full">
            Reset Password
          </Button>
        </form>
        <p className="text-white text-center mt-6">
          Remembered your password?{" "}
          <a href="/signin" className="text-focus underline">
            Sign In
          </a>
        </p>
      </div>
    </section>
  );
};

export default PasswordReset;

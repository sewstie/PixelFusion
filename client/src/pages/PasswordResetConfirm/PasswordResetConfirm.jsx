import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { confirmPasswordReset, verifyPasswordResetCode } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { Button } from "../../components/UI/button";
import { Input } from "../../components/UI/input";
import Blob from "../../components/UI/Blob";

const PasswordResetConfirm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const oobCode = searchParams.get("oobCode");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isCodeValid, setIsCodeValid] = useState(false);

  useEffect(() => {
    if (oobCode) {
      verifyPasswordResetCode(auth, oobCode)
        .then(() => {
          setIsCodeValid(true);
        })
        .catch(() => {
          setErrorMessage("The password reset link is invalid or has expired.");
        });
    } else {
      setErrorMessage("Invalid password reset link.");
    }
  }, [oobCode]);

  const handlePasswordChange = (e) => {
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

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!isPasswordValid()) {
      setErrorMessage("Password must be 12 characters or less.");
      return;
    }
    if (!isConfirmPasswordValid()) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    confirmPasswordReset(auth, oobCode, newPassword)
      .then(() => {
        setSuccessMessage("Your password has been reset successfully.");
        setErrorMessage("");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch(() => {
        setErrorMessage("Unable to reset password.");
      });
  };

  return (
    <section className="container mx-auto pt-32 pb-20 relative overflow-hidden">
      <Blob className="blob-animation" />
      <div className="max-w-md mx-auto p-8 gradient-border bg-bg rounded-lg">
        <h2 className="text-3xl mb-2 text-center text-title font-roboto">
          Reset Your Password
        </h2>
        {errorMessage && (
          <p className="text-red-500 text-center mt-4">{errorMessage}</p>
        )}
        {successMessage && (
          <p className="text-focus text-center mt-4">{successMessage}</p>
        )}
        {!errorMessage && isCodeValid && (
          <form onSubmit={handleResetPassword}>
            <div className="mb-4">
              <label className="form-label">New Password</label>
              <Input
                type="password"
                placeholder="Enter your new password"
                className={`input-field ${
                  newPassword && !isPasswordValid() ? "border-red-500" : ""
                }`}
                value={newPassword}
                onChange={handlePasswordChange}
              />
              {newPassword && !isPasswordValid() && (
                <p className="error-text">
                  Password must be 12 characters or less.
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="form-label">Confirm New Password</label>
              <Input
                type="password"
                placeholder="Confirm your new password"
                className={`input-field ${
                  confirmPassword && !isConfirmPasswordValid()
                    ? "border-red-500"
                    : ""
                }`}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              {confirmPassword && !isConfirmPasswordValid() && (
                <p className="error-text">Passwords do not match.</p>
              )}
            </div>
            <Button variant="default" size="default" className="w-full">
              Reset Password
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default PasswordResetConfirm;

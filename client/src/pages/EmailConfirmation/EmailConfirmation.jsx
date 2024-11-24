import React from "react";
import { Link } from "react-router-dom";
import Blob from "../../components/UI/Blob";

const EmailConfirmation = () => {
  return (
    <section className="container mx-auto pt-32 pb-20 relative overflow-hidden">
      <Blob className="blob-animation" />
      <div className="max-w-md mx-auto p-8 gradient-border bg-bg rounded-lg text-center">
        <img
          src="../src/assets/envelope.svg"
          alt="Envelope"
          className="mx-auto mb-4 w-16 h-16"
        />
        <h2 className="text-3xl mb-2 text-title font-roboto">
          Email Confirmation
        </h2>
        <p className="text-xl mb-6 text-text font-inter">
          An email has been sent to example@example.com to confirm its validity.
          Please check your email and follow the provided link to complete the
          registration.
        </p>
        <p className="text-text font-inter">
          Didn't receive the email?{" "}
          <Link to="/resend-confirmation" className="text-focus underline">
            Resend confirmation email
          </Link>
        </p>
      </div>
    </section>
  );
};

export default EmailConfirmation;

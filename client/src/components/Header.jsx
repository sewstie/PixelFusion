import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // New import
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"; // New imports
import { auth } from "../firebaseConfig"; // New import

import logo from "../assets/logo.svg";
import browseIcon from "../assets/game.svg";
import accountIcon from "../assets/account.svg"; // Updated import

const Header = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleAccountClick = () => {
    if (currentUser) {
      navigate("/account");
    } else {
      navigate("/login");
    }
  };

  return (
    <section className="px-2 fixed z-50 w-full bg-bg h-20 flex items-center">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <Link to="/" className="navbar">
            <img src={logo} className="w-52" alt="Logo" />
          </Link>
          <div className="flex items-end gap-16">
            <Link to="/browse" className="cursor-pointer">
              <img src={browseIcon} alt="Browse" className="w-10 h-10" />
            </Link>
            <button onClick={handleAccountClick} className="cursor-pointer">
              <img
                src={currentUser?.photoURL || accountIcon}
                alt={currentUser?.displayName || "Account"}
                className={`w-10 h-10 ${currentUser ? "rounded-full" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

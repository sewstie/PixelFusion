import React, { useState, useEffect, useMemo } from "react";
import { Button } from "../../components/UI/button";
import Blob from "../../components/UI/Blob";
import { fetchGames, BASE_URL } from "@/api/api";
import Block from "../Home/components/UI/Block";
import accountIcon from "../../assets/account.svg";
import { useAuth } from "../../contexts/AuthContext";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

const Account = () => {
  const { currentUser, loading } = useAuth();
  const [games, setGames] = useState([]);
  const navigate = useNavigate();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (!loading && !currentUser) {
      navigate("/login");
    }
  }, [currentUser, loading, navigate]);

  useEffect(() => {
    const getGames = async () => {
      const gamesData = await fetchGames();
      setGames(gamesData);
    };
    getGames();
  }, []);

  const handleSubmitGame = () => {
    window.location.href = "/addgame";
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handlePasswordToggle = (setter) => {
    setter((prev) => !prev);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
  };

  const renderedGames = useMemo(() => {
    return games.map((game) => (
      <Block
        key={game.id || game.slug}
        title={game.Title || "No Title Available"}
        backgroundImage={
          game.backgroundImage ? `${BASE_URL}${game.backgroundImage.url}` : ""
        }
        link={`/game/${game.slug || ""}`}
      />
    ));
  }, [games]);

  return (
    <section className="container mx-auto pt-32 pb-6 relative overflow-hidden">
      <Blob className="left-10 top-8 opacity-30" />
      <div className="p-8">
        <div className="flex justify-between">
          <div className="flex items-center mb-6">
            <img
              src={currentUser?.photoURL || accountIcon}
              alt="Account Icon"
              className="w-28 h-28 mr-8 rounded-full"
            />
            <div>
              <h2 className="text-4xl  title">
                Hello{" "}
                <span className="underline text-focus">
                  {currentUser?.displayName || "User"}
                </span>
              </h2>
              <p className="text text-xl mt-5">
                You can see the history of games you played.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Button
              variant="default"
              size="default"
              className="mt-6"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </div>

        <form onSubmit={handlePasswordChange}>
          <div className="flex w-7/12 my-4 justify-center gap-4">
            <div className="w-full">
              <label className="form-label">Current Password</label>
              <div className="relative">
                <Input
                  type={showCurrentPassword ? "text" : "password"}
                  placeholder="Enter your current password"
                  className="relative pr-10"
                  value={currentPassword}
                  onChange={handleInputChange(setCurrentPassword)}
                />
                <img
                  src={
                    showCurrentPassword
                      ? "../src/assets/opened-1.svg"
                      : "../src/assets/closed-1.svg"
                  }
                  alt="Toggle visibility"
                  onClick={() => handlePasswordToggle(setShowCurrentPassword)}
                  className="icon-eye absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer"
                />
              </div>
            </div>
            <div className="w-full">
              <label className="form-label">New Password</label>
              <div className="relative">
                <Input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Enter your new password"
                  className="relative pr-10"
                  value={newPassword}
                  onChange={handleInputChange(setNewPassword)}
                />
                <img
                  src={
                    showNewPassword
                      ? "../src/assets/opened-1.svg"
                      : "../src/assets/closed-1.svg"
                  }
                  alt="Toggle visibility"
                  onClick={() => handlePasswordToggle(setShowNewPassword)}
                  className="icon-eye absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="flex mb-4 justify-center gap-4 items-center">
            <div className="">
              <Button
                variant="default"
                size="default"
                type="submit"
                className="mb-1"
              >
                Change Password
              </Button>
            </div>
            <div className="">
              <label className="form-label">Confirm New Password</label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your new password"
                  className="relative pr-10"
                  value={confirmPassword}
                  onChange={handleInputChange(setConfirmPassword)}
                />
                <img
                  src={
                    showConfirmPassword
                      ? "../src/assets/opened-1.svg"
                      : "../src/assets/closed-1.svg"
                  }
                  alt="Toggle visibility"
                  onClick={() => handlePasswordToggle(setShowConfirmPassword)}
                  className="icon-eye absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-4">
        <h2 className="text-3xl mb-6 text-left text-title font-roboto">
          Game History
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderedGames}
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center">
        <h2 className="text-3xl mb-4 text-title">
          Ready to share your creation with us?
        </h2>
        <Button
          variant="default"
          size="default"
          className="w-42 h-12 text-lg mt-6"
          onClick={handleSubmitGame}
        >
          Submit Your Game
        </Button>
      </div>
      <Blob className="right-[5rem] bottom-[-10rem] opacity-20" />
    </section>
  );
};

export default Account;

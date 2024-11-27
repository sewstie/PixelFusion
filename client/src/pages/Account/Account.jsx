import React, { useState, useEffect, useMemo } from "react";
import { Button } from "../../components/UI/button";
import Blob from "../../components/UI/Blob";
import { fetchGames, BASE_URL } from "@/api/api";
import Block from "../Home/components/UI/Block";
import accountIcon from "../../assets/account.svg";
import { Input } from "@/components/ui/input";

const Account = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [games, setGames] = useState([]);
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const getGames = async () => {
      const gamesData = await fetchGames();
      setGames(gamesData);
    };
    getGames();
  }, []);

  const handlePasswordToggle = (setter) => {
    setter((prev) => !prev);
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match.");
    } else {
      setPasswordError("");
    }
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
    <section className="container mx-auto pt-32 pb-20 relative overflow-hidden">
      <Blob className="left-10" />
      <div className="p-8">
        <div className="flex justify-between">
          <div className="flex items-center mb-6">
            <img
              src={accountIcon}
              alt="Account Icon"
              className="w-28 h-28 mr-8"
            />
            <div>
              <h2 className="text-4xl  title">
                Hello <span className="underline text-focus">user</span>
              </h2>
              <p className="text text-xl mt-5">
                You can see the history of games you played.
              </p>
            </div>
          </div>
          <Button
            variant="default"
            size="default"
            className="w-32 h-12 text-lg mr-12 my-auto"
            type="submit"
          >
            Log Out
          </Button>
        </div>
      </div>
      <form onSubmit={handlePasswordChange}>
        <div className="flex mb-4 justify-center gap-16">
          <div className="w-1/3">
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
          <div className="w-1/3">
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
        <div className="flex mb-4 justify-center gap-16 align-middle">
          <div className="w-1/3 flex items-end">
            <Button
              variant="default"
              size="default"
              className="w-full h-12 text-lg"
              type="submit"
            >
              Change Password
            </Button>
          </div>
          <div className="w-1/3">
            <label className="form-label">Confirm Password</label>
            <Input
              type="password"
              placeholder="Confirm your new password"
              value={confirmPassword}
              onChange={handleInputChange(setConfirmPassword)}
            />
          </div>
        </div>
        {passwordError && (
          <p className="error-text text-center mt-2">{passwordError}</p>
        )}
      </form>
      <div className="mt-12">
        <h2 className="text-3xl mb-6 text-left text-title font-roboto">
          Game History
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderedGames}
        </div>
      </div>
    </section>
  );
};

export default Account;

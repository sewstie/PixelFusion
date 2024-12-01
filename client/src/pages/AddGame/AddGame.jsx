import React, { useState, useEffect } from "react";
import Blob from "../../components/UI/Blob";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/UI/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import backArrowIcon from "../../assets/back-arrow.svg";

const AddGame = () => {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [unityFile, setUnityFile] = useState(null);
  const [pictureName, setPictureName] = useState("No file chosen");
  const [trailerName, setTrailerName] = useState("No file chosen");
  const [unityFileName, setUnityFileName] = useState("No file chosen");

  const { currentUser, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !currentUser) {
      navigate("/login");
    }
  }, [currentUser, loading, navigate]);

  const isEmailValid = () => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const isTitleValid = () => {
    return title.length <= 20;
  };

  const isDescriptionValid = () => {
    return description.length <= 60;
  };

  const isTrailerValid = () => {
    return trailer && trailer.type === "video/mp4";
  };

  const isUnityFileValid = () => {
    return unityFile && unityFile.name.endsWith(".unitypackage");
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    setPicture(file);
    setPictureName(file ? file.name : "No file chosen");
  };

  const handleTrailerChange = (e) => {
    const file = e.target.files[0];
    setTrailer(file);
    setTrailerName(file ? file.name : "No file chosen");
  };

  const handleUnityFileChange = (e) => {
    const file = e.target.files[0];
    setUnityFile(file);
    setUnityFileName(file ? file.name : "No file chosen");
  };

  return (
    <div className="container mx-auto pt-32 pb-20 relative overflow-hidden">
      <Blob className="left-[5rem] opacity-15 top-20" />
      <h2 className="title text-3xl">Your Game Submission</h2>
      <h4 className="text text-lg pt-3">
        Fill out the form to submit your game
      </h4>
      <div className="mt-10 flex justify-between">
        <div className="w-5/12 ml-1">
          <label className="form-label">Email</label>
          <Input
            type="text"
            placeholder="Enter your email"
            className={` ${email && !isEmailValid() ? "border-red-500" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {email && !isEmailValid() && (
            <p className="error-text">Please enter a valid email address.</p>
          )}
          <label className="form-label mt-6">Title (20 characters max)</label>
          <Input
            type="text"
            placeholder="Title of your game"
            className={`${title && !isTitleValid() ? "border-red-500" : ""}`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {title && !isTitleValid() && (
            <p className="error-text">Title must be 20 characters or less.</p>
          )}
          <label className="form-label mt-6">
            Description (60 characters max)
          </label>
          <Input
            type="text"
            placeholder="Description of your game"
            className={`${
              description && !isDescriptionValid() ? "border-red-500" : ""
            }`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {description && !isDescriptionValid() && (
            <p className="error-text">
              Description must be 60 characters or less.
            </p>
          )}
        </div>
        <div className="w-5/12 mr-1">
          <label className="form-label">Cover Picture</label>
          <div className="relative">
            <Input
              type="text"
              value={pictureName}
              readOnly
              onClick={() => document.getElementById("pictureInput").click()}
              className="cursor-pointer text-gray-400 text-center"
            />
            <input
              id="pictureInput"
              type="file"
              accept="image/*"
              onChange={handlePictureChange}
              className="hidden"
            />
          </div>
          <label htmlFor="trailer" className="form-label mt-6">
            Trailer Video (MP4 format)
          </label>
          <div className="relative">
            <Input
              type="text"
              value={trailerName}
              readOnly
              onClick={() => document.getElementById("trailerInput").click()}
              className="cursor-pointer text-gray-400 text-center"
            />
            <input
              id="trailerInput"
              type="file"
              accept="video/mp4"
              onChange={handleTrailerChange}
              className={`hidden ${
                trailer && !isTrailerValid() ? "border-red-500" : ""
              }`}
            />
          </div>
          {trailer && !isTrailerValid() && (
            <p className="error-text">Please upload a valid MP4 video.</p>
          )}

          <label htmlFor="unityFile" className="form-label mt-6">
            Unity File (.unitypackage)
          </label>
          <div className="relative">
            <Input
              type="text"
              value={unityFileName}
              readOnly
              onClick={() => document.getElementById("unityFileInput").click()}
              className="cursor-pointer text-gray-400 text-center"
            />
            <input
              id="unityFileInput"
              type="file"
              accept=".unitypackage"
              onChange={handleUnityFileChange}
              className={`hidden ${
                unityFile && !isUnityFileValid() ? "border-red-500" : ""
              }`}
            />
          </div>
          {unityFile && !isUnityFileValid() && (
            <p className="error-text">
              Please upload a valid Unity package file.
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-between">
        <Button variant="default" size="lg" className="mt-10 text-lg">
          Submit Game
        </Button>
        <Button
          variant="outline"
          size="default"
          className="mt-6 text-md border-focus text-white bg-transparent hover:bg-transparent hover:text-white"
          onClick={() => navigate("/account")}
        >
          Go Back
          <img
            src={backArrowIcon}
            alt="Go Back"
            className="w-4 h-4 mr-2 transform -scale-x-100"
          />
        </Button>
      </div>
    </div>
  );
};

export default AddGame;

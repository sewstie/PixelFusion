import React, { useState } from "react";
import Blob from "../../components/UI/Blob";
import { Input } from "@/components/ui/input";

const AddGame = () => {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [unityFile, setUnityFile] = useState(null);

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
    setPicture(e.target.files[0]);
  };

  const handleTrailerChange = (e) => {
    setTrailer(e.target.files[0]);
  };

  const handleUnityFileChange = (e) => {
    setUnityFile(e.target.files[0]);
  };

  return (
    <div className="container mx-auto pt-32 pb-20 relative overflow-hidden">
      <h2 className="title text-3xl">Your Game Submission</h2>
      <h4 className="text text-lg pt-3">
        Fill out the form to submit your game
      </h4>
      <div className="mt-10 flex justify-between">
        <div className="w-5/12">
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
        <div className="w-5/12">
          <label className="form-label">Cover Picture</label>
          <Input
            id="picture"
            type="file"
            accept="image/*"
            onChange={handlePictureChange}
          />
          <label htmlFor="trailer" className="form-label mt-6">
            Trailer Video (MP4 format)
          </label>
          <Input
            id="trailer"
            type="file"
            accept="video/mp4"
            onChange={handleTrailerChange}
            className={`${
              trailer && !isTrailerValid() ? "border-red-500" : ""
            }`}
          />
          {trailer && !isTrailerValid() && (
            <p className="error-text">Please upload a valid MP4 video.</p>
          )}

          <label htmlFor="unityFile" className="form-label mt-6">
            Unity File (.unitypackage)
          </label>
          <Input
            id="unityFile"
            type="file"
            accept=".unitypackage"
            onChange={handleUnityFileChange}
            className={`${
              unityFile && !isUnityFileValid() ? "border-red-500" : ""
            }`}
          />
          {unityFile && !isUnityFileValid() && (
            <p className="error-text">
              Please upload a valid Unity package file.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddGame;

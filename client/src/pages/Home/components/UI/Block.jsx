import React from "react";
import { useNavigate } from "react-router-dom";

const Block = ({ title, link, backgroundImage }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div
      className="gradient-border flex flex-col justify-end w-96 h-56 cursor-pointer relative"
      onClick={handleClick}
    >
      <img
        src={backgroundImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 p-3">
        <h4 className="title text-2xl">{title}</h4>
      </div>
    </div>
  );
};

export default Block;

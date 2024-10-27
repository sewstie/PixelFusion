import React from "react";

const Block = ({ title, onClick }) => {
  return (
    <div className="gradient-border flex flex-col justify-end w-96 h-56">
      <h4 className="p-3 title">{title}</h4>
    </div>
  );
};

export default Block;

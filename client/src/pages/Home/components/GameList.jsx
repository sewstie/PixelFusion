import React, { useState, useEffect } from "react";

import Block from "./UI/Block";

const GameList = () => {
  return (
    <div className="container mx-auto py-36">
      <Block title="Test 1"></Block>
      <Block title="Test 2"></Block>
      <Block title="Test 3"></Block>
    </div>
  );
};

export default GameList;

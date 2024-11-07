import React from "react";
import GameList from "../Home/components/GameList";
import "./browse.css";

const Browse = () => {
  return (
    <section className="container mx-auto pt-32 pb-12">
      <h3 className="title text-center text-4xl pb-8">All Games</h3>
      <GameList />
    </section>
  );
};

export default Browse;

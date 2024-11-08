import React from "react";
import GameList from "../Home/components/GameList";
import Blob from "../../components/UI/Blob";

const Browse = () => {
  return (
    <section className="container mx-auto pt-32 pb-12">
      <Blob />
      <h3 className="title text-center text-4xl pb-8">All Games</h3>
      <GameList />
    </section>
  );
};

export default Browse;

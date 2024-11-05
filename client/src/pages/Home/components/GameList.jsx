import React, { useState, useEffect } from "react";
import Block from "./UI/Block";
import { fetchGames, BASE_URL } from "@/api/api";

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      try {
        const gamesData = await fetchGames();
        setGames(gamesData);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };
    getGames();
  }, []);

  return (
    <section className="container mx-auto py-20">
      <h3 className="title pb-12 text-4xl">Our Games</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <Block
            key={game.id || game.slug}
            title={game.Title || "No Title Available"}
            backgroundImage={
              game.backgroundImage
                ? `${BASE_URL}${game.backgroundImage.url}`
                : ""
            }
            link={`/game/${game.slug || ""}`}
          />
        ))}
      </div>
    </section>
  );
};

export default GameList;

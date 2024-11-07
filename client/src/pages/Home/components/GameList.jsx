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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map((game) => (
        <Block
          key={game.id || game.slug}
          title={game.Title || "No Title Available"}
          backgroundImage={
            game.backgroundImage ? `${BASE_URL}${game.backgroundImage.url}` : ""
          }
          link={`/game/${game.slug || ""}`}
        />
      ))}
    </div>
  );
};

export default GameList;

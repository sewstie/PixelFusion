import React, { useState, useEffect, useMemo } from "react";
import Block from "./UI/Block";
import { fetchGames, BASE_URL } from "@/api/api";

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      const gamesData = await fetchGames();
      setGames(gamesData);
    };
    getGames();
  }, []);

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {renderedGames}
    </div>
  );
};

export default GameList;

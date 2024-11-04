import React, { useState, useEffect } from "react";
import Block from "./UI/Block";
import { fetchGames } from "@/api/api";

const GameList = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGames = async () => {
      setLoading(true);
      try {
        const gamesData = await fetchGames();
        console.log(gamesData);
        setGames(gamesData);
      } catch (error) {
        console.error("Error fetching games:", error);
      } finally {
        setLoading(false);
      }
    };
    getGames();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="container mx-auto py-24">
      <h3 className="title pb-12 text-4xl">Our Games</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map((game) => (
          <Block
            key={game.id || game.slug}
            title={game.Title || "No Title Available"}
            backgroundImage={
              game.backgroundImage && game.backgroundImage.data
                ? game.backgroundImage.data.attributes.url
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

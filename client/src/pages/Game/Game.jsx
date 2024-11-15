import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchData, BASE_URL } from "@/api/api";
import { Button } from "@/components/UI/button";

const Game = () => {
  const { slug } = useParams();
  const [game, setGame] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getGame = async () => {
      try {
        const gameData = await fetchData(
          `games?filters[slug][$eq]=${slug}&populate=*`
        );
        if (gameData && gameData.length > 0) {
          setGame(gameData[0]); // Use the game object directly
        } else {
          setGame(null);
        }
      } catch (error) {
        console.error("Error fetching game data:", error);
        setGame(null);
      }
    };
    getGame();
  }, [slug]);

  if (game === null) {
    return <p>Game not found.</p>;
  }

  const { Title, Description, backgroundImage, UnityFile } = game;
  const unityGameUrl = UnityFile ? `${BASE_URL}${UnityFile.url}` : null;

  return (
    <>
      {unityGameUrl ? (
        <iframe
          src={unityGameUrl}
          title={Title}
          className="w-full h-screen pt"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="w-full h-screen bg-white flex items-center justify-center">
          <p className="text-xl">Not found</p>
        </div>
      )}
      <section className="container mx-auto pt-4 pb-12">
        <h1 className="title text-center text-4xl pb-8">{Title}</h1>
        {backgroundImage && backgroundImage.data && (
          <img
            src={`${BASE_URL}${backgroundImage.data.attributes.url}`}
            alt={Title}
            className="w-full h-auto"
          />
        )}
        <p className="text mt-4">{Description}</p>
        {/* Add more game details here */}
        <Button onClick={() => navigate("/")}>Back to Home</Button>
      </section>
    </>
  );
};

export default Game;

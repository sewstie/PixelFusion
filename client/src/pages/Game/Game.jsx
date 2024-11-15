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
          setGame(gameData[0]);
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
          className="w-full min-h-[600px] h-screen pt"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="w-full min-h-[600px] h-screen bg-white flex items-center justify-center">
          <p className="text-xl">Not found</p>
        </div>
      )}
      <section className="container mx-auto pb-12 flex justify-between py-12">
        <div className="flex flex-col">
          <h1 className="title text-4xl">{Title}</h1>
          <p className="text text-xl mt-4">{Description}</p>
        </div>
        <div className="flex flex-col justify-center">
          <Button className="w-44 h-14 text-lg" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </section>
    </>
  );
};

export default Game;

import React, { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/UI/button";
import { fetchGames, BASE_URL } from "@/api/api";
import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { useNavigate } from "react-router-dom";

export function CarouselHero() {
  const [games, setGames] = useState([]);
  const emblaRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getGames = async () => {
      const gamesData = await fetchGames();
      setGames(gamesData);
    };
    getGames();
  }, []);

  useEffect(() => {
    if (emblaRef.current && games.length > 0) {
      const emblaInstance = EmblaCarousel(
        emblaRef.current,
        { loop: true, watchDrag: false },
        [Autoplay({ delay: 2000 })]
      );
      return () => emblaInstance.destroy();
    }
  }, [games]);

  const handleClick = (slug) => {
    if (slug) {
      navigate(`/game/${slug}`);
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <div className="w-screen h-screen overflow-hidden" ref={emblaRef}>
          <CarouselContent className="w-[101.5vw] h-screen relative">
            {games.map((game) => {
              const title = game.Title || "No Title";
              const description = game.Description || "No Description";
              const videoUrl = game.Gameplay?.hash
                ? `${BASE_URL}/uploads/${game.Gameplay.hash}.mp4`
                : null;
              const slug = game.slug || "";

              return (
                <CarouselItem
                  key={game.id}
                  className="w-screen h-screen flex-shrink-0 relative z-10"
                >
                  {videoUrl ? (
                    <video
                      className="h-full object-cover w-full"
                      src={videoUrl}
                      autoPlay
                      loop
                      muted
                    ></video>
                  ) : (
                    <div className="h-full flex items-center justify-center bg-gray-200">
                      <p>Video not available</p>
                    </div>
                  )}
                  <div className="absolute top-0 left-0 z-20 w-full h-full">
                    <div className="container mx-auto flex flex-col justify-end h-full pb-12">
                      <h1 className="title text-5xl">{title}</h1>
                      <div className="flex justify-between mt-4">
                        <p className="text text-2xl">{description}</p>
                        <Button
                          className="w-36 h-12 text-xl"
                          onClick={() => handleClick(slug)}
                        >
                          Play
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </div>
        <div className="container absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between">
          <CarouselPrevious className="w-14 h-14 text-title hover:text-focus bg-transparent hover:bg-transparent border-focus hover:border-title transition-all" />
          <CarouselNext className="w-14 h-14 text-title hover:text-focus bg-transparent hover:bg-transparent border-focus hover:border-title transition-all" />
        </div>
      </Carousel>
    </div>
  );
}

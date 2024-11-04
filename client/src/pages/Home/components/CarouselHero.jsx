import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "@/components/UI/button";
import { fetchCarousels } from "@/api/api";

export const BASE_URL = "http://localhost:1337";

export function CarouselHero() {
  const [carousels, setCarousels] = useState([]);

  useEffect(() => {
    const getCarousels = async () => {
      const carouselData = await fetchCarousels();
      setCarousels(carouselData);
    };
    getCarousels();
  }, []);

  return (
    <Carousel className="w-srceen h-screen overflow-hidden relative">
      <CarouselContent className="w-[101.5vw] h-screen relative">
        {carousels.map((carousel) => {
          const title = carousel.Title || "No Title";
          const description = carousel.Description || "No Description";
          const videoUrl = carousel.Gameplay?.hash
            ? `${BASE_URL}/uploads/${carousel.Gameplay.hash}.mp4`
            : null;

          return (
            <CarouselItem
              key={carousel.id}
              className="pl-0 w-sreen h-screen flex-shrink-0 relative z-10"
            >
              {videoUrl ? (
                <video
                  className="h-full object-cover"
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
                    <Button className="w-36 h-12 text-xl">Play</Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className="container absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between">
        <CarouselPrevious className="w-14 h-14 text-title hover:text-focus bg-transparent hover:bg-transparent border-focus hover:border-title transition-all" />
        <CarouselNext className="w-14 h-14 text-title hover:text-focus bg-transparent hover:bg-transparent border-focus hover:border-title transition-all" />
      </div>
    </Carousel>
  );
}

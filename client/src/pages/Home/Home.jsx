import { CarouselHero } from "./components/CarouselHero";
import GameList from "./components/GameList";

const Home = () => {
  return (
    <>
      <CarouselHero />
      <section className="container mx-auto py-16">
        <h3 className="title text-4xl pb-8">Our Games</h3>
        <GameList />
      </section>
    </>
  );
};

export default Home;

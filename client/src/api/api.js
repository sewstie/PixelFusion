import axios from "axios";

export const BASE_URL = "http://localhost:1337";

export const fetchCarousels = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/carousels?populate=Gameplay`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching carousels:", error);
    return [];
  }
};

export const fetchGames = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/games?populate=backgroundImage&fields=Title,slug&pagination[limit]=9`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching games:", error);
    return [];
  }
};

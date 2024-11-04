import axios from "axios";

export const BASE_URL = "http://localhost:1337/api";

export const fetchCarousels = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/carousels?populate=Gameplay`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching carousels:", error);
    return [];
  }
};

export const fetchGames = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/games?populate=backgroundImage&fields=Title,slug&pagination[limit]=9`
    );
    console.log("Fetched games data:", response.data.data); // Log the fetched data
    return response.data.data;
  } catch (error) {
    console.error("Error fetching games:", error);
    return [];
  }
};

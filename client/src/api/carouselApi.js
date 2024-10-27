import axios from "axios";

export const BASE_URL = "http://localhost:1337/api";

export const fetchCarousels = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/carousels?populate=Gameplay`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching games:", error);
    return [];
  }
};

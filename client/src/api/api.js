import axios from "axios";

export const BASE_URL = "http://localhost:1337";

export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/${endpoint}`);
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return [];
  }
};

export const fetchGames = async () => {
  return await fetchData(
    "games?populate[]=Gameplay&populate[]=backgroundImage&fields[]=Title&fields[]=Description&fields[]=slug&pagination[limit]=9"
  );
};

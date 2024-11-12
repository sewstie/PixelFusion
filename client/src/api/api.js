import axios from "axios";

export const BASE_URL = "http://localhost:1337";

const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/${endpoint}`);
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return [];
  }
};

// Remove the fetchCarousels function
// export const fetchCarousels = async () => {
//   return await fetchData('carousels?populate=Gameplay');
// };

export const fetchGames = async () => {
  return await fetchData(
    "games?populate[0]=Gameplay&populate[1]=backgroundImage&fields[0]=Title&fields[1]=Description&fields[2]=slug&pagination[limit]=9"
  );
};

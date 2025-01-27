import axios from "axios";
import Photo from "../models/Photo";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getPhotos = async (albumId: string) => {
  try {
    const response = await axios.get<Photo[]>(`${BASE_URL}/photos`);
    const manageResponse = response.data
      .filter((photo) => photo.albumId === Number(albumId)) // Filter here
      .map((photo) => ({
        ...photo,
        url: "https://placehold.co/150",
      }));

    return manageResponse;
  } catch (error) {
    console.error(`Error: ${error}`);
    return [];
  }
};

import Photo from "@/models/Photo";
import axios from "axios";

const BASE_URL = "http://localhost:4000/api";

export const getPhotos = async (albumId: string) => {
  try {
    const response = await axios.get<Photo[]>(
      `${BASE_URL}/album/${albumId}/photos`
    );
    return response.data;
  } catch (error) {
    console.error(`Error: ${error}`);
    return [];
  }
};

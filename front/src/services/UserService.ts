import User from "@/models/User";
import axios from "axios";

const BASE_URL = "http://localhost:4000/api";

export const getUsers = async () => {
  try {
    const response = await axios.get<User[]>(`${BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error(`Error: ${error}`);
    return [];
  }
};

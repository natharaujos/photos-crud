import axios from "axios";
import User from "../models/User";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
  try {
    const response = await axios.get<User[]>(`${BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error(`Error: ${error}`);
    return [];
  }
};

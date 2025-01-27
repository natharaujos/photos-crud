import express from "express";
import { getUsers } from "../services/UserService";

const photoController = express.Router();

photoController.get("/photo", async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

export default photoController;

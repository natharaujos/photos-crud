import express from "express";
import { getUsers } from "../services/UserService";

const userController = express.Router();

userController.get("/users", async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

export default userController;

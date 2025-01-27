import express from "express";
import { getAlbumByUserId, getUsers } from "../services/UserService";

const userController = express.Router();

userController.get("/users", async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

userController.get("/users/:userId/album", async (req, res) => {
  const { userId } = req.params;
  try {
    const album = await getAlbumByUserId(userId);
    res.send(album);
  } catch (error) {
    console.error(`Error: ${error}`);
    res.status(500).send({ error: "Erro ao buscar o álbum" });
  }
});

export default userController;

import express from "express";
import { getPhotos } from "../services/PhotoService";

const photoController = express.Router();

photoController.get("/album/:albumId/photos", async (req, res) => {
  const { albumId } = req.params;
  const photos = await getPhotos(albumId);
  res.send(photos);
});

export default photoController;

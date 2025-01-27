import express from "express";
import cors from "cors";
import userController from "./controllers/UserController";
import photoController from "./controllers/PhotoController";

const PORT = process.env.PORT || 4000;

const HOSTNAME = process.env.HOSTNAME || "http://localhost";

const app = express();

app.get("/", (req, res) => {
  res.send("Bem-vindo!");
});

app.use(cors());

app.use("/api", userController);
app.use("/api", photoController);

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`);
});

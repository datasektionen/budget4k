import express from "express";
import api from "./api";

const app = express();
const port = 3000;

app.use("/v1", api);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

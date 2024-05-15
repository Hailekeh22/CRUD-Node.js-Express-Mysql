import express from "express";
import { port } from "./config.js";

const app = express();

app.get("/", (req, res) => {
  res.send("<h2>Welcome to this Application</h2>");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

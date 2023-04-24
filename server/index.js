import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
const app = express();

// app  middleware */

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

// routes */

app.get("/", (req, res) => {
  try {
    res.json("Hiii SErver");
  } catch (e) {
    res.json(e);
  }
});

app.listen(process.env.PORT || 5050, () => {
  console.log("Server Connected!");
});

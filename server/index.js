import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import router from "./router/route.js";
import connect from "./db/connection.js";

const app = express();

// app  middleware */

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

// routes */
app.use("/api", router);

app.get("/", (req, res) => {
  try {
    res.json("Hiii SErver");
  } catch (e) {
    res.json(e);
  }
});

connect()
  .then(() => {
    try {
      app.listen(process.env.PORT || 5050, () => {
        console.log("Server Connected!");
      });
    } catch (e) {
      console.log("Can not connect to server");
    }
  })
  .catch((err) => {
    console.log(err);
  });

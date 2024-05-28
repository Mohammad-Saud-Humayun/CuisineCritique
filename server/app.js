import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { addreview, getRestaurantByID, getRestaurants } from "./controllers/restaurant.controller.js";



const app = express();
dotenv.config();

app.use(cors({ origin: "http://localhost:3000" }));

// BODY PARSER
app.use(express.json({ limit: "54mb" }));



app.get("/api/resaturant", getRestaurants);
app.get("/api/resaturant/:id", getRestaurantByID);
app.post("/api/postreview", addreview);



app.use((err, req, res, next) => {
    console.error(err.stack);
    console.log(err)
    console.log("hello")
    res.status(500).json({ error: "Something went wrong" });
});

export default app;
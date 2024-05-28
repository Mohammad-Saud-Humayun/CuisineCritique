import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import {
    getRestaurantByID,
    getRestaurants,
} from "./controllers/restaurant.controller.js";

const app = express();
dotenv.config();

app.use(cors({ origin: process.env.ORIGIN }));

// BODY PARSER
app.use(express.json({ limit: "54mb" }));

app.get("/api/resaturant", getRestaurants);
app.get("/api/resaturant/:id", getRestaurantByID);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong" });
});

export default app;

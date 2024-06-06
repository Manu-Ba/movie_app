import express from "express";
import {
  getAllFavorites,
  getSingleFavorite,
  addFavorite,
  deleteFavorite,
  rateFavorite,
  addComment,
} from "./services.js";

const router = express.Router();

router
  .get("/fav", getAllFavorites)
  .get("/fav/:id", getSingleFavorite)
  .post("/fav", addFavorite)
  .delete("/fav/:id", deleteFavorite)
  .patch("/fav/:id", rateFavorite)
  .post("/fav/:id/comment", addComment);

export { router };

import express from "express";

import {
  deleteOne,
  getAll,
  getOne,
  postOne,
  updateOne,
  postOnePhoto,
} from "../controller/albumController.js";
import validate from "../middleware/validate.js";
import { getSchema, postSchema } from "./album.schema.js";
// set photoRouter
const albumRoute = express.Router();
// set routes in root
albumRoute
  .route("/")
  .get(validate(getSchema), getAll)
  .post(validate(postSchema), postOne);

albumRoute.route("/album/:id").post(postOnePhoto);

// set routes on param
albumRoute.route("/:id").get(getOne).put(updateOne).delete(deleteOne);

export default albumRoute;

import express from "express";

import {
  deleteOne,
  getAll,
  getOne,
  postOne,
  updateOne,
} from "../controller/photoController.js";
import validate from "../middleware/validate.js";
import { getSchema, postSchema } from "./photo.schema.js";

// set photoRouter
const photoRouter = express.Router();
// set routes in root
photoRouter
  .route("/")
  .get(validate(getSchema), getAll)
  .post(validate(postSchema), postOne);
// photoRouter.route("/", validate(getSchema)).get(getAll);

// set routes on param
photoRouter.route("/:id").get(getOne).put(updateOne).delete(deleteOne);

export default photoRouter;

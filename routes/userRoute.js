import express from "express";
import {
  deleteOne,
  getAll,
  getOne,
  postOne,
  updateOne,
} from "../controller/userController.js";
import checkPWD from "../middleware/checkPWD.js";
import hashPWD from "../middleware/hashPWD.js";
// set userRouter
const userRouter = express.Router();
// set routes in root
userRouter.route("/").get(getAll);
userRouter.route("/register").post(hashPWD, postOne);
userRouter.route("/login").post(checkPWD, postOne);
// set routes on param
userRouter.route("/:id").get(getOne).put(updateOne).delete(deleteOne);

export default userRouter;

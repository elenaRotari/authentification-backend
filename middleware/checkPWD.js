import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
export default async (req, res, next) => {
  try {
    if (!req.body.password) {
      return res.status(404).send({ message: "password must be provided" });
    } else {
      const user = await User.findOne({ email: req.body.email });
      const verify = await bcrypt.compare(req.body.password, user.password);

      if (verify) {
        req.token = jwt.sign({ id: user._id }, process.env.JWT);

        next();
      } else {
        return res.status(404).send({ message: "wrong user data" });
      }
    }
  } catch (error) {
    res.status(404).send({ message: "error" });
  }
};

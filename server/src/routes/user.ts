import * as express from "express";
import { UserController } from "../controllers/UserController";
import jwt from "jsonwebtoken";
import { ERROR_MESSAGE } from "../common/errorMessages";

const router: express.Router = express.Router();
const controller = new UserController();

const jwtCheck = (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      res.status(403).json(err ? err : { message: ERROR_MESSAGE.WRONG_TOKEN });
    } else {
      req.tokenData = decoded;
      next();
    }
  });
};

router.post("/signup", controller.signupController);

router.post("/signin", controller.signinController);

router.post("/comment", jwtCheck, controller.addCommentController);

router.get("/comment", controller.getCommentController);

router.delete("/comment", controller.deleteCommentController);

export default router;

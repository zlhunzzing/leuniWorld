import * as express from "express";
import { userController } from "../controllers/user";

const router: express.Router = express.Router();
const controller = new userController();

router.post("/signup", controller.signupController);

router.post("/signin", controller.signinController);

export default router;

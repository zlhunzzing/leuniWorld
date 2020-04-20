import * as express from "express";
import { mainController } from "../controllers/main";

const router: express.Router = express.Router();
const controller = new mainController();

router.post("/signup", controller.signUpController);

export default router;

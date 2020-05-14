import { Request, Response } from "express";
import { userService } from "../services/user";

const service = new userService();

export class userController {
  async signUpController(req: Request, res: Response): Promise<void> {
    try {
      await service.signupService(req.body);
      res.status(201).end();
    } catch (err) {
      res.status(409).send(err.message);
    }
  }
}
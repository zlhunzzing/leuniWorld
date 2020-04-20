import { Request, Response } from "express";
import { mainService } from "../services/main";

const service = new mainService();

export class mainController {
  async signUpController(req: Request, res: Response): Promise<void> {
    try {
      await service.signupService(req.body);
      res.status(201).end();
    } catch (err) {
      res.status(409).send(err.message);
    }
  }
}

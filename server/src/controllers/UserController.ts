import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { TokenReq } from "../common/interfaces";

const service = new UserService();

export class UserController {
  async signupController(req: Request, res: Response): Promise<void> {
    try {
      await service.signupService(req.body);
      res.status(201).end();
    } catch (err) {
      res.status(409).send(err.message);
    }
  }

  async signinController(req: Request, res: Response): Promise<void> {
    try {
      const result = await service.signinService(req.body);
      res.cookie("user", result);
      res.status(200).json(result);
    } catch (err) {
      res.status(409).send(err.message);
    }
  }

  async addCommentController(req: TokenReq, res: Response): Promise<void> {
    try {
      const result = await service.addCommentService(req.body, req.tokenData);
      res.status(201).json(result);
    } catch (err) {
      res.status(409).send(err.message);
    }
  }

  async getCommentController(req: Request, res: Response): Promise<void> {
    try {
      const result = await service.getCommentService();
      res.status(200).json(result);
    } catch (err) {
      res.status(409).send(err.message);
    }
  }

  async deleteCommentController(req: Request, res: Response): Promise<void> {
    try {
      const result = await service.deleteCommentService(req.body);
      res.status(200).json(result);
    } catch (err) {
      res.status(409).send(err.message);
    }
  }
}

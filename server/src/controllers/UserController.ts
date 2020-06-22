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

  async addGuestbookController(req: TokenReq, res: Response): Promise<void> {
    try {
      const result = await service.addGuestbookService(req.body, req.tokenData);
      res.status(201).json(result);
    } catch (err) {
      res.status(409).send(err.message);
    }
  }

  async getGuestbookController(req: Request, res: Response): Promise<void> {
    try {
      const result = await service.getGuestbookService();
      res.status(200).json(result);
    } catch (err) {
      res.status(409).send(err.message);
    }
  }

  async deleteGuestbookController(req: Request, res: Response): Promise<void> {
    try {
      const result = await service.deleteGuestbookService(req.body);
      res.status(200).json(result);
    } catch (err) {
      res.status(409).send(err.message);
    }
  }

  async addFreeboardController(req: TokenReq, res: Response): Promise<void> {
    try {
      const result = await service.addFreeboardService(req.body, req.tokenData);
      res.status(201).json(result);
    } catch (err) {
      res.status(409).send(err.message);
    }
  }

  async getFreeboardController(req: Request, res: Response): Promise<void> {
    try {
      const result = await service.getFreeboardService();
      res.status(200).json(result);
    } catch (err) {
      res.status(409).send(err.message);
    }
  }

  async getBoardviewController(req: Request, res: Response): Promise<void> {
    try {
      const result = await service.getBoardviewService(req.params.postId);
      res.status(200).json(result);
    } catch (err) {
      res.status(409).send(err.message);
    }
  }

  async putBoardviewController(req: Request, res: Response): Promise<void> {
    try {
      const result = await service.putBoardviewService(
        req.body,
        req.params.postId
      );
      res.status(200).json(result);
    } catch (err) {
      res.status(409).send(err.message);
    }
  }
}

import { UserModel, GuestbookModel, FreeboardModel } from "../models";
import dotenv from "dotenv";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const userModel = new UserModel();
const guestbookModel = new GuestbookModel();
const freeboardModel = new FreeboardModel();

interface signupData {
  email;
  password;
}

interface signinData {
  email;
  password;
}

export class UserService {
  async signupService(userInfo: signupData): Promise<void> {
    const shasum = crypto.createHmac("sha512", process.env.CRYPTO_SECRET_KEY);
    shasum.update(userInfo.password);
    userInfo.password = shasum.digest("hex");

    try {
      await userModel.findOneWithEmail(userInfo.email);
      await userModel.save(userInfo);
    } catch (err) {
      throw new Error(err);
    }
  }

  async signinService(userInfo: signinData): Promise<object> {
    const shasum = crypto.createHmac("sha512", process.env.CRYPTO_SECRET_KEY);
    shasum.update(userInfo.password);
    userInfo.password = shasum.digest("hex");

    try {
      const result = await userModel.findOneAccount(
        userInfo.email,
        userInfo.password
      );

      const token = jwt.sign(
        {
          id: result.id,
          email: result.email,
          username: result.username,
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );
      return { token: token, id: result.id };
    } catch (err) {
      throw new Error(err);
    }
  }

  async getGuestbookService(): Promise<object> {
    return { guestbooks: await guestbookModel.findAll() };
  }

  async addGuestbookService(guestbookData, tokenData): Promise<object> {
    const insertData = {
      ...guestbookData,
      userId: tokenData.id,
      username: tokenData.username,
    };
    await guestbookModel.save(insertData);

    return await this.getGuestbookService();
  }

  async deleteGuestbookService(reqBody): Promise<object> {
    const guestbook = await guestbookModel.findWithId(reqBody.id);
    guestbook.isDeleted = true;
    await guestbookModel.save(guestbook);

    return await this.getGuestbookService();
  }

  async getFreeboardService(): Promise<object> {
    return { freeboards: await freeboardModel.findAll() };
  }

  async addFreeboardService(freeboradData, tokenData): Promise<object> {
    const insertData = {
      ...freeboradData,
      userId: tokenData.id,
      username: tokenData.username,
    };
    await freeboardModel.save(insertData);

    return await this.getFreeboardService();
  }

  async getBoardviewService(postId): Promise<object> {
    return { boardview: await freeboardModel.findWithId(postId) };
  }

  async putBoardviewService(boardviewData, postId): Promise<object> {
    const post = await freeboardModel.findWithId(postId);
    const insertData = {
      ...post,
      ...boardviewData,
    };
    await freeboardModel.save(insertData);

    return await this.getBoardviewService(postId);
  }
}

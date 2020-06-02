import { UserModels, GuestbookModels } from "../models";
import dotenv from "dotenv";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const userModels = new UserModels();
const guestbookModels = new GuestbookModels();

interface signupData {
  email;
  password;
}

interface signinData {
  email;
  password;
}

export class userService {
  async signupService(userInfo: signupData): Promise<void> {
    const shasum = crypto.createHmac("sha512", process.env.CRYPTO_SECRET_KEY);
    shasum.update(userInfo.password);
    userInfo.password = shasum.digest("hex");

    try {
      await userModels.findOneWithEmail(userInfo.email);
      await userModels.save(userInfo);
    } catch (err) {
      throw new Error(err);
    }
  }

  async signinService(userInfo: signinData): Promise<void> {
    const shasum = crypto.createHmac("sha512", process.env.CRYPTO_SECRET_KEY);
    shasum.update(userInfo.password);
    userInfo.password = shasum.digest("hex");

    try {
      const result = await userModels.findOneAccount(
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
      return token;
    } catch (err) {
      throw new Error(err);
    }
  }

  async addCommentService(commentData, tokenData): Promise<object> {
    const insertData = {
      ...commentData,
      userId: tokenData.id,
      username: tokenData.username,
    };

    await guestbookModels.save(insertData);

    const comments = await guestbookModels.findAll();

    return { comments };
  }
}

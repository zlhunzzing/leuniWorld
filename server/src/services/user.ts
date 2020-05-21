import { userModels } from "../models/user";
import dotenv from "dotenv";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const model = new userModels();

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
      await model.findOneWithEmail(userInfo.email);
      await model.save(userInfo);
    } catch (err) {
      throw new Error(err);
    }
  }

  async signinService(userInfo: signinData): Promise<void> {
    const shasum = crypto.createHmac("sha512", process.env.CRYPTO_SECRET_KEY);
    shasum.update(userInfo.password);
    userInfo.password = shasum.digest("hex");

    try {
      await model.findOneAccount(userInfo.email, userInfo.password);
      const token = jwt.sign(
        {
          email: userInfo.email,
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
}

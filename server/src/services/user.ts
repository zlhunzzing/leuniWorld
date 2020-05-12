import { userModels } from "../models/user";

const model = new userModels();

interface SignUpData {
  email;
}

export class userService {
  async signupService(userInfo: SignUpData): Promise<void> {
    //   const result = await model.findOneWithEmail(userInfo.email);
    //   if (result) {
    //     throw new Error("ERROR");
    //   }
    //   await model.save(userInfo);
    // }

    try {
      const result = await model.findOneWithEmail(userInfo.email);
      await model.save(userInfo);
    } catch (err) {
      throw new Error(err);
    }
  }
}

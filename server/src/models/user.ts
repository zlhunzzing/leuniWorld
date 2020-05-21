import { getRepository } from "typeorm";
import { User } from "../entity/user";

export class userModels {
  async findOneWithEmail(email: any) {
    const result = await getRepository(User).findOne({
      where: {
        email,
      },
    });
    if (result) {
      throw new Error("ERROR");
    } else {
      return result;
    }
  }

  async save(userData) {
    await getRepository(User).save(userData);
  }
}

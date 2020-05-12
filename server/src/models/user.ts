import { getRepository } from "typeorm";
import { user } from "../entity/user";

export class userModels {
  async findOneWithEmail(email: any) {
    const result = await getRepository(user).findOne({
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
    await getRepository(user).save(userData);
  }
}

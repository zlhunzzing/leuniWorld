import { getRepository } from "typeorm";
import { user } from "../entity/user";

export class mainModels {
  async findOneWithEmail(email: any) {
    return await getRepository(user).findOne({
      where: {
        email,
      },
    });
  }

  async save(userData) {
    await getRepository(user).save(userData);
  }
}

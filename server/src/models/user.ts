import { getRepository } from "typeorm";
import { User } from "../entity/user";
import { ERROR_MESSAGE } from "../common/ErrorMessages";

export class userModels {
  async findOneWithEmail(email: any) {
    const result = await getRepository(User).findOne({
      where: {
        email,
      },
    });
    if (result) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_EMAIL);
    } else {
      return result;
    }
  }

  async save(userData) {
    await getRepository(User).save(userData);
  }

  async findOneAccount(email, password) {
    const result = await getRepository(User).findOne({
      where: {
        email,
        password,
      },
    });
    if (!result) {
      throw new Error(ERROR_MESSAGE.WRONG_ACCOUNT);
    }
  }
}

import { getRepository } from "typeorm";
import { Guestbook } from "../entity/Guestbook";

export class GuestbookModels {
  async save(insertData) {
    await getRepository(Guestbook).save(insertData);
  }

  async findAll() {
    return await getRepository(Guestbook).find({
      where: {
        isDeleted: false,
      },
    });
  }

  async findWithId(id) {
    return await getRepository(Guestbook).findOne({
      where: {
        id,
      },
    });
  }
}

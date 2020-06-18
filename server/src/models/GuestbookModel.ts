import { getRepository } from "typeorm";
import { GuestbookEntity } from "../entity/GuestbookEntity";

export class GuestbookModel {
  async save(insertData) {
    await getRepository(GuestbookEntity).save(insertData);
  }

  async findAll() {
    return await getRepository(GuestbookEntity).find({
      where: {
        isDeleted: false,
      },
    });
  }

  async findWithId(id) {
    return await getRepository(GuestbookEntity).findOne({
      where: {
        id,
      },
    });
  }
}

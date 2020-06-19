import { getRepository } from "typeorm";
import { FreeboardEntity } from "../entity/FreeboardEntity";

export class FreeboardModel {
  async save(insertData) {
    await getRepository(FreeboardEntity).save(insertData);
  }

  async findAll() {
    return await getRepository(FreeboardEntity).find({
      where: {
        isDeleted: false,
      },
    });
  }

  async findWithId(id) {
    return await getRepository(FreeboardEntity).findOne({
      where: {
        id,
      },
    });
  }
}

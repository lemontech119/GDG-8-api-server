import { getRepository, In } from "typeorm";
import { CatEntity } from "@entity/cat.entity";

class CatModel {
  public cat = CatEntity;

  public async getCats(): Promise<CatEntity[]> {
    const catRepository = getRepository(this.cat);
    return await catRepository.find();
  }

  public async getCatsSpecific(ids: number[]): Promise<CatEntity[]> {
    const catRepository = getRepository(this.cat);
    return await catRepository.find({
      where: {
        id: In(ids),
      },
      select: ["id", "image_url"],
    })
  }
}

export default CatModel;
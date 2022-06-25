import { getRepository } from "typeorm";
import { CatEntity } from "@entity/cat.entity";

class CatModel {
  public cat = CatEntity;

  public async getCats(): Promise<CatEntity[]> {
    const catRepository = getRepository(this.cat);
    return await catRepository.find();
  }

  public async getCatById(id: number): Promise<CatEntity> {
    const catRepository = getRepository(this.cat);
    return await catRepository.findOne({
      id,
    });
  }
}

export default CatModel;
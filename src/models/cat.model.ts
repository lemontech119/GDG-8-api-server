import { getRepository, In } from "typeorm";
import { CatEntity } from "@entity/cat.entity";
import { CreateCatDto } from "@dtos/cat.dto";

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

  public async getCatById(id: number): Promise<CatEntity> {
    const catRepository = getRepository(this.cat);
    return await catRepository.findOne({
      id,
    });
  }

  public async create(createCat: CreateCatDto): Promise<void> {
    const catRepository = getRepository(this.cat);
    await catRepository.save({
      name: createCat.name,
      loc_x: createCat.loc_x,
      loc_y: createCat.loc_y,
      description: createCat.description,
      image_url: createCat.image_url,
    })
  }
}

export default CatModel;
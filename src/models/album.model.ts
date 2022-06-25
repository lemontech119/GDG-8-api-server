import { getRepository } from "typeorm";
import { AlbumEntity } from "@entity/album.entity";

class AlbumModel {
  public album = AlbumEntity;

  public async getAlbumsByCatId(cat_id: number): Promise<AlbumEntity[]> {
    const albumRepository = getRepository(AlbumEntity);
    return await albumRepository.find({
      where: {
        cat_id,
      }
    })
  }

  public async create(cat_id: number, image_url: string): Promise<void> {
    const albumRepository = getRepository(AlbumEntity);
    await albumRepository.save({
      cat_id: cat_id,
      image_url: image_url,
    })
  }
}

export default AlbumModel;
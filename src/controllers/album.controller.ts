import { NextFunction, Request, Response } from "express";
import AlbumModel from "@/models/album.model";

class AlbumController {
  public albumModel = new AlbumModel();

  public get = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {
      const id = req.params.id;
      const albums = await this.albumModel.getAlbumsByCatId(parseInt(id, 10));

      res.json({ albums });
    } catch (error) {
      next(error);
    }
  };
}

export default AlbumController;

import { NextFunction, Request, Response } from "express";
import FileService from "@services/file.service";
import CatModel from "@models/cat.model";

class CatController {
  public fileService = new FileService();
  public catModel = new CatModel();

  public index = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const cats = await this.catModel.getCats();
      res.json({cats});
    } catch (error) {
      next(error);
    }
  };

  public testUploadImage = async (
    req: Request, res: Response, next: NextFunction
  ) => {
    try {
      if (!req.file) {
        return res.status(400).json({});
      }
      const fileData: Express.Multer.File = req.file;

      await this.fileService.uploadFileToS3(fileData);
      res.json({});
    } catch (error) {
      next(error);
    }
  }
}

export default CatController;
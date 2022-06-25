import { NextFunction, Request, Response } from "express";
import FileService from "@services/file.service";

class CatController {
  public fileService = new FileService();

  public index = (req: Request, res: Response, next: NextFunction): void => {
    try {
      res.status(200).json({data: "", message: "cat Test"});
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
import { NextFunction, Request, Response } from "express";
// import FileService from "@services/file.service";
import CatModel from "@models/cat.model";
import CatService from "@services/cat.service";

class CatController {
  // public fileService = new FileService();
  public catModel = new CatModel();
  public CatService = new CatService();

  public index = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const cats = await this.catModel.getCats();
      res.json({cats});
    } catch (error) {
      next(error);
    }
  };

  public indexDto = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // const cats = await this.catModel.getCats();
      const cats = await this.CatService.findCatInfo();
      res.json({cats});
    } catch (error) {
      next(error);
    }
  };

 
  public get = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {
      const id = req.params.id;
      const cat = await this.catModel.getCatById(parseInt(id, 10));
      res.json({ cat });
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
      const cat = req.body;
      const image_url = "http://13.125.252.148:3000/" + fileData.originalname;

      cat["image_url"] = image_url;
      await this.catModel.create(cat);
      res.send('true');
    } catch (error) {
      next(error);
    }
  }
}
export default CatController;
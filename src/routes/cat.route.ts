import { Router } from "express";
import CatController from "@/controllers/cat.controller";
// import { multerConfig } from "../config/multerConfig";
// import multer from "multer";

class CatRoutes {
  public path = "/cats";
  public router = Router();
  public catController = new CatController();
  // public upload = multer(multerConfig);

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.catController.index);
    // this.router.post(`${this.path}/test`, this.upload.single('image'), 
    //   this.catController.testUploadImage
    // );
  }
}

export default CatRoutes;

import { Router } from "express";
import AlbumController from "@/controllers/album.controller";
import { multerConfig } from "../config/multerConfig";
import multer from "multer";

class AlbumRoutes {
  public path = "/albums";
  public router = Router();
  public albumController = new AlbumController();
  public upload = multer(multerConfig);

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:id(\\d+)`, this.albumController.get);
  }
}

export default AlbumRoutes;
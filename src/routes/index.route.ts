import { Router } from "express";
import IndexController from "@controllers/index.controller"; 
import { Routes } from "@interfaces/routes.interface";
import CatRoutes from "./cat.route";

class IndexRoutes implements Routes {
  public path = "/";
  public router = Router();
  public indexController = new IndexController();
  public catRoutes = new CatRoutes();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.indexController.index);
    // model test
    // this.router.get(`${this.path}:id(\\d+)`, this.indexController.dbGetTest);
    // this.router.post(`${this.path}`, this.indexController.createTest);
    // this.router.use(`${this.path}/cat`, this.catRoutes.router);
  }
}


export default IndexRoutes;
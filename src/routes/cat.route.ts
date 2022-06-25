import { Router } from "express";
import CatController from "@/controllers/cat.controller";

class CatRoutes {
  public path = "/cat";
  public router = Router();
  public catController = new CatController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.catController.index);
  }
}

export default CatRoutes;

import { Router } from "express";
import FeedController from "@/controllers/feed.controller";

class FeedRoutes {
  public path = "/feeds";
  public router = Router();
  public feedController = new FeedController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.feedController.getFeedList);
    this.router.get(`${this.path}/:id(\\d+)`, this.feedController.getFeed);
    this.router.get(`${this.path}/cat/:id(\\d+)`, this.feedController.getFeedListByCat);
    this.router.post(`${this.path}`, this.feedController.create);
  }
}

export default FeedRoutes;
import { Router } from "express";
import CommentController from "@/controllers/comment.controller";

class CommentRoutes {
  public path = "/comments";
  public router = Router();
  public commentController = new CommentController();

  constructor() {
    this.initializeRoutes();
  }
  
  private initializeRoutes() {
    this.router.get(`${this.path}/:id(\\d+)`, this.commentController.getListByFeedId);
    this.router.post(`${this.path}`, this.commentController.createComment);
  }
}

export default CommentRoutes;
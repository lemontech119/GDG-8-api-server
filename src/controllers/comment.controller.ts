import { NextFunction, Request, Response } from "express";
import CommentModel from "@models/comment.model";
import { CreateCommentDto } from "@dtos/comment.dto";

class CommentController {
  public commentModel = new CommentModel();

  public getListByFeedId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = req.params.id;
      const comments = await this.commentModel.listByFeedId(parseInt(id, 10));

      res.json({ comments });
    } catch (error) {
      next(error);
    }
  };

  public createComment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const rand = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      const comment: CreateCommentDto = req.body;
      comment.userName = "User" + rand(10000, 99999);

      await this.commentModel.create(comment);

      res.send('true');
    } catch (error) {
      next(error);
    }
  }
}

export default CommentController;
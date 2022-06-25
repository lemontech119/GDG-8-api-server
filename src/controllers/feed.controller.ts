import { NextFunction, Request, Response } from "express";
import FeedModel from "@/models/feed.model";

class FeedController {
  public feedModel = new FeedModel();

  public getFeed = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = req.params.id;
      const feed = await this.feedModel.getFeedById(parseInt(id, 10));

      res.json({ feed });
    } catch (e) {
      next(e);
    }
  }

  public getFeedList = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const feeds = await this.feedModel.getLatestedFeedList();

      res.json({ feeds });
    } catch (e) {
      next(e);
    }
  }

  public getFeedListByCat = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = req.params.id; 
      const feeds = await this.feedModel.getFeedListByCatId(parseInt(id, 10));

      res.json({ feeds });
    } catch (e) {
      next(e);
    }
  }

  public create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { feed } = req.body;

      await this.feedModel.createFeed(feed);
      res.send('true');
    } catch (e) {
      next(e);
    }
  }
}

export default FeedController;
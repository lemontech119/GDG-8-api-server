import { NextFunction, Request, Response } from "express";

class CatController {

  public index = (req: Request, res: Response, next: NextFunction): void => {
    try {
      res.status(200).json({data: "", message: "cat Test"});
    } catch (error) {
      next(error);
    }
  };
}

export default CatController;
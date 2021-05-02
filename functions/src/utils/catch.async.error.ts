import { Request, Response, NextFunction } from "express";
export const catchAsync = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      return fn();
    } catch (error) {
      next(error);
    }
  };
};

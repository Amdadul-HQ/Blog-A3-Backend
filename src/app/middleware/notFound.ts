/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

const notFound = (
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {


   res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message:"API NOT FOUND",
    error:'',
  });
};

export default notFound;

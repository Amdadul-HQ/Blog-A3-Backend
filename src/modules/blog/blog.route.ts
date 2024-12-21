import express from "express";
import validateRequest from "../../app/middleware/validateRequest";
import { BlogValidation } from "./blog.validate";
import auth from "../../app/middleware/auth";
import { USER_ROLE } from "../user/user.constant";
import { BlogController } from "./blog.controller";

const BlogRouter = express.Router();

BlogRouter.post(
  '/',
  auth(USER_ROLE.user),
  validateRequest(BlogValidation.blogValidationSchema),
  BlogController.crateBlog
);

export const BlogRoutes = BlogRouter;
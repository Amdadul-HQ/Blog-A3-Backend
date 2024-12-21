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
  BlogController.createBlog,
);

BlogRouter.patch('/:id',auth(USER_ROLE.user),
validateRequest(BlogValidation.updateBlogValidationSchema),
BlogController.updateBlog
)

BlogRouter.get('/',
BlogController.getAllBlog
)

BlogRouter.delete('/:id',auth(USER_ROLE.user),BlogController.deleteBlog)

export const BlogRoutes = BlogRouter;
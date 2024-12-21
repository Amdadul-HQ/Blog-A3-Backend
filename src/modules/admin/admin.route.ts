import express from "express"
import auth from "../../app/middleware/auth";
import { USER_ROLE } from "../user/user.constant";
import { AdminController } from "./admin.controller";
const AdminRouter = express.Router();

AdminRouter.patch('/users/:userId/block',auth(USER_ROLE.admin),AdminController.blockUser);

AdminRouter.delete('/blogs/:id',auth(USER_ROLE.admin),AdminController.deleteBlog);

AdminRouter.get('/users',auth(USER_ROLE.admin),AdminController.getAllUsers)

export const AdminRoutes = AdminRouter
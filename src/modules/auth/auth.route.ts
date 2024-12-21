import express from "express";
import { UserController } from "../user/user.controller";
import validateRequest from "../../app/middleware/validateRequest";
import { userValidation } from "../user/user.validate";

const AuthRoute = express.Router();

// Register
AuthRoute.post('/register',validateRequest(userValidation.createUserValidationSchema),UserController.registerUser);


// Login 
AuthRoute.post('/login',);



export const AuthRoutes = AuthRoute;

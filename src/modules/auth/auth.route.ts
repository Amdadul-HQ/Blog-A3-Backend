import express from "express";
import { UserController } from "../user/user.controller";
import validateRequest from "../../app/middleware/validateRequest";
import { userValidation } from "../user/user.validate";
import { AuthValidation } from "./auth.validation";
import { AuthController } from "./auth.controller";

const AuthRoute = express.Router();

// Register
AuthRoute.post('/register',validateRequest(userValidation.createUserValidationSchema),UserController.registerUser);


// Login 
AuthRoute.post('/login',validateRequest(AuthValidation.loginValidationSchema),AuthController.loginuser);



export const AuthRoutes = AuthRoute;

import httpStatus from "http-status";
import { catchAsync } from '../../app/utils/catchAsync';
import sendResponse from '../../app/utils/sendResponse';
import { UserService } from './user.service';

const registerUser = catchAsync(async (req, res) => {
  const result = await UserService.registerUserInToDB(req.body);

  // send response
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'User registered successfully ABafdfasdfasdf',
    data: result,
  });
});

export const UserController = {
    registerUser
};
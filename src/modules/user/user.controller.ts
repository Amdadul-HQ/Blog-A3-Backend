import httpStatus from "http-status";
import { catchAsync } from '../../app/utils/catchAsync';
import sendResponse from '../../app/utils/sendResponse';
import { UserService } from './user.service';

const registerUser = catchAsync(async (req, res) => {
  const result = await UserService.registerUserInToDB(req.body);

  // send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User registered successfully',
    data: result,
  });
});

export const UserController = {
    registerUser
};
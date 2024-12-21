import { catchAsync } from '../../app/utils/catchAsync';
import sendResponse from '../../app/utils/sendResponse';
import { UserService } from './user.service';

const registerUser = catchAsync(async (req, res) => {
  const result = await UserService.registerUserInToDB(req.body);

  // send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student is created Successfully',
    data: result,
  });
});

export const UserController = {
    registerUser
};
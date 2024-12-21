import httpStatus from "http-status";
import config from "../../app/config";
import { AppError } from "../../app/errors/AppError";
import { createToken } from "./auth.utils";
import { User } from "../user/user.model";
import { ILoginUser } from "./auth.interface";

const loginUserInToDB = async (payload: ILoginUser) => {
  // checking if the user is exist
  const isUserExists = await User.isUserExists(payload.email);

  if (!isUserExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!');
  }

  const isBlocked = isUserExists.isBlocked;

  if (isBlocked) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is Blocked');
  }

  if (
    !(await User.isPasswordMatched(payload.password, isUserExists.password))
  ) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password not matched');
  }

  const jwtPayload = {
    email: isUserExists.email,
    role: isUserExists.role,
  };

  //create token and send to client
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expire as string,
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expire as string,
  );

  return {
    token:accessToken,
    refreshToken,
  };
};

export const AuthServices = {
    loginUserInToDB
}

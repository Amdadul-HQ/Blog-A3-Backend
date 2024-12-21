import httpStatus from "http-status";
import { AppError } from "../errors/AppError";
import { catchAsync } from "../utils/catchAsync";
import jwt, { JwtPayload } from "jsonwebtoken"
import config from "../config";




// const auth = (...requiredRoles:TUserRole[]) => {
//   return catchAsync(async (req, res, next) => {


      
      
//       // validation
//       const token =req?.headers?.authorization;
      
//       // is token sended
//       if(!token){
//           throw new AppError(httpStatus.UNAUTHORIZED,'You are not authorized');
//         }
        
//     const decoded = jwt.verify(
//       token,
//       config.jwt_access_secret as string,
//     ) as JwtPayload;


//      const {role,userId,iat} = decoded
//      console.log(decoded);

//      const isUserExists = await User.isUserExistsByCustomId(userId)
    
//         if(!isUserExists){
//             throw new AppError(httpStatus.NOT_FOUND,"This user is not found!")
//         };
//         const isDeleted = isUserExists?.isDeleted
//         if(isDeleted){
//             throw new AppError(httpStatus.FORBIDDEN,'This User is Already Deleted!')
//         }
//         const userStatus = isUserExists.status;
    
//         if(userStatus === "blocked"){
//             throw new AppError(httpStatus.FORBIDDEN,'This user is Blocked')
//         };

//         if(isUserExists.passwordChangeAt && User.isJWTIssuedBeforePasswordChanged(isUserExists.passwordChangeAt,iat as number)){
//           throw new AppError(httpStatus.UNAUTHORIZED,"You are not authorized")
//         }

//      if (requiredRoles && !requiredRoles.includes(role)) {
//        throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
//      }

//      req.user = decoded


//      next();
    
//   })
// };

// export default auth;
import httpStatus from "http-status";
import { User } from "../user/user.model"
import { AppError } from "../../app/errors/AppError";

const blockUserInToDB = async(id:string)=>{

    const user = await User.findById(id);

    if(!user){
        throw new AppError(httpStatus.NOT_FOUND, 'User Not Founded');
    }
    const result = await User.findByIdAndUpdate(id,{isBlocked:true})
    return result;
}

const getAllUsers = async()=>{
    const result = await User.find();
    return result;
}


export const AdminServices = {
    blockUserInToDB,
    getAllUsers
}
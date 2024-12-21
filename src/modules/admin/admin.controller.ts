import httpStatus from "http-status";
import { catchAsync } from "../../app/utils/catchAsync";
import sendResponse from "../../app/utils/sendResponse";
import { AdminServices } from "./admin.service";
import { Blog } from "../blog/blog.model";
import { BlogServices } from "../blog/blog.service";
import { AppError } from "../../app/errors/AppError";

const blockUser = catchAsync(async(req,res)=>{


    const { userId } = req.params;

    const result = await AdminServices.blockUserInToDB(userId);
    if (result) {
      sendResponse(res, {
        success: true,
        message: 'User blocked successfully',
        statusCode: httpStatus.OK,
      });
    }
})

const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params;

  const isBlogExists = await Blog.isBlogExists(id);

  if(!isBlogExists){
    throw new AppError(httpStatus.NOT_FOUND,'Blog Not Founded')
  }

  const result = await BlogServices.deleteBlogFromDB(id);
  if (result) {
    sendResponse(res, {
      success: true,
      message: 'Blog deleted successfully',
      statusCode: httpStatus.OK,
    });
  }
});


export const AdminController = {
    blockUser,
    deleteBlog
}
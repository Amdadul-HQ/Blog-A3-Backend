import httpStatus from "http-status";
import { catchAsync } from "../../app/utils/catchAsync";
import sendResponse from "../../app/utils/sendResponse";
import { BlogServices } from "./blog.service";


const crateBlog = catchAsync(async(req,res)=>{

    const blog = req.body;
    const author = req?.user?.id

    const payload = {...blog,author}

    const result = await BlogServices.createBlogInToDB(payload)

    // Send Response
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: 'Blog created successfully',
      data: result,
    });
})


export const BlogController = {
    crateBlog
}
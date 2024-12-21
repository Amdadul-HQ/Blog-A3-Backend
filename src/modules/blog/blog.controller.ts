import httpStatus from "http-status";
import { catchAsync } from "../../app/utils/catchAsync";
import sendResponse from "../../app/utils/sendResponse";
import { BlogServices } from "./blog.service";
import { Blog } from "./blog.model";
import { AppError } from "../../app/errors/AppError";


const createBlog = catchAsync(async (req, res) => {
  const blog = req.body;
  const author = req?.user?.userId;

  const payload = { ...blog, author };

  const result = await BlogServices.createBlogInToDB(payload);

  // Send Response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Blog created successfully',
    data: result,
  });
});

const updateBlog = catchAsync(async(req,res)=>{


    const blogExists = await Blog.isBlogExists(req.params.id)

    if(!blogExists){
        throw new AppError(httpStatus.NOT_FOUND,'Blog Not Founded')
    }

    const result = await BlogServices.updateBlogInToDB(
      req.params.id,
      req.body,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog updated successfully',
      data: result,
    });
})


const getAllBlog = catchAsync(async(req,res)=>{
     const result = await BlogServices.getAllBlogFromDB(req.query);
     sendResponse(res, {
       statusCode: httpStatus.OK,
       success: true,
       message: 'Blogs fetched successfully',
       data: result,
     });
})

const deleteBlog = catchAsync(async(req,res)=>{
    const {id} = req.params;

    const isBlogExists =await Blog.isBlogExists(id);

    const userId = req?.user?.userId;
    console.log(userId);
    console.log(isBlogExists.author);

    if(userId != isBlogExists.author){
        throw new AppError(httpStatus.FORBIDDEN,"Unautorize Access")
    }

    const result = await BlogServices.deleteBlogFromDB(id)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog deleted successfully',
      data: result,
    });
})

export const BlogController = {
    createBlog,
    updateBlog,
    getAllBlog,
    deleteBlog
}
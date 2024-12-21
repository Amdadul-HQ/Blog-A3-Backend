import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model";

const createBlogInToDB = async (payload:IBlog)=>{

    const result = (await Blog.create(payload)).populate('author')
    return result;
}

export const BlogServices = {
    createBlogInToDB
}
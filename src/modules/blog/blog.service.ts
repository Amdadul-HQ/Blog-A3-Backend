import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model";
import QueryBuilder from "../../app/builder/QueryBuilder";
import { BlogSearchableFields } from "./blog.constant";

const createBlogInToDB = async (payload:IBlog)=>{

    const result = (await Blog.create(payload)).populate('author')
    return result;
}

const updateBlogInToDB = async (id:string,payload:Partial<IBlog>)=>{

    const result = await Blog.findByIdAndUpdate(id, payload).populate(
      'author',
    );
    return result;
}

const getAllBlogFromDB = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(Blog.find().populate('author'), query)
    .search(BlogSearchableFields)
    .filter()
    .sort()
    .fields();
     const result = await blogQuery.modelQuery;
     return result;
};

const deleteBlogFromDB = async(id:string)=>{
    const result = await Blog.findByIdAndUpdate(id,{isPublished:false});
    return result;
}

export const BlogServices = {
    createBlogInToDB,
    updateBlogInToDB,
    getAllBlogFromDB,
    deleteBlogFromDB
}
/* eslint-disable no-unused-vars */
import { Model, Types } from "mongoose";

export interface IBlog {
    title:string,
    content:string,
    author:Types.ObjectId,
    isPublished:boolean,
};
export interface IBlogModel extends Model<IBlog> {
  isBlogExists(id: string): Promise<IBlog>;

}
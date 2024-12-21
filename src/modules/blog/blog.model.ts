import { model, Schema } from "mongoose";
import { IBlog } from "./blog.interface";

const blogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: [true, 'Title is Required'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Content is Required'],
      trim: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    isPublished:{
        type:Boolean,
        default:true
    }
  },
  {
    timestamps: true,
  },
);


blogSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.isPublished;
    delete ret.createdAt;
    delete ret.updatedAt;
    delete ret.__v;
    return ret;
  },
});


export const Blog = model<IBlog>(
  'Blog',
  blogSchema,
);

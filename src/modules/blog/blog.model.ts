import { model, Schema } from "mongoose";
import { IBlog, IBlogModel } from "./blog.interface";

const blogSchema = new Schema<IBlog,IBlogModel>(
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


blogSchema.pre('find', function (next) {
  this.find({ isPublished: { $ne: false } });
  next();
});

blogSchema.statics.isBlogExists = async function (id: string) {
  return await Blog.findById(id);
};

blogSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.isPublished;
    delete ret.createdAt;
    delete ret.updatedAt;
    delete ret.__v;
    return ret;
  },
});


export const Blog = model<IBlog,IBlogModel>(
  'Blog',
  blogSchema,
);

import { z } from 'zod';

export const blogValidationSchema = z.object({
  body: z.object({
    title: z.string().nonempty({ message: 'Title is required' }).trim(),
    content: z.string().nonempty({ message: 'Content is required' }).trim(),
    isPublished: z.boolean().default(true), 
  }),
});


export const BlogValidation = {
    blogValidationSchema
}
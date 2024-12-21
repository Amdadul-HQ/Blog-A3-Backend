import { z } from 'zod';
import { Role } from './user.constant';

const createUserValidationSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, 'Name is Required')
      .max(20, 'Name Can Not Be More Than 20 Characters'),
    email: z
      .string()
      .email('Invalid Email Address')
      .min(1, 'Student Email is Required'),
    password: z
      .string()
      .min(1, 'Password is Required')
      .max(16, 'Password can not be more then 20 Characters'),
    role: z.enum([...Role] as [string, ...string[]]).default('user'),
    isBlocked:z.boolean().default(false)
  }),
});

export const userValidation = {
    createUserValidationSchema
}

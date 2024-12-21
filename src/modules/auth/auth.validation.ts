import { z } from "zod";

const loginValidationSchema = z.object({
    body:z.object({
        email:z.string({required_error:"email is required"}),
        password:z.string({required_error:"Password is required"})
    })
})

const changePasswordValidationSchema = z.object({
  body: z.object({
    oldPassword: z.string({ required_error: 'old Password is required' }),
    newPassword: z.string({ required_error: 'Password is required' }),
  }),
});


const refreshTokenValidation = z.object({
  cookies:z.object({
    refreshToken:z.string({
      required_error:"Refresh token is required!"
    })
  })
})


export const AuthValidation = {
    loginValidationSchema,
    changePasswordValidationSchema,
    refreshTokenValidation
}
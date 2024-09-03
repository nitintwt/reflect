import {z} from 'zod'

export const usernameValidation = z
.string()
.min(2, "Username must be at least 2 character")
.max(20)

export const signUpSchema = z.object({
  usernaem:usernameValidation,
  email:z.string().email({message:"Invalid email"}),
  password:z.string().min(6, {message:"password must be at least 6 character"})
})
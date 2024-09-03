import { z } from "zod";

export const signInSchema = z.object({
  identifier: z.string(),  // can be email or username
  password:z.string(),
})
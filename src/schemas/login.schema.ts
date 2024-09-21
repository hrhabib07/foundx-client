import { z } from "zod";

const loginValidationSchema = z.object({
  email: z.string().trim().email("please enter a valid email"),
  password: z
    .string()
    .trim()
    .min(6, "Password must to be at least 6 characters"),
});

export default loginValidationSchema;

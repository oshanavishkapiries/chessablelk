import { z } from "zod";

export const AuthSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type AuthDataTypes = z.infer<typeof AuthSchema>;

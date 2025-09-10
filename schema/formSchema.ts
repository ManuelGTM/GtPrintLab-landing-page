import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  description: z
    .string()
    .min(10, "Please provide at least 10 characters describing your project"),
});

export type FormData = z.infer<typeof formSchema>;

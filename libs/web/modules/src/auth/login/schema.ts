import { z } from 'zod';

export const validationSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email' }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(1, { message: 'Password is required' }),
});

export type TLogin = z.infer<typeof validationSchema>;

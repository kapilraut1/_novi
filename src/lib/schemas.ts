import { z } from 'zod';

export const subscribeSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, 'Enter your email to subscribe.')
    .email('Please. Enter your valid email address.'),
});

export type SubscribeInput = z.infer<typeof subscribeSchema>;

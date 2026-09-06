import { z } from 'zod';

export const subscribeSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, 'Enter your email to subscribe.')
    .email('That email does not look right — try you@company.com.'),
});

export type SubscribeInput = z.infer<typeof subscribeSchema>;

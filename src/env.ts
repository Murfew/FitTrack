import { createEnv } from '@t3-oss/env-nextjs';
import * as z from 'zod';

export const env = createEnv({
  server: {
    DATABASE_URL: z.url(),
    AUTH_GITHUB_ID: z.string().min(1),
    AUTH_GITHUB_SECRET: z.string().min(1),
    AUTH_SECRET: z.string().min(1),
  },

  experimental__runtimeEnv: process.env,
});

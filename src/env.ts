import { createEnv } from '@t3-oss/env-nextjs';
import * as z from 'zod';

export const env = createEnv({
  server: {
    DATABASE_URL: z.url(),
    AUTH_GITHUB_ID: z.string().regex(/^(Iv[A-Za-z0-9]{18}|[a-f0-9]{20})$/),
    AUTH_GITHUB_SECRET: z
      .string()
      .length(40)
      .regex(/^[a-f0-9]+$/),
    AUTH_GOOGLE_ID: z
      .string()
      .regex(/^\d+-[a-z0-9]+\.apps\.googleusercontent\.com$/),
    AUTH_GOOGLE_SECRET: z.string().regex(/^GOCSPX-[A-Za-z0-9_-]{28}$/),
    AUTH_SECRET: z.string().min(32),
  },

  experimental__runtimeEnv: process.env,
});

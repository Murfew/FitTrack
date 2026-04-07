'use server';

import { redirect } from 'next/navigation';
import { AuthError } from 'next-auth';
import { signIn } from '@/lib/auth';

const SIGNIN_ERROR_URL = '/error';

interface SignInProps {
  providerId: string;
  redirectTo: string;
}

export async function handleSignIn({
  providerId,
  redirectTo,
}: SignInProps): Promise<void> {
  try {
    await signIn(providerId, {
      redirectTo,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`);
    }

    throw error;
  }
}

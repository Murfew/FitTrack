'use client';

import { SiGithub, SiGoogle } from '@icons-pack/react-simple-icons';
import { Button } from '@/components/ui/button';
import { signIn } from '@/lib/auth-client';
import { type ProviderId, providers } from '@/lib/auth-providers';

const providerIcons: Record<ProviderId, React.ReactNode> = {
  github: <SiGithub />,
  google: <SiGoogle />,
};

interface SignInButtonsProps {
  callbackURL: string;
}

export default function SignInButtons({ callbackURL }: SignInButtonsProps) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <Button
          key={provider.id}
          className="w-full gap-2"
          onClick={async () =>
            await signIn.social({ provider: provider.id, callbackURL })
          }
        >
          {providerIcons[provider.id] ?? null}
          Sign in with {provider.name}
        </Button>
      ))}
    </>
  );
}

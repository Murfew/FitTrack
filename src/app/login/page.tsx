import { SiGithub } from '@icons-pack/react-simple-icons';
import { handleSignIn } from '@/actions/auth';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { H2, Muted } from '@/components/ui/typography';
import { providerMap } from '@/lib/auth';

const providerIcons: Record<string, React.ReactNode> = {
  github: <SiGithub />,
};

interface LoginPageProps {
  searchParams: Promise<{ callbackUrl?: string }>;
}

export default async function Page({ searchParams }: LoginPageProps) {
  const { callbackUrl } = await searchParams;

  return (
    <main className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader className="items-center text-center">
          <CardTitle>FitTrack</CardTitle>
          <CardDescription>Sign in to continue</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {Object.values(providerMap).map((provider) => (
            <form
              key={provider.id}
              action={handleSignIn.bind(null, {
                providerId: provider.id,
                redirectTo: callbackUrl ?? '/dashboard',
              })}
            >
              <Button className="w-full gap-2" type="submit">
                {providerIcons[provider.id] ?? null}
                Sign in with {provider.name}
              </Button>
            </form>
          ))}
        </CardContent>
        <CardFooter className="justify-center">
          <Muted>More providers coming soon</Muted>
        </CardFooter>
      </Card>
    </main>
  );
}

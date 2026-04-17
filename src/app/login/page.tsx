import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Muted } from '@/components/ui/typography';
import SignInButtons from './_components/SignInButtons';

interface LoginPageProps {
  searchParams: Promise<{ callbackURL?: string }>;
}

export default async function Page({ searchParams }: LoginPageProps) {
  const { callbackURL } = await searchParams;

  return (
    <main className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader className="items-center text-center">
          <CardTitle>FitTrack</CardTitle>
          <CardDescription>Sign in to continue</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <SignInButtons callbackURL={callbackURL ?? '/dashboard'} />
        </CardContent>
        <CardFooter className="justify-center">
          <Muted>More providers coming soon</Muted>
        </CardFooter>
      </Card>
    </main>
  );
}

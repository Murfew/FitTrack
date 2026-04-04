import { SiGithub } from '@icons-pack/react-simple-icons';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Muted } from '@/components/ui/typography';

export default function Login() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader className="items-center text-center">
          <CardTitle className="font-bold text-2xl text-foreground tracking-tight">
            FitTrack
          </CardTitle>
          <CardDescription>Sign in to continue</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button className="w-full gap-2">
            <SiGithub />
            Continue with GitHub
          </Button>
        </CardContent>
        <CardFooter className="justify-center">
          <Muted className="text-xs">More providers coming soon</Muted>
        </CardFooter>
      </Card>
    </main>
  );
}

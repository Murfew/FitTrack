import { Button } from '@/components/ui/button';
import { H1, P } from '@/components/ui/typography';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <H1>FitTrack</H1>
      <P>Track your lifts. Own your progress.</P>
      <Button className="mt-6">Sign In</Button>
    </main>
  );
}

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { H1, P } from '@/components/ui/typography';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <H1>FitTrack</H1>
      <P>Track your lifts. Own your progress.</P>
      <Button asChild className="mt-6">
        <Link href="/login">Sign In</Link>
      </Button>
    </main>
  );
}

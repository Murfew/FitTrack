import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { H1, Lead } from '@/components/ui/typography';

export const metadata: Metadata = {
  title: '404 | FitTrack',
  description: 'Page not found.',
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex max-w-80 flex-col items-center text-center">
        <p className="font-bold font-mono text-9xl text-primary">404</p>
        <H1 className="mt-4">PAGE NOT FOUND</H1>
        <Lead className="mt-2.5">
          Nothing to see here. Head back and pick up where you left off.
        </Lead>
        <Button variant="outline" asChild className="mt-9" size="lg">
          <Link href="/">
            <ArrowLeft />
            Go home
          </Link>
        </Button>
      </div>
    </main>
  );
}

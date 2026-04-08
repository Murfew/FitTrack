import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <Skeleton className="h-10 w-32" />
      <Skeleton className="h-5 w-56" />
      <Skeleton className="mt-6 h-10 w-24" />
    </main>
  );
}

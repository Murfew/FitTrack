import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { providerMap } from '@/lib/auth';

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader className="items-center justify-items-center gap-2">
          <Skeleton className="h-7 w-24" />
          <Skeleton className="h-4 w-32" />
        </CardHeader>
        <CardContent>
          {Object.values(providerMap).map((provider) => (
            <Skeleton key={provider.id} className="h-10 w-full" />
          ))}
        </CardContent>
      </Card>
    </main>
  );
}

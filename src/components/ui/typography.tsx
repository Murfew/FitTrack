import { cn } from '@/lib/utils';

export function H1({ className, children }: React.ComponentProps<'h1'>) {
  return (
    <h1
      className={cn(
        'scroll-m-20 font-extrabold text-4xl tracking-tight lg:text-5xl',
        className
      )}
    >
      {children}
    </h1>
  );
}

export function P({ className, children }: React.ComponentProps<'p'>) {
  return <p className={cn('leading-7', className)}>{children}</p>;
}

export function Muted({ className, children }: React.ComponentProps<'p'>) {
  return (
    <p className={cn('text-muted-foreground text-sm', className)}>{children}</p>
  );
}

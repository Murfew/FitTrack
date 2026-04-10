import { cn } from '@/lib/utils';

export function H1({
  className,
  children,
  ...props
}: React.ComponentProps<'h1'>) {
  return (
    <h1
      className={cn('font-bold text-4xl tracking-tight', className)}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({
  className,
  children,
  ...props
}: React.ComponentProps<'h2'>) {
  return (
    <h2
      className={cn('font-semibold text-2xl tracking-tight', className)}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({
  className,
  children,
  ...props
}: React.ComponentProps<'h3'>) {
  return (
    <h3 className={cn('font-semibold text-xl', className)} {...props}>
      {children}
    </h3>
  );
}

export function H4({
  className,
  children,
  ...props
}: React.ComponentProps<'h4'>) {
  return (
    <h4 className={cn('font-medium text-base', className)} {...props}>
      {children}
    </h4>
  );
}

export function Lead({
  className,
  children,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p className={cn('text-base text-muted-foreground', className)} {...props}>
      {children}
    </p>
  );
}

export function P({
  className,
  children,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p className={cn('text-sm', className)} {...props}>
      {children}
    </p>
  );
}

export function Muted({
  className,
  children,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p className={cn('text-muted-foreground text-xs', className)} {...props}>
      {children}
    </p>
  );
}

export function InlineCode({
  className,
  children,
  ...props
}: React.ComponentProps<'code'>) {
  return (
    <code
      className={cn(
        'rounded bg-muted px-1 py-0.5 font-mono text-sm',
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
}

import { Geist } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn('dark', 'h-full', 'antialiased', geist.variable)}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}

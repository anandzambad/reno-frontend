import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Reno V2',
  description: 'Modernized Reno application',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

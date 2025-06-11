import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lita de anotações',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="dark">{children}</body>
    </html>
  );
}


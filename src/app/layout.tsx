/* eslint-disable react/no-children-prop */
import type { Metadata } from 'next';
import './globals.css';
import ProviderShell from '@/components/ProviderShell';
import { CookiesProvider } from 'next-client-cookies/server';

export const metadata: Metadata = {
  title: 'Alternatif',
  description: 'Alternatif',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <CookiesProvider>
      <ProviderShell children={children} />
    </CookiesProvider>
  );
}

/* eslint-disable react/no-children-prop */
import type { Metadata } from 'next';
import './globals.css';
import ProviderShell from '@/components/ProviderShell';
import { CookiesProvider } from 'next-client-cookies/server';
import { getLocale, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

export const metadata: Metadata = {
  title: 'Alternatif',
  description: 'Alternatif',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <CookiesProvider>
            <ProviderShell children={children} />
          </CookiesProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

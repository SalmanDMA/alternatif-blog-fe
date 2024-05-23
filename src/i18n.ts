import { NextIntlClientProvider } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  // This can either be defined statically if only a single locale
  // is supported, or alternatively read from the user settings
  const locale = cookies().get('language')?.value || 'en';

  return {
    locale,
    messages: (await import(`./i18n/${locale}.json`)).default,
  };
});

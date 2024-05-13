'use client';
import { LOCALES } from '@/i18n/locales';
import { messages } from '@/i18n/messages';
import { RootState } from '@/store';
import { setLanguage } from '@/store/slice/languageSlice';
import { setTheme } from '@/store/slice/themeSlice';
import { useCookies } from 'next-client-cookies';
import { useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Slide, ToastContainer } from 'react-toastify';

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const cookies = useCookies();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();
  const currentLocale = useSelector((state: RootState) => state.language.language);

  useEffect(() => {
    const themeInSession = cookies.get('theme') as 'light' | 'dark';
    const languageInSession = cookies.get('language') as 'en' | 'id';

    if (window.matchMedia('(prefers-color-scheme: dark)').matches && !themeInSession) {
      dispatch(setTheme('dark'));
    } else {
      dispatch(setTheme(themeInSession));
    }

    if (languageInSession) {
      dispatch(setLanguage(languageInSession));
    }
  }, []);

  return (
    <html lang='en'>
      <body>
        <IntlProvider
          messages={currentLocale === 'en' ? messages[LOCALES.ENGLISH] : (messages[LOCALES.INDONESIA] as any)}
          locale={currentLocale}
          defaultLocale={LOCALES.ENGLISH}
        >
          {children}
        </IntlProvider>
        x
        <ToastContainer
          position='top-right'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={theme === 'light' ? 'light' : 'dark'}
          transition={Slide}
        />
      </body>
    </html>
  );
};

export default AppShell;

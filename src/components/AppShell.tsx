'use client';
import { RootState } from '@/store';
import { setTheme } from '@/store/slice/themeSlice';
import { useCookies } from 'next-client-cookies';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Slide, ToastContainer } from 'react-toastify';

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const cookies = useCookies();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const themeInSession = cookies.get('theme') as 'light' | 'dark';

    if (window.matchMedia('(prefers-color-scheme: dark)').matches && !themeInSession) {
      dispatch(setTheme('dark'));
    } else {
      dispatch(setTheme(themeInSession));
    }
  }, []);

  return (
    <html lang='en'>
      <body>
        {children}
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

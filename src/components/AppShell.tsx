'use client';
import { RootState } from '@/store';
import { setLanguage } from '@/store/slice/languageSlice';
import { setTheme } from '@/store/slice/themeSlice';
import { useCookies } from 'next-client-cookies';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Slide, ToastContainer } from 'react-toastify';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { usePathname } from 'next/navigation';
import handleToggle from '@/utils/general';

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const cookies = useCookies();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();
  const pathName = usePathname();

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

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [animationSidebar, setAnimationSidebar] = useState<boolean>(false);

  return (
    <>
      {!pathName.startsWith('auth') && (
        <Navbar
          handleToggleSidebar={() => {
            handleToggle({
              isOpen: isSidebarOpen,
              setState: setIsSidebarOpen,
              setAnimation: setAnimationSidebar,
            });
          }}
        />
      )}
      {!pathName.startsWith('auth') && isSidebarOpen && (
        <Sidebar
          isAnimation={animationSidebar}
          onClose={() => {
            handleToggle({
              isOpen: isSidebarOpen,
              setState: setIsSidebarOpen,
              setAnimation: setAnimationSidebar,
            });
          }}
        />
      )}
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
    </>
  );
};

export default AppShell;

'use client';
import { RootState } from '@/store';
import { setLanguage } from '@/store/slice/languageSlice';
import { languages } from '@/utils/navbarData';
import { useCookies } from 'next-client-cookies';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '@/store/slice/themeSlice';
import handleToggle from '@/utils/general';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import DataLinkNavbar from './Navbar/DataLinkNavbar';
import ModalSearchBox from './Modal/SearchBox';
import useOutsideClick from '@/hooks/useOutsideClick';
import useWindowSizeAndScroll from '@/hooks/useWindowSizeAndScroll';

const Navbar = ({ handleToggleSidebar }: { handleToggleSidebar: () => void }) => {
  const cookies = useCookies();
  const t = useTranslations('navbar');
  const router = useRouter();

  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
  const [animationDropdown, setAnimationDropdown] = useState<boolean>(false);
  const [isOpenSearchBox, setIsOpenSearchBox] = useState<boolean>(false);
  const [animationSearchBox, setAnimationSearchBox] = useState<boolean>(false);
  const [isOpenAccordion, setIsOpenAccordion] = useState<number | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchBoxRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  const currentLocale = useSelector((state: RootState) => state.language.language);
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  useOutsideClick(dropdownRef, () => {
    setAnimationDropdown(false);
    setTimeout(() => {
      setIsOpenDropdown(false);
    }, 300);
  });

  useOutsideClick(searchBoxRef, () => {
    setAnimationSearchBox(false);
    setTimeout(() => {
      setIsOpenSearchBox(false);
    }, 300);
  });

  useOutsideClick(accordionRef, () => {
    setIsOpenAccordion(null);
  });

  const { scrollPosition } = useWindowSizeAndScroll();

  return (
    <nav
      className={`${
        scrollPosition.scrollY > 10 ? 'bg-white fixed top-0 left-0 z-50 shadow-lg' : 'bg-orange-100'
      } w-full p-4 transition-all duration-300`}
    >
      <div className='max-w-[1440px] mx-auto flex gap-16 items-center justify-between'>
        <div className='flex items-center gap-4'>
          <button type='button' className='lg:hidden' onClick={handleToggleSidebar}>
            <i className='fi fi-br-menu-burger text-xl'></i>
          </button>
          <Link href={'/'} className='w-[60px] h-[60px] flex items-center gap-2'>
            <Image
              src={'/images/logo.png'}
              alt='logo'
              width={100}
              height={100}
              className='w-full h-full rounded-full'
              priority
            />
            <h1 className='text-2xl font-inter hidden md:block'>Alternatif</h1>
          </Link>
        </div>

        <DataLinkNavbar
          isOpenAccordion={isOpenAccordion}
          setIsOpenAccordion={setIsOpenAccordion}
          typeComponent='navbar'
          accordionRef={accordionRef}
        />

        <div className='flex items-center justify-between'>
          <div className='flex items-center md:gap-4'>
            <button
              title='Search'
              type='button'
              className='focus:outline-none flex justify-center items-center'
              onClick={(e) => {
                e.stopPropagation();
                handleToggle({
                  isOpen: isOpenSearchBox,
                  setState: setIsOpenSearchBox,
                  setAnimation: setAnimationSearchBox,
                });
              }}
            >
              <i
                className={`fi fi-rr-search flex justify-center items-center text-2xl rounded-full transition-all duration-300 hover:bg-gray-200 p-2 ${
                  animationSearchBox ? 'bg-gray-300' : ''
                }`}
              ></i>
            </button>

            {isOpenSearchBox && (
              <ModalSearchBox
                isOpenSearchBox={isOpenSearchBox}
                animationSearchBox={animationSearchBox}
                searchBoxRef={searchBoxRef}
                setAnimationSearchBox={setAnimationSearchBox}
                setIsOpenSearchBox={setIsOpenSearchBox}
                t={t}
                key={'search box in navbar'}
              />
            )}

            <Link
              href={'/auth/signin'}
              className='text-lg font-inter border border-orange-500 rounded-lg px-4 py-2 hover:shadow-md transition-all duration-300 hidden md:block'
            >
              {t('sign_in')}
            </Link>
            <Link
              href={'/auth/signup'}
              className='text-lg font-inter bg-orange-500 text-white transition-all duration-300 hover:shadow-md px-4 py-2 rounded-lg hidden md:block'
            >
              {t('sign_up')}
            </Link>
            <div className='relative' ref={dropdownRef}>
              <button
                title='Settings'
                type='button'
                className='focus:outline-none flex justify-center items-center'
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggle({
                    isOpen: isOpenDropdown,
                    setState: setIsOpenDropdown,
                    setAnimation: setAnimationDropdown,
                  });
                }}
              >
                <i
                  className={`fi fi-sr-settings flex justify-center items-center text-2xl rounded-full transition-all duration-300 hover:bg-gray-200 p-2 ${
                    animationDropdown ? 'rotate-90 bg-gray-300' : ''
                  }`}
                ></i>
              </button>
              {isOpenDropdown && (
                <div
                  className={`absolute -left-[255px] w-[17rem] bg-white shadow-xl rounded-lg p-4 transition-all duration-300 z-50 ${
                    animationDropdown ? 'opacity-100 top-[180%]' : 'opacity-0 top-[280%]'
                  }`}
                >
                  <div className='flex flex-col gap-4 border-b-2 border-b-gray-200 pb-4'>
                    <p className='text-lg font-inter text-gray-400'>{t('theme')}</p>
                    <div className='relative'>
                      <input
                        type='checkbox'
                        checked={theme === 'dark'}
                        onChange={() => {
                          dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'));
                          cookies.set('theme', theme === 'dark' ? 'light' : 'dark');
                        }}
                        className='hidden'
                        id='modeToggle'
                      />
                      <label htmlFor='modeToggle' className='flex items-center cursor-pointer'>
                        <div
                          className={`w-14 h-7 rounded-full p-1 flex items-center transition-colors duration-300 ${
                            theme === 'dark' ? 'bg-black/80' : 'bg-yellow-500/80'
                          }`}
                        >
                          <div
                            className={`size-8 flex items-center justify-center ${
                              theme === 'dark' ? 'bg-black shadow-lg' : 'bg-yellow-500 shadow-lg'
                            } rounded-full shadow-md transform transition-transform duration-300 ${
                              theme === 'dark' ? 'translate-x-full' : '-translate-x-[30%]'
                            }`}
                          >
                            {theme === 'dark' ? (
                              <i className='fi fi-rr-moon text-white text-xl flex justify-center items-center'></i>
                            ) : (
                              <i className='fi fi-rr-sun text-white text-xl flex justify-center items-center'></i>
                            )}
                          </div>
                        </div>
                        <span className='ml-5 font-medium'>
                          {theme === 'dark' ? <>{t('dark_mode')}</> : <>{t('light_mode')}</>}
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className='flex flex-col gap-4 pt-4'>
                    <p className='text-lg font-inter text-gray-400'>{t('language')}</p>
                    <div className='flex flex-col gap-2'>
                      {languages.map((language, index) => (
                        <div
                          key={index}
                          className={`flex items-center justify-between px-4 py-2 rounded-xl cursor-pointer ${
                            currentLocale === language.key ? 'bg-gray-200' : ''
                          }`}
                          onClick={() => {
                            dispatch(setLanguage(language.key));
                            cookies.set('language', language.key);
                            router.refresh();
                          }}
                        >
                          <div className='flex items-center gap-2'>
                            <Image
                              src={language.image}
                              alt={language.name}
                              width={100}
                              height={100}
                              className='w-5 h-5 rounded-full'
                              priority
                            />
                            <p className='font-gelasio font-medium'>{language.name}</p>
                          </div>
                          {currentLocale === language.key && (
                            <i className='fi fi-rr-check flex justify-center items-center text-xl'></i>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

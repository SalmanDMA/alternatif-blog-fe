'use client';
import { RootState } from '@/store';
import { setLanguage } from '@/store/slice/languageSlice';
import { languages, navbarData } from '@/utils/navbarData';
import { useCookies } from 'next-client-cookies';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
import { setTheme } from '@/store/slice/themeSlice';

const Navbar = () => {
  const cookies = useCookies();
  const intl = useIntl();
  const [showDropdown, setShowDropdown] = useState<Record<number, boolean>>({});

  const showDropdownOnHover = (dropdownIndex: number) => {
    setShowDropdown({ ...showDropdown, [dropdownIndex]: true });
  };

  const hideDropdownOnLeave = () => {
    setShowDropdown({});
  };

  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
  const [animationDropdown, setAnimationDropdown] = useState<boolean>(false);
  const [isOpenSearchBox, setIsOpenSearchBox] = useState<boolean>(false);
  const [animationSearchBox, setAnimationSearchBox] = useState<boolean>(false);

  const handleToggleDropdown = ({
    isOpen,
    setState,
    setAnimation,
  }: {
    isOpen: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    setAnimation: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {
    if (isOpen) {
      setAnimation(false);
      setTimeout(() => {
        setState(false);
      }, 300);
    } else {
      setState(true);
      setTimeout(() => {
        setAnimation(true);
      }, 300);
    }
  };

  const currentLocale = useSelector((state: RootState) => state.language.language);
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <nav className='bg-white fixed top-0 left-0 flex gap-16 items-center w-full p-4 shadow-lg'>
      <div className='w-[20%]'>
        <Link href={'/'} className='w-[60px] h-[60px] flex items-center gap-2'>
          <Image
            src={'/images/logo.png'}
            alt='logo'
            width={100}
            height={100}
            className='w-full h-full rounded-full'
            priority
          />
          <h1 className='text-2xl font-inter'>Alternatif</h1>
        </Link>
      </div>
      <div className='flex items-center justify-between w-[80%]'>
        <div className='flex items-center gap-4'>
          {navbarData.map((item) => (
            <div key={item.id}>
              <button
                type='button'
                className='flex gap-1 items-center text-lg font-inter capitalize'
                onMouseEnter={() => showDropdownOnHover(item.id)}
                onMouseLeave={hideDropdownOnLeave}
              >
                <FormattedMessage id={item.name} />
                <i
                  className={`fi fi-tr-angle-small-down flex justify-center items-center text-xl transition-transform duration-300 transform ${
                    showDropdown[item.id] ? 'rotate-180' : 'rotate-0'
                  }`}
                ></i>
              </button>
              {showDropdown[item.id] && (
                <div
                  className='absolute top-[88px] left-0 mt-1 w-full bg-gray-300 shadow-lg before:absolute before:left-1/2 before:-top-[2.5rem] before:transform before:-translate-x-1/2 before:bg-transparent before:h-10 before:w-full p-8'
                  onMouseEnter={() => showDropdownOnHover(item.id)}
                  onMouseLeave={hideDropdownOnLeave}
                >
                  <h1 className='text-4xl font-inter font-bold border-b pb-2 border-black'>
                    {<FormattedMessage id={item.dropdownContent?.title} />}
                  </h1>
                  <div className='grid grid-cols-2 gap-4 py-8'>
                    {item.dropdownContent?.content.map((content) => (
                      <Link href={content.path} className='flex items-center gap-2' key={content.id}>
                        <div className='flex-none flex justify-center items-center rounded-full bg-white p-4 h-16 w-16'>
                          <i className={`fi ${content.icon} flex justify-center items-center text-3xl`}></i>
                        </div>
                        <div className='flex flex-col gap-1'>
                          <h3 className='text-xl font-medium font-inter'>{content.name}</h3>
                          <p className='font-gelasio text-gray-600'>{content.des}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link href={'/contact'} className='text-lg font-inter'>
            <FormattedMessage id='contact' />
          </Link>
        </div>
        <div className='flex items-center gap-4'>
          <button
            type='button'
            className='focus:outline-none flex justify-center items-center'
            onClick={() => {
              handleToggleDropdown({
                isOpen: isOpenSearchBox,
                setState: setIsOpenSearchBox,
                setAnimation: setAnimationSearchBox,
              });
              setAnimationDropdown(false);
              setTimeout(() => {
                setIsOpenDropdown(false);
              }, 300);
            }}
          >
            <i
              className={`fi fi-rr-search flex justify-center items-center text-2xl rounded-full transition-all duration-300 hover:bg-gray-200 p-2 ${
                animationSearchBox ? 'bg-gray-300' : ''
              }`}
            ></i>
          </button>

          {isOpenSearchBox && (
            <Modal
              isAnimation={animationSearchBox}
              onClose={() => {
                handleToggleDropdown({
                  isOpen: isOpenSearchBox,
                  setState: setIsOpenSearchBox,
                  setAnimation: setAnimationSearchBox,
                });
                setAnimationDropdown(false);
                setTimeout(() => {
                  setIsOpenDropdown(false);
                }, 300);
              }}
              header={
                <div className='flex gap-2 items-center'>
                  <i className={`fi fi-rr-search flex justify-center items-center text-2xl`}></i>
                  <h2 className='text-lg font-inter font-bold'>
                    <FormattedMessage id='search' />
                  </h2>
                </div>
              }
              footer={
                <div className='flex gap-4 items-center'>
                  <div className='flex gap-2 items-center'>
                    <div className='size-4 rounded-full bg-sky-500'></div>
                    <p className='text-lg font-gelasio'>
                      <FormattedMessage id='tutorials' />
                    </p>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <div className='size-4 rounded-full bg-red-500'></div>
                    <p className='text-lg font-gelasio'>
                      <FormattedMessage id='articles' />
                    </p>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <div className='size-4 rounded-full bg-green-500'></div>
                    <p className='text-lg font-gelasio'>
                      <FormattedMessage id='open_source' />
                    </p>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <div className='size-4 rounded-full bg-yellow-500'></div>
                    <p className='text-lg font-gelasio'>
                      <FormattedMessage id='course' />
                    </p>
                  </div>
                </div>
              }
            >
              <input
                type='text'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500'
                placeholder={intl.formatMessage({ id: 'placeholder_search' })}
              />
            </Modal>
          )}

          <Link
            href={'/auth/signin'}
            className='text-lg font-inter border border-sky-500 rounded-lg px-4 py-2 hover:shadow-md transition-all duration-300'
          >
            <FormattedMessage id='sign_in' />
          </Link>
          <Link
            href={'/auth/signup'}
            className='text-lg font-inter bg-sky-500 text-white transition-all duration-300 hover:shadow-md px-4 py-2 rounded-lg'
          >
            <FormattedMessage id='sign_up' />
          </Link>
          <div className='relative'>
            <button
              type='button'
              className='focus:outline-none flex justify-center items-center'
              onClick={() => {
                handleToggleDropdown({
                  isOpen: isOpenDropdown,
                  setState: setIsOpenDropdown,
                  setAnimation: setAnimationDropdown,
                });
                setAnimationSearchBox(false);
                setTimeout(() => {
                  setIsOpenSearchBox(false);
                }, 300);
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
                className={`absolute -left-[255px] w-[17rem] bg-white shadow-xl rounded-lg p-4 transition-all duration-300 ${
                  animationDropdown ? 'opacity-100 top-[180%]' : 'opacity-0 top-[280%]'
                }`}
              >
                <div className='flex flex-col gap-4 border-b-2 border-b-gray-200 pb-4'>
                  <p className='text-lg font-inter text-gray-400'>
                    <FormattedMessage id='theme' />
                  </p>
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
                        {theme === 'dark' ? <FormattedMessage id='dark_mode' /> : <FormattedMessage id='light_mode' />}
                      </span>
                    </label>
                  </div>
                </div>
                <div className='flex flex-col gap-4 pt-4'>
                  <p className='text-lg font-inter text-gray-400'>
                    <FormattedMessage id='language' />
                  </p>
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
    </nav>
  );
};

export default Navbar;

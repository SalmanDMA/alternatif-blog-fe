'use client';
import { navbarData } from '@/utils/navbarData';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface SidebarProps {
  isAnimation: boolean;
  onClose: () => void;
}

const Sidebar = ({ onClose, isAnimation }: SidebarProps) => {
  const [showDropdown, setShowDropdown] = useState<Record<number, boolean>>({});
  const t = useTranslations('navbar');

  const showDropdownOnHover = (dropdownIndex: number) => {
    setShowDropdown({ ...showDropdown, [dropdownIndex]: true });
  };

  const hideDropdownOnLeave = () => {
    setShowDropdown({});
  };

  return (
    <div
      className='fixed top-0 left-0 w-full h-full bg-black/50 z-10 cursor-pointer block lg:hidden'
      onClick={(e) => {
        const sidebarContent = document.getElementById('sidebarContent');
        if (e.target !== sidebarContent) {
          onClose();
          e.stopPropagation();
        }
      }}
    >
      <div
        className={`min-h-screen fixed top-0 w-[250px] bg-white shadow-xl z-20 transition-all duration-300 cursor-default ${
          isAnimation ? 'left-0 opacity-100' : '-left-[200px] opacity-0'
        }`}
        id='sidebarContent'
      >
        <div className='flex flex-col gap-4 p-4'>
          <div className='flex justify-between items-center border-b border-gray-300 pb-4'>
            <Link href={'/'} className='size-[50px] flex items-center gap-2'>
              <Image
                src={'/images/logo.png'}
                alt='logo'
                width={100}
                height={100}
                className='w-full h-full rounded-full'
                priority
              />
              <h1 className='text-xl font-inter block'>Alternatif</h1>
            </Link>
            <button type='button' className='focus:outline-none'>
              <i className='fi fi-br-cross-small flex justify-center items-center text-xl'></i>
            </button>
          </div>
          <div className='flex flex-col gap-4'>
            {navbarData.map((item) => (
              <div key={item.id}>
                <button
                  type='button'
                  className='flex gap-1 items-center text-lg font-inter capitalize'
                  onMouseEnter={() => showDropdownOnHover(item.id)}
                  onMouseLeave={hideDropdownOnLeave}
                >
                  {t(item.name)}
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
                      {t(item.dropdownContent?.title)}
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
              {t('contact')}
            </Link>
          </div>
          <div className='flex flex-col gap-2 md:hidden border-t border-gray-300 pt-4'>
            <Link
              href={'/auth/signin'}
              className='text-lg font-inter border border-sky-500 rounded-lg px-4 py-2 hover:shadow-md transition-all duration-300 flex justify-center items-center'
            >
              {t('sign_in')}
            </Link>
            <Link
              href={'/auth/signup'}
              className='text-lg font-inter bg-sky-500 text-white transition-all duration-300 hover:shadow-md px-4 py-2 rounded-lg flex justify-center items-center'
            >
              {t('sign_up')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

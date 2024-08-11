'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import DataLinkNavbar from './Navbar/DataLinkNavbar';
import { useEffect, useRef, useState } from 'react';

interface SidebarProps {
  isAnimation: boolean;
  onClose: () => void;
}

const Sidebar = ({ onClose, isAnimation }: SidebarProps) => {
  const t = useTranslations('navbar');
  const accordionRef = useRef<HTMLDivElement>(null);
  const [isOpenAccordion, setIsOpenAccordion] = useState<number | null>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (accordionRef.current && !accordionRef.current.contains(event.target as Node)) {
      setIsOpenAccordion(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div
      className='fixed top-0 left-0 z-50 w-full h-full bg-black/50 cursor-pointer block lg:hidden'
      id='sidebarOverlay'
      onClick={(e) => {
        const sidebarOverlay = document.getElementById('sidebarOverlay');
        const sidebarContent = document.getElementById('sidebarContent');
        if (e.target !== sidebarContent && e.target === sidebarOverlay) {
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
            <button type='button' className='focus:outline-none' onClick={onClose}>
              <i className='fi fi-br-cross-small flex justify-center items-center text-xl'></i>
            </button>
          </div>
          <div className='overflow-y-auto min-h-[calc(100vh-67px)] h-full'>
            <DataLinkNavbar
              isOpenAccordion={isOpenAccordion}
              setIsOpenAccordion={setIsOpenAccordion}
              typeComponent='sidebar'
              accordionRef={accordionRef}
            />
            <div className='flex flex-col gap-2 md:hidden border-t border-gray-300 pt-4'>
              <Link
                href={'/auth/signin'}
                className='text-lg font-inter border border-orange-500 rounded-lg px-4 py-2 hover:shadow-md transition-all duration-300 flex justify-center items-center'
              >
                {t('sign_in')}
              </Link>
              <Link
                href={'/auth/signup'}
                className='text-lg font-inter bg-orange-500 text-white transition-all duration-300 hover:shadow-md px-4 py-2 rounded-lg flex justify-center items-center'
              >
                {t('sign_up')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

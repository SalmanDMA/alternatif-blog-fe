import { navbarData } from '@/utils/navbarData';
import { useTranslations } from 'next-intl';
import React from 'react';
import DropDownNavbar from './DropDownNavbar';
import Link from 'next/link';

interface IProps {
  typeComponent: string;
  isOpenAccordion: number | null;
  setIsOpenAccordion: React.Dispatch<React.SetStateAction<number | null>>;
  accordionRef: React.RefObject<HTMLDivElement>;
}

const DataLinkNavbar = ({ typeComponent, isOpenAccordion, setIsOpenAccordion, accordionRef }: IProps) => {
  const t = useTranslations('navbar');
  const toggleDropdown = (dropdownIndex: number) => {
    if (isOpenAccordion === dropdownIndex) {
      setIsOpenAccordion(null);
    } else {
      setIsOpenAccordion(dropdownIndex);
    }
  };
  return (
    <div
      className={`gap-4 ${
        typeComponent === 'navbar' ? 'hidden lg:flex items-center ' : 'flex flex-col items-start lg:hidden'
      }`}
      ref={accordionRef}
    >
      {navbarData.map((item) => (
        <div key={item.id}>
          <button
            type='button'
            className='flex gap-1 items-center text-lg font-inter capitalize'
            onClick={() => toggleDropdown(item.id)}
          >
            <p>{t(item.name)}</p>
            <i
              className={`fi fi-tr-angle-small-down flex justify-center items-center text-xl transition-transform duration-300 transform ${
                isOpenAccordion === item.id ? 'rotate-180' : 'rotate-0'
              }`}
            ></i>
          </button>
          <DropDownNavbar typeComponent={typeComponent} openDropdown={isOpenAccordion} item={item} />
        </div>
      ))}
      <Link href={'/contact'} className='text-lg font-inter'>
        <p>{t('contact')}</p>
      </Link>
    </div>
  );
};

export default DataLinkNavbar;

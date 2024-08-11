import { INavbarData } from '@/types/common';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const DropDownNavbar = ({
  openDropdown,
  item,
  typeComponent,
}: {
  openDropdown: number | null;
  item: INavbarData;
  typeComponent: string;
}) => {
  const t = useTranslations('navbar');
  return (
    <div
      className={`static lg:absolute left-0 mt-1 bg-gray-300 shadow-lg before:absolute before:left-1/2 before:-top-[2.5rem] before:transform before:-translate-x-1/2 before:bg-transparent before:h-10 before:w-full lg:p-8 z-50 transition-all duration-300 ${
        openDropdown === item.id
          ? `h-100 top-[88px] visible opacity-100 pointer-events-auto ${typeComponent !== 'navbar' ? 'p-4' : ''}`
          : 'h-0 invisible opacity-0 top-0 pointer-events-none'
      } ${typeComponent === 'navbar' ? 'w-full' : 'w-[215px] rounded-lg'}`}
    >
      <h1
        className={`font-inter font-bold border-b pb-2 border-black ${
          typeComponent === 'navbar' ? 'text-4xl ' : 'text-xl'
        }`}
      >
        {t(item.dropdownContent?.title)}
      </h1>
      <div className={`${typeComponent === 'navbar' ? 'grid grid-cols-2 gap-4 py-8' : 'grid grid-cols-1 gap-4 pt-4'}`}>
        {item.dropdownContent?.content.map((content) => (
          <Link href={content.path} className={`flex items-center gap-2`} key={content.id}>
            <div
              className={`flex-none flex justify-center items-center rounded-full bg-white p-4 ${
                typeComponent === 'navbar' ? 'h-16 w-16' : 'h-12 w-12'
              }`}
            >
              <i
                className={`fi ${content.icon} flex justify-center items-center ${
                  typeComponent === 'navbar' ? 'text-3xl' : 'text-xl'
                }`}
              ></i>
            </div>
            <div className='flex flex-col gap-1'>
              <h3 className={`font-medium font-inter ${typeComponent === 'navbar' ? 'text-xl' : 'text-lg'}`}>
                {t(content?.name)}
              </h3>
              {typeComponent === 'navbar' && <p className='font-gelasio text-gray-600'>{t(content?.des)}</p>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropDownNavbar;

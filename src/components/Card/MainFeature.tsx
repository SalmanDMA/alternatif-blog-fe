import React from 'react';

type IProps = {
  title: string;
  totalItem: string;
  icon: string;
};

const MainFeature = ({ title, totalItem, icon }: IProps) => {
  return (
    <div className='grid grid-cols-2 gap-8'>
      <div className='relative flex items-center justify-center'>
        <div className='relative w-16 h-16 sm:w-24 sm:h-24'>
          <div className='absolute inset-0 border border-orange-200  rounded transform rotate-45'></div>
          <div className='absolute bottom-1 border bg-orange-200 w-4 h-4 sm:w-6 sm:h-6  rounded transform -rotate-45'></div>
          <div className='absolute inset-0 flex items-center justify-center'>
            <i className={`${icon} text-3xl sm:text-5xl`}></i>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-xl sm:text-2xl font-bold font-inter'>{totalItem}</h3>
        <p className='text-lg sm:text-xl font-medium text-gray-600 font-gelasio'>{title}</p>
      </div>
    </div>
  );
};

export default MainFeature;

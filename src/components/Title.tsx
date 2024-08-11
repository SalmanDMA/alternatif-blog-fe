import React from 'react';

type IProps = {
  title: string;
  subTitle: string;
  styleTitle: string;
  styleContainer: string;
  styleSubTitle: string;
};

const Title = ({ title, subTitle, styleTitle, styleContainer, styleSubTitle }: IProps) => {
  return (
    <div className={`flex flex-col gap-2 sm:gap-4 ${styleContainer}`}>
      <h3
        className={`font-bold font-inter text-xl sm:text-2xl xl:text-5xl relative z-10 before:absolute before:left-[10%] before:w-[80%] before:h-4 before:bottom-0 before:-z-[1] before:rounded ${styleTitle} w-max`}
      >
        {title}
      </h3>
      <p className={`font-gelasio text-lg sm:text-xl ${styleSubTitle}`}>{subTitle}</p>
    </div>
  );
};

export default Title;

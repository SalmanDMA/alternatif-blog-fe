'use client';
import MainFeature from '@/components/Card/MainFeature';
import ModalSearchBox from '@/components/Modal/SearchBox';
import Title from '@/components/Title';
import useWindowSizeAndScroll from '@/hooks/useWindowSizeAndScroll';
import handleToggle from '@/utils/general';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

const Home = () => {
  const t = useTranslations('navbar');
  const searchBoxRef = useRef<HTMLDivElement>(null);
  const [isOpenSearchBox, setIsOpenSearchBox] = useState<boolean>(false);
  const [animationSearchBox, setAnimationSearchBox] = useState<boolean>(false);
  const { scrollPosition } = useWindowSizeAndScroll();

  const articles = [
    {
      title: 'Article 1',
      summary: 'This is a summary of article 1.',
      image: 'https://picsum.photos/id/237/200/300',
      link: 'https://picsum.photos/id/237/200/300',
    },
    {
      title: 'Article 2',
      summary: 'This is a summary of article 2.',
      image: 'https://picsum.photos/id/238/200/300',
      link: 'https://picsum.photos/id/238/200/300',
    },
    {
      title: 'Article 3',
      summary: 'This is a summary of article 3.',
      image: 'https://picsum.photos/id/239/200/300',
      link: 'https://picsum.photos/id/239/200/300',
    },
    {
      title: 'Article 4',
      summary: 'This is a summary of article 4.',
      image: 'https://picsum.photos/id/240/200/300',
      link: 'https://picsum.photos/id/240/200/300',
    },
    {
      title: 'Article 5',
      summary: 'This is a summary of article 5.',
      image: 'https://picsum.photos/id/241/200/300',
      link: 'https://picsum.photos/id/241/200/300',
    },
    {
      title: 'Article 6',
      summary: 'This is a summary of article 6.',
      image: 'https://picsum.photos/id/242/200/300',
      link: 'https://picsum.photos/id/242/200/300',
    },
    {
      title: 'Article 7',
      summary: 'This is a summary of article 7.',
      image: 'https://picsum.photos/id/243/200/300',
      link: 'https://picsum.photos/id/243/200/300',
    },
    {
      title: 'Article 8',
      summary: 'This is a summary of article 8.',
      image: 'https://picsum.photos/id/244/200/300',
      link: 'https://picsum.photos/id/244/200/300',
    },
    {
      title: 'Article 9',
      summary: 'This is a summary of article 9.',
      image: 'https://picsum.photos/id/245/200/300',
      link: 'https://picsum.photos/id/245/200/300',
    },
    {
      title: 'Article 10',
      summary: 'This is a summary of article 10.',
      image: 'https://picsum.photos/id/246/200/300',
      link: 'https://picsum.photos/id/246/200/300',
    },
  ];

  const tutorials = [
    {
      color: '#2c73df',
      icon: 'fi fi-rr-code',
      title: 'Hello there!',
      description: 'Trust yourself and keep going.',
      underlineColor: '#2c73df',
    },
    {
      color: '#e94e77',
      icon: 'fi fi-rr-code',
      title: 'Coding',
      description: 'Learn programming with our tutorials.',
      underlineColor: '#e94e77',
    },
    {
      color: '#f39c12',
      icon: 'fi fi-rr-lightbulb',
      title: 'Ideas',
      description: 'Get inspired with our creative tutorials.',
      underlineColor: '#f39c12',
    },
    {
      color: '#e94e77',
      icon: 'fi fi-rr-code',
      title: 'Coding',
      description: 'Learn programming with our tutorials.',
      underlineColor: '#e94e77',
    },
    {
      color: '#f39c12',
      icon: 'fi fi-rr-lightbulb',
      title: 'Ideas',
      description: 'Get inspired with our creative tutorials.',
      underlineColor: '#f39c12',
    },
  ];

  return (
    <main className='bg-gray-100 min-h-screen'>
      <div
        className={`${
          scrollPosition.scrollY > 10 ? 'mt-[92px]' : ''
        } bg-orange-100 w-full rounded-b-[5rem] min-h-[300px] md:min-h-[400px] xl:min-h-[500px] flex items-center`}
      >
        <div className='max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 p-8 gap-4'>
          <div className='flex flex-col justify-center items-center gap-4'>
            <h1 className='font-bold font-inter text-lg sm:text-2xl xl:text-5xl'>
              Your <span className='bg-orange-500 text-white rounded-lg p-2'>Code</span>, Your{' '}
              <span className='bg-orange-500 text-white rounded-lg p-2'>Future</span>
            </h1>
            <p className='font-gelasio mt-2 sm:mt-4 text-lg md:text-xl text-center'>
              Code Anywhere, Anytime, <br /> and Enjoy a Beautiful Experience Here!
            </p>
            <div
              className='max-w-xl w-full relative cursor-pointer'
              onClick={(e) => {
                e.stopPropagation();
                handleToggle({
                  isOpen: isOpenSearchBox,
                  setState: setIsOpenSearchBox,
                  setAnimation: setAnimationSearchBox,
                });
              }}
            >
              <input
                type='text'
                className='w-full px-4 py-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none'
                placeholder={t('placeholder_search')}
              />
              <i
                className={`fi fi-rr-search flex justify-center items-center text-xl p-2 absolute right-2 top-1/2 -translate-y-1/2 text-orange-500`}
              ></i>
            </div>
          </div>
          <div className='max-w-4xl hidden sm:flex justify-center items-center'>
            <Image
              src={'/images/code-typing.svg'}
              alt='Code Typing'
              width={100}
              height={100}
              priority
              className='w-full h-auto'
            />
          </div>
        </div>
      </div>

      <section className='max-w-[1440px] mx-auto mt-16 px-8'>
        <Title
          title='Main Feature'
          subTitle='Variety of choices to enjoy'
          styleTitle='before:bg-orange-200 text-black'
          styleSubTitle='text-black'
          styleContainer='justify-center items-center'
        />
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-14 sm:gap-20 place-items-center mt-8'>
          <MainFeature title='Articles' totalItem='+123K' icon='fi fi-rr-newspaper' />
          <MainFeature title='Tutorials' totalItem='+123K' icon='fi fi-rr-newspaper' />
          <MainFeature title='Projects' totalItem='+123K' icon='fi fi-rr-newspaper' />
          <MainFeature title='Courses' totalItem='+123K' icon='fi fi-rr-newspaper' />
        </div>
      </section>

      <section className='mt-16 sm:my-16 w-full relative'>
        <div className='sm:max-w-[80%] ml-auto bg-orange-500 sm:rounded-tl-[5rem] p-8 relative h-[580px]'>
          <Title
            title='Explore Articles'
            subTitle="Choose the articles you want, and we'll keep updating them as fast as we can."
            styleTitle='before:bg-orange-200/50 text-white'
            styleSubTitle='text-white text-center sm:text-end'
            styleContainer='justify-center items-center sm:justify-end sm:items-end'
          />
        </div>
        <div className='absolute top-[55%] left-0 w-full -translate-y-[150px] z-10 px-10 sm:pr-10 sm:pl-20 sm:px-0'>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className='mySwiper'
          >
            {articles.map((article, index) => (
              <SwiperSlide key={index}>
                <div className='bg-white shadow-lg rounded-lg p-4'>
                  <img src={article.image} alt={article.title} className='w-full h-[200px] rounded-lg object-cover' />
                  <div className='mt-4'>
                    <h1 className='font-bold font-inter text-lg'>{article.title}</h1>
                    <p className='font-gelasio text-sm'>{article.summary}</p>
                  </div>
                  <div className='mt-4'>
                    <Link
                      href={'/article'}
                      className='border border-orange-500 text-orange-500 rounded-lg px-4 py-2 font-gelasio font-bold w-full text-center inline-block hover:bg-orange-500 hover:text-white transition-all duration-300'
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className='swiper-button-prev bg-orange-500 p-2 rounded-full after:text-white'></div>
          <div className='swiper-button-next bg-orange-500 p-2 rounded-full after:text-white'></div>
        </div>

        <style jsx>{`
          .swiper-button-prev,
          .swiper-button-next {
            width: 40px;
            height: 40px;
          }

          .swiper-button-prev:after,
          .swiper-button-next:after {
            font-size: 20px !important;
            font-weight: 800;
          }
        `}</style>
      </section>

      <section className='sm:my-16 w-full relative'>
        <div className='sm:max-w-[80%] mr-auto bg-[#F1DEC6] sm:rounded-tr-[5rem] p-8 relative h-[650px]'>
          <Title
            title='Explore Tutorials'
            subTitle='Choose the tutorials you want, and improve your skills.'
            styleTitle='before:bg-orange-500/50 text-black'
            styleSubTitle='text-black text-center sm:text-start'
            styleContainer='justify-center items-center sm:justify-start sm:items-start'
          />
        </div>
        <div className='absolute top-[50%] left-0 w-full -translate-y-[150px] z-10 px-10 sm:pr-10 sm:pl-20 sm:px-0'>
          <div className='relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {tutorials.map((card, index) => (
              <div key={index} className='relative group w-full h-[200px] overflow-hidden'>
                <div
                  className={`absolute inset-0 bg-[${card.color}] flex items-center justify-center transition-transform duration-700 transform group-hover:translate-y-0 rounded-lg`}
                >
                  <i className={`${card.icon} text-white text-[80px]`}></i>
                </div>
                <div className='absolute inset-0 flex flex-col items-center justify-center p-[20px] box-border transition-transform duration-700 transform translate-y-full group-hover:translate-y-0 bg-white bg-opacity-60 backdrop-blur-md shadow-lg opacity-0 group-hover:opacity-100'>
                  <h3 className='text-[24px] text-[#414141] mb-2'>{card.title}</h3>
                  <p className='text-[#414141]'>{card.description}</p>
                  <div
                    className={`absolute bottom-[15px] left-1/2 transform -translate-x-1/2 w-[30px] h-[4px] bg-[${card.underlineColor}]`}
                  ></div>
                </div>
              </div>
            ))}

            {/* Last Card with Different Design */}
            <div className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-full h-[200px]'>
              <img
                src='https://images.unsplash.com/photo-1499856871958-5b9627545d1a'
                alt='University of Southern California'
                className='absolute inset-0 h-full w-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40'></div>
              <h3 className='relative group z-10 mt-3 text-3xl font-bold text-white max-w-max'>
                All Tutorials
                <span className='block absolute left-0 -bottom-1 h-[4px] w-1/4 bg-white transition-all duration-500 ease-in-out group-hover:w-full'></span>
                <span className='inline-block ml-2 transform transition-transform duration-500 group-hover:translate-x-2'>
                  &rarr;
                </span>
              </h3>
            </div>
          </div>
        </div>
      </section>

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
    </main>
  );
};

export default Home;

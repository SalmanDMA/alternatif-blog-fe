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
      title: 'Hello there!',
      description: 'Trust yourself and keep going.',
      image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f',
      link: '/tutorials',
    },
    {
      title: 'Coding',
      description: 'Learn programming with our tutorials.',
      image: 'https://images.unsplash.com/photo-1506765515384-028b60a970df',
      link: '/tutorials',
    },
    {
      title: 'Ideas',
      description: 'Get inspired with our creative tutorials.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      link: '/tutorials',
    },
    {
      title: 'Coding',
      description: 'Learn programming with our tutorials.',
      image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2',
      link: '/tutorials',
    },
    {
      title: 'Ideas',
      description: 'Get inspired with our creative tutorials.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
      link: '/tutorials',
    },
  ];

  return (
    <main className='bg-gray-100 min-h-screen'>
      <section
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
      </section>

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

      <section className='max-w-[1440px] mx-auto mt-16 sm:my-16'>
        <div className='w-full relative'>
          <div className='sm:max-w-[80%] ml-auto bg-orange-500 sm:rounded-tl-[5rem] p-8 relative h-[580px]'>
            <Title
              title='Explore Articles'
              subTitle="Choose the articles you want, and we'll keep updating them as fast as we can."
              styleTitle='before:bg-orange-200/50 text-white'
              styleSubTitle='text-white text-center sm:text-end'
              styleContainer='justify-center items-center sm:justify-end sm:items-end'
            />
          </div>
          <div className='absolute top-[55%] left-0 w-full -translate-y-[150px] z-10 px-10 sm:pr-10 sm:pl-20 sm:px-0 cursor-grabbing'>
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
        </div>
      </section>

      <section className='max-w-[1440px] mx-auto sm:my-16'>
        <div className='w-full relative'>
          <div className='sm:max-w-[80%] mr-auto bg-[#F1DEC6] sm:rounded-tr-[5rem] p-8 relative h-[1500px] sm:h-[890px] lg:h-[650px]'>
            <Title
              title='Explore Tutorials'
              subTitle='Choose the tutorials you want, and improve your skills.'
              styleTitle='before:bg-orange-500/50 text-black'
              styleSubTitle='text-black text-center sm:text-start'
              styleContainer='justify-center items-center sm:justify-start sm:items-start'
            />
          </div>
          <div className='absolute top-[20%] sm:top-[38%] lg:top-[50%] left-0 w-full -translate-y-[150px] z-10 px-10 sm:pr-10 sm:pl-20 sm:px-0'>
            <div className='relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              {tutorials.map((card, index) => (
                <a
                  key={index}
                  href={card.link}
                  className='relative group w-full h-[200px] overflow-hidden rounded-lg block'
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className='absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/40'></div>
                  <div className='absolute bottom-0 left-0 w-full p-2 bg-white bg-opacity-60 backdrop-blur-md shadow-lg flex justify-center items-center group-hover:hidden'>
                    <h3 className='text-xl font-bold text-white'>{card.title}</h3>
                  </div>
                  <div className='absolute inset-0 flex flex-col items-center justify-center p-[20px] box-border transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 transition-opacity opacity-0 group-hover:opacity-100 bg-white bg-opacity-60 backdrop-blur-md shadow-lg'>
                    <h3 className='text-[24px] text-[#414141] mb-2'>{card.title}</h3>
                    <p className='text-[#414141]'>{card.description}</p>
                    <div className='absolute bottom-[15px] left-1/2 transform -translate-x-1/2 w-[30px] h-[4px] bg-amber-500'></div>
                  </div>
                </a>
              ))}

              {/* Last Card with Different Design */}
              <a
                href='/all-tutorials'
                className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-full h-[200px] group'
              >
                <img
                  src='https://images.unsplash.com/photo-1499856871958-5b9627545d1a'
                  alt='All Tutorials'
                  className='absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40'></div>
                <h3 className='relative z-10 mt-3 text-3xl font-bold text-white max-w-max'>
                  All Tutorials
                  <span className='block absolute left-0 -bottom-1 h-[4px] w-1/4 bg-white transition-all duration-500 ease-in-out group-hover:w-full'></span>
                  <span className='inline-block ml-2 transform transition-transform duration-500 group-hover:translate-x-2'>
                    &rarr;
                  </span>
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-[1440px] mx-auto sm:my-16'>
        <div className='w-full relative'>
          <div className='sm:max-w-[80%] ml-auto bg-orange-500 sm:rounded-tl-[5rem] p-8 relative h-[1550px] sm:h-[950px] xl:h-[580px]'>
            <Title
              title='Explore Projects'
              subTitle='Choose the projects you want, and improve your skills.'
              styleTitle='before:bg-orange-200/50 text-white'
              styleSubTitle='text-white text-center sm:text-end'
              styleContainer='justify-center items-center sm:justify-end sm:items-end'
            />
          </div>
          <div className='absolute top-[20%] sm:top-[35%] xl:top-[55%] left-0 w-full -translate-y-[150px] z-10 px-10 sm:pr-10 sm:pl-20 sm:px-0'>
            {/* component */}
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'>
              <div className='relative overflow-hidden bg-[#F1DEC6] rounded-lg shadow-lg'>
                <svg
                  className='absolute bottom-0 left-0 mb-8'
                  viewBox='0 0 375 283'
                  fill='none'
                  style={{ transform: 'scale(1.5)', opacity: '0.1' }}
                >
                  <rect
                    x='159.52'
                    y={175}
                    width={152}
                    height={152}
                    rx={8}
                    transform='rotate(-45 159.52 175)'
                    fill='white'
                  />
                  <rect y='107.48' width={152} height={152} rx={8} transform='rotate(-45 0 107.48)' fill='white' />
                </svg>
                <div className='relative pt-10 px-10 flex items-center justify-center'>
                  <div
                    className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'
                    style={{
                      background: 'radial-gradient(black, transparent 60%)',
                      transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                      opacity: '0.2',
                    }}
                  />
                  <img
                    className='relative w-40'
                    src='https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png'
                    alt=''
                  />
                </div>
                <div className='relative text-white px-6 pb-6 mt-6'>
                  <span className='block opacity-75 -mb-1'>Indoor</span>
                  <div className='flex justify-between'>
                    <span className='block font-semibold text-xl'>Peace Lily</span>
                    <span className=' bg-white rounded-full text-[#F1DEC6] text-xs font-bold px-3 py-2 leading-none flex items-center'>
                      $36.00
                    </span>
                  </div>
                </div>
              </div>
              <div className='relative overflow-hidden bg-teal-500 rounded-lg shadow-lg'>
                <svg
                  className='absolute bottom-0 left-0 mb-8'
                  viewBox='0 0 375 283'
                  fill='none'
                  style={{ transform: 'scale(1.5)', opacity: '0.1' }}
                >
                  <rect
                    x='159.52'
                    y={175}
                    width={152}
                    height={152}
                    rx={8}
                    transform='rotate(-45 159.52 175)'
                    fill='white'
                  />
                  <rect y='107.48' width={152} height={152} rx={8} transform='rotate(-45 0 107.48)' fill='white' />
                </svg>
                <div className='relative pt-10 px-10 flex items-center justify-center'>
                  <div
                    className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'
                    style={{
                      background: 'radial-gradient(black, transparent 60%)',
                      transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                      opacity: '0.2',
                    }}
                  />
                  <img
                    className='relative w-40'
                    src='https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png'
                    alt=''
                  />
                </div>
                <div className='relative text-white px-6 pb-6 mt-6'>
                  <span className='block opacity-75 -mb-1'>Outdoor</span>
                  <div className='flex justify-between'>
                    <span className='block font-semibold text-xl'>Monstera</span>
                    <span className=' bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center'>
                      $45.00
                    </span>
                  </div>
                </div>
              </div>
              <div className='relative overflow-hidden bg-purple-500 rounded-lg shadow-lg'>
                <svg
                  className='absolute bottom-0 left-0 mb-8'
                  viewBox='0 0 375 283'
                  fill='none'
                  style={{ transform: 'scale(1.5)', opacity: '0.1' }}
                >
                  <rect
                    x='159.52'
                    y={175}
                    width={152}
                    height={152}
                    rx={8}
                    transform='rotate(-45 159.52 175)'
                    fill='white'
                  />
                  <rect y='107.48' width={152} height={152} rx={8} transform='rotate(-45 0 107.48)' fill='white' />
                </svg>
                <div className='relative pt-10 px-10 flex items-center justify-center'>
                  <div
                    className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'
                    style={{
                      background: 'radial-gradient(black, transparent 60%)',
                      transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                      opacity: '0.2',
                    }}
                  />
                  <img
                    className='relative w-40'
                    src='https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png'
                    alt=''
                  />
                </div>
                <div className='relative text-white px-6 pb-6 mt-6'>
                  <span className='block opacity-75 -mb-1'>Outdoor</span>
                  <div className='flex justify-between'>
                    <span className='block font-semibold text-xl'>Oak Tree</span>
                    <span className=' bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center'>
                      $68.50
                    </span>
                  </div>
                </div>
              </div>
              <div className='relative overflow-hidden bg-sky-500 rounded-lg shadow-lg'>
                <svg
                  className='absolute bottom-0 left-0 mb-8'
                  viewBox='0 0 375 283'
                  fill='none'
                  style={{ transform: 'scale(1.5)', opacity: '0.1' }}
                >
                  <rect
                    x='159.52'
                    y={175}
                    width={152}
                    height={152}
                    rx={8}
                    transform='rotate(-45 159.52 175)'
                    fill='white'
                  />
                  <rect y='107.48' width={152} height={152} rx={8} transform='rotate(-45 0 107.48)' fill='white' />
                </svg>
                <div className='relative pt-10 px-10 flex items-center justify-center'>
                  <div
                    className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'
                    style={{
                      background: 'radial-gradient(black, transparent 60%)',
                      transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                      opacity: '0.2',
                    }}
                  />
                  <img
                    className='relative w-40'
                    src='https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png'
                    alt=''
                  />
                </div>
                <div className='relative text-white px-6 pb-6 mt-6'>
                  <span className='block opacity-75 -mb-1'>Outdoor</span>
                  <div className='flex justify-between'>
                    <span className='block font-semibold text-xl'>Oak Tree</span>
                    <span className=' bg-white rounded-full text-sky-500 text-xs font-bold px-3 py-2 leading-none flex items-center'>
                      $68.50
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-[1440px] mx-auto sm:my-16'>
        <div className='w-full relative'>
          <div className='sm:max-w-[80%] mr-auto bg-[#F1DEC6] sm:rounded-tr-[5rem] p-8 relative h-[1500px] sm:h-[900px] lg:h-[850px] xl:h-[580px]'>
            <Title
              title='Explore Courses'
              subTitle='Choose the course you want, and improve your skills.'
              styleTitle='before:bg-orange-500/50 text-black'
              styleSubTitle='text-black text-center sm:text-start'
              styleContainer='justify-center items-center sm:justify-start sm:items-start'
            />
          </div>
          <div className='absolute top-[11%] sm:top-[18%] lg:top-[20%] xl:top-[32%] left-0 w-full z-10 px-10 sm:pr-10 sm:pl-20 sm:px-0'>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-14 place-items-center'>
              <div className='relative group w-full h-full'>
                <div className='absolute top-0 left-0 h-full w-full bg-gray-400 rounded-2xl transform rotate-6 z-10 transition-transform duration-300' />

                <div className='relative h-full w-full space-y-6 rounded-2xl bg-white p-6 transition-transform duration-300 transform rotate-6 group-hover:rotate-0 z-50'>
                  <div className='flex justify-end'>
                    <div className='h-4 w-4 rounded-full bg-gray-900' />
                  </div>
                  <header className='text-center text-lg sm:text-xl font-extrabold text-gray-600'>2021.09.01</header>
                  <div>
                    <p className='text-center text-2xl sm:text-3xl font-extrabold text-gray-900'>
                      Online Test (Physics)
                    </p>
                    <p className='text-center text-xl sm:text-2xl font-extrabold text-[#FE5401]'>2 hours</p>
                  </div>
                  <footer className='mb-10 flex justify-center'>
                    <button className='flex items-baseline gap-2 rounded-lg bg-[#FE5401] px-4 py-2.5 text-lg sm:text-xl font-bold text-white hover:bg-[#FF7308]'>
                      <span>Start</span>
                    </button>
                  </footer>
                </div>
              </div>
              <div className='relative group w-full h-full'>
                <div className='absolute top-0 left-0 h-full w-full bg-gray-400 rounded-2xl transform rotate-6 z-10 transition-transform duration-300' />

                <div className='relative h-full w-full space-y-6 rounded-2xl bg-white p-6 transition-transform duration-300 transform rotate-6 group-hover:rotate-0 z-50'>
                  <div className='flex justify-end'>
                    <div className='h-4 w-4 rounded-full bg-gray-900' />
                  </div>
                  <header className='text-center text-lg sm:text-xl font-extrabold text-gray-600'>2021.09.01</header>
                  <div>
                    <p className='text-center text-2xl sm:text-3xl font-extrabold text-gray-900'>
                      Online Test (Physics)
                    </p>
                    <p className='text-center text-xl sm:text-2xl font-extrabold text-[#FE5401]'>2 hours</p>
                  </div>
                  <footer className='mb-10 flex justify-center'>
                    <button className='flex items-baseline gap-2 rounded-lg bg-[#FE5401] px-4 py-2.5 text-lg sm:text-xl font-bold text-white hover:bg-[#FF7308]'>
                      <span>Start</span>
                    </button>
                  </footer>
                </div>
              </div>
              <div className='relative group w-full h-full'>
                <div className='absolute top-0 left-0 h-full w-full bg-gray-400 rounded-2xl transform rotate-6 z-10 transition-transform duration-300' />

                <div className='relative h-full w-full space-y-6 rounded-2xl bg-white p-6 transition-transform duration-300 transform rotate-6 group-hover:rotate-0 z-50'>
                  <div className='flex justify-end'>
                    <div className='h-4 w-4 rounded-full bg-gray-900' />
                  </div>
                  <header className='text-center text-lg sm:text-xl font-extrabold text-gray-600'>2021.09.01</header>
                  <div>
                    <p className='text-center text-2xl sm:text-3xl font-extrabold text-gray-900'>
                      Online Test (Physics)
                    </p>
                    <p className='text-center text-xl sm:text-2xl font-extrabold text-[#FE5401]'>2 hours</p>
                  </div>
                  <footer className='mb-10 flex justify-center'>
                    <button className='flex items-baseline gap-2 rounded-lg bg-[#FE5401] px-4 py-2.5 text-lg sm:text-xl font-bold text-white hover:bg-[#FF7308]'>
                      <span>Start</span>
                    </button>
                  </footer>
                </div>
              </div>
              <div className='relative group w-full h-full'>
                <div className='absolute top-0 left-0 h-full w-full bg-gray-400 rounded-2xl transform rotate-6 z-10 transition-transform duration-300' />

                <div className='relative h-full w-full space-y-6 rounded-2xl bg-white p-6 transition-transform duration-300 transform rotate-6 group-hover:rotate-0 z-50'>
                  <div className='flex justify-end'>
                    <div className='h-4 w-4 rounded-full bg-gray-900' />
                  </div>
                  <header className='text-center text-lg sm:text-xl font-extrabold text-gray-600'>2021.09.01</header>
                  <div>
                    <p className='text-center text-2xl sm:text-3xl font-extrabold text-gray-900'>
                      Online Test (Physics)
                    </p>
                    <p className='text-center text-xl sm:text-2xl font-extrabold text-[#FE5401]'>2 hours</p>
                  </div>
                  <footer className='mb-10 flex justify-center'>
                    <button className='flex items-baseline gap-2 rounded-lg bg-[#FE5401] px-4 py-2.5 text-lg sm:text-xl font-bold text-white hover:bg-[#FF7308]'>
                      <span>Start</span>
                    </button>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`bg-orange-500 w-full min-h-[300px] md:min-h-[400px] xl:min-h-[500px] flex items-center sm:my-16`}
      >
        <div className='max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 p-8 gap-4 relative'>
          {/* Container Relative untuk mengontrol Ilustrasi */}
          <div className='w-full hidden lg:flex relative'>
            {/* Ilustrasi Dimulai di Sini */}
            <div className='illustration one bg-orange-500 border-[15px] border-solid border-orange-500 rounded-[15px] shadow-[0_0_18px_0_rgba(0,0,0,0.17)] overflow-hidden absolute rotate-45 h-[60px] w-[60px] lg:top-[-40%] lg:left-[10%] xl:top-[-60%] xl:left-[20%]'></div>

            <div className='illustration two bg-orange-500 border-[15px] border-solid border-orange-500 rounded-[25px] shadow-[0_0_18px_0_rgba(0,0,0,0.17)] overflow-hidden absolute rotate-45 h-[180px] w-[180px] lg:top-[-40%] lg:right-[10%] xl:top-[-60%]'>
              <img
                className='h-[105%] rotate-[-45deg] scale-[1.3]'
                src='https://res.cloudinary.com/imajin/image/upload/v1592702765/education/about_class_eng2pq.jpg'
                alt='Illustration Two'
              />
            </div>

            <div className='illustration three bg-orange-500 border-[15px] border-solid border-orange-500 rounded-[25px] shadow-[0_0_18px_0_rgba(0,0,0,0.17)] overflow-hidden absolute rotate-45 h-[160px] w-[160px] lg:top-[10%] lg:left-[5%] xl:left-[20%]'>
              <img
                className='h-[105%] transform translate-x-[-20%] rotate-[-45deg] scale-[1.3]'
                src='https://res.cloudinary.com/imajin/image/upload/v1592702764/education/about_learn_ykpm08.jpg'
                alt='Illustration Three'
              />
            </div>

            <div className='illustration four bg-orange-500 border-[15px] border-solid border-orange-500 rounded-[25px] shadow-[0_0_18px_0_rgba(0,0,0,0.17)] overflow-hidden absolute rotate-45 h-[210px] w-[210px] lg:bottom-[-50%] lg:right-[15%]'>
              <img
                className='h-[105%] rotate-[-45deg] scale-[1.3]'
                src='https://res.cloudinary.com/imajin/image/upload/v1592702764/education/about_student_getuwg.jpg'
                alt='Illustration Four'
              />
            </div>

            <div className='illustration five bg-orange-500 border-[15px] border-solid border-orange-500 rounded-[15px] shadow-[0_0_18px_0_rgba(0,0,0,0.17)] overflow-hidden absolute rotate-45 h-[60px] w-[60px] lg:bottom-[-40%] lg:left-[5%] xl:bottom-[-60%]'></div>
            {/* Ilustrasi Berakhir di Sini */}
          </div>

          {/* Konten Text */}
          <div className='flex flex-col justify-center items-center gap-8'>
            <Title
              title='About Us'
              subTitle='Our mission is to diversify the tech industry through accessible education and projects, opening doors of opportunity and empowering people to achieve their dreams.'
              styleTitle='before:bg-orange-200/50 text-white mb-4'
              styleSubTitle='text-white text-center lg:text-end'
              styleContainer='justify-center items-center lg:justify-end lg:items-end'
            />
            <div className='w-full relative cursor-pointer flex justify-center items-center lg:justify-end lg:items-end'>
              <button className='flex items-baseline gap-2 rounded-lg bg-white px-4 py-2.5 text-lg sm:text-xl font-bold text-orange-500 hover:bg-slate-300'>
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`max-w-[1440px] mx-auto bg-[#F1DEC6] w-full min-h-[300px] md:min-h-[400px] xl:min-h-[500px] flex items-center sm:my-16`}
      >
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='p-8'>
            <h3 className='text-3xl font-bold text-center sm:text-start'>Learn anywhere and anytime</h3>
            <p className='text-lg text-center sm:text-start'>
              Learning in Alternatives is suitable for anyone who wants to start programming or is already a
              professional.
            </p>
            <button className='flex justify-center items-center gap-2 rounded-lg px-4 py-2.5 text-lg sm:text-xl font-bold'>
              See all learning
              <i className='fi fi-rr-arrow-right flex items-center justify-center'></i>
            </button>
          </div>
          <div></div>
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

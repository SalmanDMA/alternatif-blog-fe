import Modal from '.';

interface ModalSearchBoxProps {
  searchBoxRef: React.RefObject<HTMLDivElement>;
  t: (key: string) => string;
  animationSearchBox: boolean;
  isOpenSearchBox: boolean;
  setAnimationSearchBox: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenSearchBox: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalSearchBox: React.FC<ModalSearchBoxProps> = ({
  searchBoxRef,
  t,
  isOpenSearchBox,
  animationSearchBox,
  setAnimationSearchBox,
  setIsOpenSearchBox,
}) => {
  return (
    <Modal
      ref={searchBoxRef}
      isAnimation={animationSearchBox}
      isOpenModal={isOpenSearchBox}
      setIsOpenModal={setIsOpenSearchBox}
      setAnimationModal={setAnimationSearchBox}
      header={
        <div className='flex gap-2 items-center'>
          <i className='fi fi-rr-search flex justify-center items-center text-2xl'></i>
          <h2 className='text-lg font-inter font-bold'>{t('search')}</h2>
        </div>
      }
      footer={
        <div className='flex flex-wrap gap-2 sm:gap-4 items-center justify-center sm:justify-start'>
          <div className='flex gap-2 items-center'>
            <div className='size-4 rounded-full bg-sky-500'></div>
            <p className='text-lg font-gelasio'>{t('tutorials')}</p>
          </div>
          <div className='flex gap-2 items-center'>
            <div className='size-4 rounded-full bg-red-500'></div>
            <p className='text-lg font-gelasio'>{t('articles')}</p>
          </div>
          <div className='flex gap-2 items-center'>
            <div className='size-4 rounded-full bg-green-500'></div>
            <p className='text-lg font-gelasio'>{t('open_source')}</p>
          </div>
          <div className='flex gap-2 items-center'>
            <div className='size-4 rounded-full bg-orange-500'></div>
            <p className='text-lg font-gelasio'>{t('course')}</p>
          </div>
        </div>
      }
    >
      <input
        type='text'
        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500'
        placeholder={t('placeholder_search')}
      />
    </Modal>
  );
};

export default ModalSearchBox;

'use client';

interface ModalProps {
  isAnimation: boolean;
  onClose: () => void;
  children: React.ReactNode;
  header: React.ReactNode;
  footer?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, isAnimation, children, header, footer }) => {
  return (
    <div
      className='fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-10 '
      onClick={(e) => {
        const modalContainer = document.getElementById('modalContainer');
        const modalContent = document.getElementById('modalContent');

        if (e.target === modalContainer && e.target !== modalContent) {
          onClose();
          e.stopPropagation();
        }
      }}
    >
      <div
        className={`absolute left-0 w-full h-full flex justify-center items-center transition-all duration-300 p-8 cursor-pointer ${
          isAnimation ? 'opacity-100 top-0' : 'opacity-0 top-[50%]'
        }`}
        id='modalContainer'
      >
        <div className='relative bg-white shadow-xl rounded-lg w-full max-w-xl cursor-default' id='modalContent'>
          <div className='flex justify-between items-center p-4'>
            {header}
            <button type='button' className='focus:outline-none flex justify-center items-center' onClick={onClose}>
              <i
                className={`fi fi-br-cross-small flex justify-center items-center text-2xl rounded-full transition-all duration-300 hover:bg-gray-200 p-2`}
              ></i>
            </button>
          </div>
          <div className='overflow-y-auto max-h-96 bg-gray-400 p-4'>{children}</div>
          <div className='p-4'>{footer}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

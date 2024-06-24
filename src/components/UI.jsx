import { atom, useAtom } from 'jotai';

export const currentPageAtom = atom('intro');

export const UI = ({ handleClick }) => {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  const onClickedy = (e) => {
    setCurrentPage('store');
    handleClick(e);
  };
  return (
    <div className='fixed inset-0 pointer-events-none'>
      <section
        className={`flex w-2/3 h-full flex-col items-center justify-center 
      duration-500
      ${currentPage === 'home' ? '' : 'opacity-0'}`}
      >
        <div className='h-[66%]'></div>
        <a
          href='#_'
          className='relative z-50 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-300 rounded-full shadow-md group pointer-events-auto cursor-pointer'
          /* onClick={() => setCurrentPage('store')} */
          onClick={(e) => onClickedy(e)}
        >
          <span className='absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M14 5l7 7m0 0l-7 7m7-7H3'
              ></path>
            </svg>
          </span>
          <span className='absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease'>
            ENTER
          </span>
          <span className='relative invisible'>ENTER</span>
        </a>
      </section>
    </div>
  );
};

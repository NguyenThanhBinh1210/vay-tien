/* eslint-disable @typescript-eslint/no-explicit-any */

const ModalBase = ({ isOpen, onClose, title, children }: any) => {
  return (
    <div
      className={`${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      } fixed z-10 bg-white max-w-[500px] left-1/2 -translate-x-1/2 top-0  w-full h-full overflow-scroll pb-5`}
    >
      <div className='py-3 bg-primary flex justify-between text-white px-2'>
        <button onClick={onClose}>
          <svg
            viewBox='64 64 896 896'
            focusable='false'
            data-icon='left'
            width='1em'
            height='1em'
            fill='currentColor'
            aria-hidden='true'
          >
            <path d='M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z'></path>
          </svg>
        </button>
        <h2 className='font-bold text-xl'>{title}</h2>
        <div></div>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default ModalBase

/* eslint-disable @typescript-eslint/no-explicit-any */
import ModalBase from '~/components/layouts/ModalBase'
const XacMinh = ({ isOpen, onClose }: any) => {
  return (
    <ModalBase isOpen={isOpen} onClose={onClose} title='Xác minh'>
      <p className='font-bold text-lg text-center mt-3 mb-4'>Chụp ảnh định danh KYC</p>
      <div className='px-4 space-y-5'>
        <label
          htmlFor='mattruoc'
          className='bg-[#eee] rounded-md w-full h-[180px] flex flex-col items-center justify-center'
        >
          <svg
            viewBox='64 64 896 896'
            focusable='false'
            data-icon='camera'
            className='w-8 h-8'
            fill='currentColor'
            aria-hidden='true'
          >
            <path d='M864 248H728l-32.4-90.8a32.07 32.07 0 00-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z' />
          </svg>
          <p className='font-bold mt-1'>Mặt trước CMND / CCCD</p>
          <input id='mattruoc' type='file' className='hidden' />
        </label>
        <label
          htmlFor='matsau'
          className='bg-[#eee] rounded-md w-full h-[180px] flex flex-col items-center justify-center'
        >
          <svg
            viewBox='64 64 896 896'
            focusable='false'
            data-icon='camera'
            className='w-8 h-8'
            fill='currentColor'
            aria-hidden='true'
          >
            <path d='M864 248H728l-32.4-90.8a32.07 32.07 0 00-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z' />
          </svg>
          <p className='font-bold mt-1'>Mặt sau CMND / CCCD</p>
          <input id='matsau' type='file' className='hidden' />
        </label>
        <label
          htmlFor='chandung'
          className='bg-[#eee] rounded-md w-full h-[180px] flex flex-col items-center justify-center'
        >
          <svg
            viewBox='64 64 896 896'
            focusable='false'
            data-icon='camera'
            className='w-8 h-8'
            fill='currentColor'
            aria-hidden='true'
          >
            <path d='M864 248H728l-32.4-90.8a32.07 32.07 0 00-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z' />
          </svg>
          <p className='font-bold mt-1'>Ảnh chân dung</p>
          <input id='chandung' type='file' className='hidden' />
        </label>
      </div>
      <button className='text-white bg-primary rounded-md py-1 pb-2 w-1/2 font-bold block mx-auto text-lg mt-5 '>
        Tiếp tục
      </button>
    </ModalBase>
  )
}

export default XacMinh

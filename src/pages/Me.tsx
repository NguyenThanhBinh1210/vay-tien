import { useState } from 'react'
import imga from '~/assets/images/tick.e14cb23e178b8d3acd8f.png'
import KhoanVay from '~/modules/KhoanVay'
import XacMinh from '~/modules/XacMinh'
const Me = () => {
  const [isShowVay, setShowVay] = useState(false)
  const [isShowXacMinh, setShowXacMinh] = useState(false)
  return (
    <div>
      <div className='flex items-center justify-center text-white font-bold bg-primary py-2 px-3'>Hồ sơ</div>
      <div className='px-5 text-sm pb-20'>
        <div className='w-[120px] h-[120px] rounded-full overflow-hidden mx-auto mt-5'>
          <svg
            className='w-full h-full'
            viewBox='0 0 508 508'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
          >
            <g id='Page-1' stroke='none' strokeWidth={1} fill='none' fillRule='evenodd'>
              <g id='man' fillRule='nonzero'>
                <circle id='Oval' fill='#9D9D9D' cx={254} cy={254} r={254} />
                <g id='Group' transform='translate(48.000000, 334.000000)' fill='#E6E9EE'>
                  <path
                    d='M207.2,29.2 C206.8,29.2 206.4,29.6 205.6,29.6 C205.2,29.6 204.8,29.2 204,29.2 L207.2,29.2 Z'
                    id='Path'
                  />
                  <path
                    d='M410.4,70 C364.4,132.8 289.6,174 205.6,174 C121.6,174 47.2,133.2 0.8,70 C36.8,31.6 85.6,11.2 126.4,0.8 C122.8,30 138,69.2 138.4,68 C153.6,32.8 205.2,29.6 205.2,29.6 C205.2,29.6 256.8,32.4 272.4,68 C272.8,68.8 288,30 284.4,0.8 C325.6,11.2 374.4,31.6 410.4,70 Z'
                    id='Path'
                  />
                </g>
                <path
                  d='M316.8,308 L316.8,308 C316.8,313.2 313.6,340.8 255.2,363.2 L252,363.2 C193.6,340.8 190.4,313.2 190.4,308 L190.4,308 C190.8,297.6 193.2,287.2 197.6,277.6 C213.6,295.6 232.8,307.6 253.6,307.6 C274,307.6 293.6,296 309.6,277.6 C314,287.2 316.8,297.6 316.8,308 Z'
                  id='Path'
                  fill='#FFE7AC'
                />
                <path
                  d='M288.4,372.4 L275.6,398 L231.6,398 L218.8,372.4 C236.4,364.8 253.6,363.6 253.6,363.6 C253.6,363.6 271.2,364.8 288.4,372.4 Z'
                  id='Path'
                  fill='#F1543F'
                />
                <path
                  d='M218,505.6 C229.6,507.2 241.6,508 254,508 C266,508 278,507.2 290,505.6 L276,398.4 L232,398.4 L218,505.6 Z'
                  id='Path'
                  fill='#FF7058'
                />
                <g id='Group' transform='translate(174.000000, 307.000000)' fill='#FFFFFF'>
                  <path
                    d='M142.8,0.2 C142.8,0.2 145.6,32.2 79.6,56.6 C79.6,56.6 131.2,59.4 146.8,95 C147.2,96.6 177.2,19 142.8,0.2 Z'
                    id='Path'
                  />
                  <path
                    d='M16.4,0.2 C-17.6,19 12,96.2 12.8,95 C28,59.8 80,56.6 80,56.6 C13.6,32.2 16.4,0.2 16.4,0.2 Z'
                    id='Path'
                  />
                </g>
                <path
                  d='M312.8,285.6 C296,303.6 276,315.2 253.6,315.2 C231.2,315.2 211.2,303.6 194.4,285.6 C195.2,282.8 196.4,280 197.6,277.6 C213.6,295.6 232.8,307.6 253.6,307.6 C274.4,307.6 293.6,296 309.6,277.6 C310.8,280 312,282.8 312.8,285.6 Z'
                  id='Path'
                  fill='#FFD28C'
                />
                <path
                  d='M362.8,224.4 C354.4,238.4 341.6,246.8 332,245.2 C312.8,280.8 284.8,307.2 253.6,307.2 C222.4,307.2 194.4,280.4 175.2,245.2 C165.6,246.4 152.8,238.4 144.4,224.4 C134.4,208 134,190 143.6,184 C146,182.8 148.4,182 151.2,182.4 C157.6,198.8 166.4,208.8 166.4,208.8 C157.2,158 194.8,152.4 188.4,103.6 C188.4,103.6 212,156 279.6,119.2 L274.4,129.2 C368.8,108 337.2,219.2 336.4,222 C347.2,208.4 354,194.8 358,182.4 C359.6,182.4 361.6,183.2 362.8,184 C373.2,189.6 372.8,208 362.8,224.4 Z'
                  id='Path'
                  fill='#FFE7AC'
                />
                <path
                  d='M308,50.8 C315.6,50 328,56.8 328,56.8 C294,18 238.4,42.8 238.4,42.8 C257.2,26.8 274,28.4 274,28.4 C194.4,16.4 180.8,64 180.8,64 C177.2,58.4 177.2,50.4 177.6,46.4 C172,56 178,75.2 178,75.2 C172.4,61.2 152.8,63.6 152.8,63.6 C169.6,66.4 172.4,76.8 172.4,76.8 C130.4,92.4 137.6,136 137.6,136 L147.6,124 C135.2,171.6 166.8,208.4 166.8,208.4 C157.6,157.6 195.2,152 188.8,103.2 C188.8,103.2 212.4,155.6 280,118.8 L274.8,128.8 C370.4,107.2 336.8,222 336.8,222 C370.8,178.8 365.6,134.4 365.6,134.4 L369.6,150.4 C380.4,78.4 308,50.8 308,50.8 Z'
                  id='Path'
                  fill='#324A5E'
                />
              </g>
            </g>
          </svg>
        </div>
        <p className='font-semibold text-center mt-2 tracking-wider'>0234234234</p>
        <div className='bg-[rgba(0,106,176,0.14)] p-2 px-4 mt-4'>
          <p className='font-bold border-b-2 border pb-1'>Xác thực tài khoản</p>
          <div className='py-4 pl-8 flex items-center justify-center '>
            <svg
              className='text-primary w-8 h-8 flex-shrink-0 mr-8'
              viewBox='64 64 896 896'
              focusable='false'
              data-icon='alert'
              fill='currentColor'
              aria-hidden='true'
            >
              <path d='M512 244c176.18 0 319 142.82 319 319v233a32 32 0 01-32 32H225a32 32 0 01-32-32V563c0-176.18 142.82-319 319-319zM484 68h56a8 8 0 018 8v96a8 8 0 01-8 8h-56a8 8 0 01-8-8V76a8 8 0 018-8zM177.25 191.66a8 8 0 0111.32 0l67.88 67.88a8 8 0 010 11.31l-39.6 39.6a8 8 0 01-11.31 0l-67.88-67.88a8 8 0 010-11.31l39.6-39.6zm669.6 0l39.6 39.6a8 8 0 010 11.3l-67.88 67.9a8 8 0 01-11.32 0l-39.6-39.6a8 8 0 010-11.32l67.89-67.88a8 8 0 0111.31 0zM192 892h640a32 32 0 0132 32v24a8 8 0 01-8 8H168a8 8 0 01-8-8v-24a32 32 0 0132-32zm148-317v253h64V575h-64z' />
            </svg>
            Bổ sung CMND/CCCD và chân dung để hoàn tất định danh
          </div>
          <button onClick={() => setShowXacMinh(true)} className='text-primary font-bold block ml-auto mt-3'>
            Xác thực ngay
          </button>
        </div>
        <button
          onClick={() => setShowVay(true)}
          className='bg-primary px-4 rounded-md py-2 border mt-6 w-full font-bold text-white flex items-center justify-between mx-auto'
        >
          Hợp đồng vay
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
            <path
              fillRule='evenodd'
              d='M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        <button className='bg-primary px-4 rounded-md py-2 border mt-2 w-full font-bold text-white flex items-center justify-between mx-auto'>
          Thông tin cá nhân
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
            <path
              fillRule='evenodd'
              d='M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        <button className='bg-primary px-4 rounded-md py-2 border mt-2 w-full font-bold text-white flex items-center justify-between mx-auto'>
          Liên hệ tư vấn - hỗ trợ
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
            <path
              fillRule='evenodd'
              d='M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        <button className='bg-red-700 rounded-full px-4 justify-center py-2 border mt-6 w-full font-bold text-white flex items-center gap-x-4 mx-auto'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15'
            />
          </svg>
          Đăng xuất
        </button>
        <img className='w-[100px] mt-7 mx-auto' src={imga} alt='imga' />
        <p className='text-center px-2'>® Bản quyền thuộc về CÔNG TY TÀI CHÍNH TNHH MTV HOME CREDIT VIỆT NAM</p>
      </div>
      <KhoanVay isOpen={isShowVay} onClose={() => setShowVay(false)}></KhoanVay>
      <XacMinh isOpen={isShowXacMinh} onClose={() => setShowXacMinh(false)}></XacMinh>
    </div>
  )
}

export default Me

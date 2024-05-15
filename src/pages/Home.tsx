import Banner from '~/assets/images/header-img-news.png'
import tick from '~/assets/images/tick.e14cb23e178b8d3acd8f.png'
import Banner2 from '~/assets/images/home-credit-va-hanh-trinh-chinh-phuc-khach-hang-viet-nam-45-.5254.jpg'
import ThongBao from '~/modules/ThongBao'
import { useState } from 'react'
import VayTien from '~/modules/VayTien'
const Home = () => {
  const [isShowXacMinh, setShowXacMinh] = useState(false)
  const [isShowVayTien, setShowVayTien] = useState(false)

  return (
    <div>
      <div className='flex items-center justify-between bg-primary py-2 px-3'>
        <div className='text-white text-sm'>
          <p>Xin chào,</p>
          <p className='font-bold'>0388685353</p>
        </div>
        <button onClick={() => setShowXacMinh(true)} className='cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-4 h-4 text-white'
          >
            <path
              fillRule='evenodd'
              d='M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>

      <div className='px-5 text-sm'>
        <div className='bg-[#eee] rounded-md my-3 py-1 text-center text-sm'>090***6 đã rút 150.000.000 đ</div>
        <div className='rounded-md overflow-hidden'>
          <img src={Banner} alt='Banner' className='w-full h-full object-cover' />
        </div>
        <button
          onClick={() => setShowVayTien(true)}
          className='bg-primary rounded-lg py-2 border mt-5 px-10 font-bold text-white block mx-auto'
        >
          Đăng ký khoản vay
        </button>
        <div className='mt-6'>
          <div className='border-primary mb-2 text-primary border rounded-md px-3 py-1'>
            Thủ tục vay nhanh chóng, đơn giản
          </div>
          <div className='border-primary mb-2 text-primary border rounded-md px-3 py-1'>
            Hạn mức vay lên đến 500 triệu VNĐ
          </div>
          <div className='border-primary mb-2 text-primary border rounded-md px-3 py-1'>
            Nhận tiền chỉ sau 30 phút làm hồ sơ
          </div>
        </div>
        <div className='rounded-md overflow-hidden mt-5'>
          <img src={Banner2} alt='Banner2' className='w-full h-full object-cover' />
        </div>
        <div className='rounded-md overflow-hidden mt-5 w-[100px] mx-auto'>
          <img src={tick} alt='tick' className='w-full h-full object-cover' />
        </div>
      </div>
      <ThongBao isOpen={isShowXacMinh} onClose={() => setShowXacMinh(false)}></ThongBao>
      <VayTien isOpen={isShowVayTien} onClose={() => setShowVayTien(false)}></VayTien>
    </div>
  )
}

export default Home

/* eslint-disable @typescript-eslint/no-explicit-any */
import ModalBase from '~/components/layouts/ModalBase'
import rong from '~/assets/images/rong.png'
const KhoanVay = ({ isOpen, onClose }: any) => {
  return (
    <ModalBase isOpen={isOpen} onClose={onClose} title='Khoản vay'>
      <img className='mx-auto mt-6' src={rong} alt='rong' />
      <p className='mt-2 text-center'>Bạn chưa có khoản vay nào</p>
      <button className='text-white bg-primary rounded-md py-1 pb-2 w-1/2 font-bold block mx-auto text-lg mt-5 '>
        Đăng ký ngay
      </button>
    </ModalBase>
  )
}

export default KhoanVay

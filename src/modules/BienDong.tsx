/* eslint-disable @typescript-eslint/no-explicit-any */
import ModalBase from '~/components/layouts/ModalBase'
import rong from '~/assets/images/rong.png'
const BienDong = ({ isOpen, onClose }: any) => {
  return (
    <ModalBase isOpen={isOpen} onClose={onClose} title='Lịch sử giao dịch'>
      <img className='mx-auto mt-6' src={rong} alt='rong' />
      <p className='mt-2 text-center'>Chưa có dữ liệu.</p>
    </ModalBase>
  )
}

export default BienDong

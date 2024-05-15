/* eslint-disable @typescript-eslint/no-explicit-any */
import ModalBase from '~/components/layouts/ModalBase'
import rong from '~/assets/images/rong.png'
const ThongBao = ({ isOpen, onClose }: any) => {
  return (
    <ModalBase isOpen={isOpen} onClose={onClose} title='Thông báo'>
      <img className='mx-auto mt-6' src={rong} alt='rong' />
      <p className='mt-2 text-center'>Chưa có thông báo nào.</p>
    </ModalBase>
  )
}

export default ThongBao

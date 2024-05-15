/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import ModalBase from '~/components/layouts/ModalBase'
import { Dialog, DialogBody } from '@material-tailwind/react'
const VayTien = ({ isOpen, onClose }: any) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(!open)
  return (
    <ModalBase isOpen={isOpen} onClose={onClose} title='Chọn khoản vay'>
      <div style={{ backgroundImage: 'linear-gradient(180deg,#e11931,#8400001d)' }} className=' '>
        <div className='py-3'>
          <p className='text-white text-lg pl-2'>Số tiền vay</p>
          <div className='px-5 mt-1'>
            <input className='bg-white w-full rounded-md px-2 py-1 ' type='text' placeholder='Nhập số tiền cần vay ' />
            <div className='flex justify-between mt-1 text-sm'>
              <span>Từ 20.000.000đ</span>
              <span>Đến 500.000.000đ</span>
            </div>
            <div className='flex justify-between mt-5'>
              <span>Chọn thời hạn vay</span>
              <select className='bg-white px-2 w-1/2 py-1 rounded' name='' id=''>
                <option value=''>6 tháng</option>
                <option value=''>12 tháng</option>
                <option value=''>24 tháng</option>
                <option value=''>36 tháng</option>
                <option value=''>48 tháng</option>
                <option value=''>60 tháng</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className='p-10 px-7'>
        <div
          className='rounded-lg pb-4'
          style={{
            boxShadow: '0 8px 6px rgba(0,0,0,.2)',
            backgroundImage: 'linear-gradient(180deg,#e11931,#e119310d)'
          }}
        >
          <p className='text-center text-white text-xl pt-2 font-semibold'>Thông tin khoản vay</p>
          <div className='px-3 mt-3 space-y-3'>
            <div className='flex text-sm justify-between items-center '>
              <span>Số tiền</span>
              <span>đ</span>
            </div>
            <div className='flex text-sm justify-between items-center '>
              <span>Thời hạn vay</span>
              <span>tháng</span>
            </div>
            <div className='flex text-sm justify-between items-center '>
              <span>Ngày vay</span>
              <span>15/5/2024</span>
            </div>
            <div className='flex text-sm justify-between items-center '>
              <span>Hình thức thanh toán</span>
              <span>Trả góp mỗi tháng</span>
            </div>
          </div>
        </div>
        <div className='mt-5 space-y-3'>
          <div className='flex items-center'>
            <div className='w-[150px] text-sm'>Trả nợ kì đầu</div>
            <div>0 VNĐ</div>
          </div>
          <div className='flex items-center'>
            <div className='w-[150px] text-sm'>Lãi suất hàng tháng</div>
            <div>1%</div>
          </div>
          <div onClick={handleOpen} className='text-sm text-blue-600'>
            Chi tiết trả nợ
          </div>
        </div>
        <button className='text-white bg-primary rounded-full py-3 pb-3.5 px-10 font-bold block mx-auto text-lg mt-5 '>
          Xác nhận khoản vay
        </button>
      </div>
      <Dialog placeholder='' open={open} handler={handleOpen}>
        <DialogBody placeholder='' className='h-[400px] overflow-scroll'>
          <table className='w-full text-sm'>
            <thead className=''>
              <th className='py-4 bg-[#fafafa] text-black pl-2 text-left'>Kỳ</th>
              <th className='py-4 bg-[#fafafa] text-black pl-2'>Số tiền</th>
              <th className='py-4 bg-[#fafafa] text-black pl-2'>Ngày đóng</th>
            </thead>
            <tbody className='text-black'>
              <tr>
                <td className='pl-2 py-3 '>Kì thứ 1</td>
                <td className='pl-2 py-3 text-center font-bold '>128,344,445</td>
                <td className='pl-2 py-3 text-center font-bold '>15-6</td>
              </tr>
            </tbody>
          </table>
        </DialogBody>
        <div className='flex justify-end p-3'>
          <button onClick={handleOpen} className=' rounded-md px-4 py-1 text-sm text-white bg-blue-500'>
            OK
          </button>
        </div>
      </Dialog>
    </ModalBase>
  )
}

export default VayTien

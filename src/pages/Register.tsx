import { Link } from 'react-router-dom'
import homeiomage from '~/assets/images/HomeCredit_Logo_Trademark-01.png'
import photo_2023 from '~/assets/images/photo_2023-02-05_03-53-26.jpg'
const Register = () => {
  return (
    <div className=''>
      <img className='w-[250px] block mx-auto mt-8' src={homeiomage} alt='homeiomage' />
      <form className='px-10 mt-6 space-y-4'>
        <div className='bg-white py-2 px-4 border border-primary rounded-full'>
          <input className='w-full' type='text' placeholder='Nhập số điện thoại...' />
        </div>
        <div className='bg-white py-2 px-4 border border-primary rounded-full'>
          <input className='w-full' type='password' placeholder='Nhập mật khẩu...' />
        </div>
        <div className='bg-white py-2 px-4 border border-primary rounded-full'>
          <input className='w-full' type='password' placeholder='Nhắc lại mật khẩu...' />
        </div>
      </form>
      <div className='px-10'>
        <button type='submit' className='text-white mt-6 text-xl bg-primary rounded-full w-full py-2 pb-3'>
          Đăng ký{' '}
        </button>
      </div>
      <div className='px-20 mt-5 '>
        <p>Độ dài mật khẩu từ 6 - 20 ký tự</p>
        <p>Ví dụ mật khẩu: 123456</p>
      </div>
      <div className='px-10 text-center mt-7'>
        Đã có tài khoản ? 👉 <Link to={'/login'}>Đăng nhập ngay</Link>
      </div>
      <div className='px-10  pb-10'>
        <img className='rounded-md mt-5' src={photo_2023} alt='photo_2023' />
      </div>
    </div>
  )
}

export default Register

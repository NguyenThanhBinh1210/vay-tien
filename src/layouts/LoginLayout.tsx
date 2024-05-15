import { LayoutPropsInterface } from '~/types/base.type'
import photo from '~/assets/images/photo_2022-11-17_22-11-56.jpg'
const LoginLayout = ({ children }: LayoutPropsInterface) => {
  return (
    <div className='max-w-[500px] mx-auto border-x h-full relative'>
      <img className='h-full w-full object-cover' src={photo} alt='photo' />
      <div
        style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.65) 0%, rgb(255, 255, 255) 100%)' }}
        className='absolute top-0 left-0 w-full h-full'
      >
        {children}
      </div>
    </div>
  )
}

export default LoginLayout

import Menu from '~/components/layouts/Menu'
import { LayoutPropsInterface } from '~/types/base.type'

const HomeLayout = ({ children }: LayoutPropsInterface) => {
  return (
    <div className='max-w-[500px] mx-auto border-x h-full pb-4'>
      {children}
      <Menu></Menu>
    </div>
  )
}

export default HomeLayout

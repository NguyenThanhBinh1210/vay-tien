import { Link, useLocation } from 'react-router-dom'
import { MenuLink } from '~/data/path'

const Menu = () => {
  const location = useLocation().pathname
  return (
    <div className='fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-max py-5 bg-white border-x border-t grid grid-cols-4'>
      {MenuLink.map((item, index) => (
        <Link
          key={index}
          className={`${location === item.path && 'text-primary'} flex text-sm flex-col justify-center items-center`}
          to={item.path}
        >
          {item.icon}
          {item.title}
        </Link>
      ))}
    </div>
  )
}

export default Menu

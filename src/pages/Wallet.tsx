import card from '~/assets/images/card.d49cd7cf12be322a95cb.png'
import wallet from '~/assets/images/wallet.911a2f9edd9a6151a551.jpg'

const Wallet = () => {
  return (
    <div>
      <div className='flex items-center justify-center text-white font-bold bg-primary py-2 px-3'>Ví tiền</div>
      <div className='px-5 text-sm'>
        <div className='h-[160px] rounded-md overflow-hidden mt-4'>
          <img src={card} alt='card' className='w-full h-full object-cover' />
        </div>
        <div className='px-3 py-1.5 rounded-md mt-2 items-center bg-[#eee]  flex justify-between'>
          <span className='font-bold'>Số dư ví:</span>
          <span className='font-bold text-primary/65'>0 VND</span>
        </div>
        <p className='text-blue-500 underline text-sm mt-2 cursor-pointer'>Biến động số dư</p>
        <button className='bg-primary px-4 rounded-md py-2 border mt-5 w-full font-bold text-white flex items-center justify-between mx-auto'>
          Rút tiền về tài khoản liên kết{' '}
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
            <path
              fillRule='evenodd'
              d='M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        <img className='mt-4' src={wallet} alt='wallet' />
      </div>
    </div>
  )
}

export default Wallet

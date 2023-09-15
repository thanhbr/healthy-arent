import React from 'react'
import useFooter from '../pages/Home/hooks/useFooter'

const Footer = () => {
  const { listFooter } = useFooter()

  return (
    <div className='bg-dark_600 h-[128px] flex items-center'>
      <div className='flex container-page gap-[45px] cursor-pointer'>
        {listFooter?.map(item => (
          <p key={item.id} className='text-light'>
            {item?.name || '---'}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Footer
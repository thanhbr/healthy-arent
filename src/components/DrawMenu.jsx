import React from 'react'
import { menuLink } from '../contants'

const DrawMenu = () => {
  return (
    <div className='bg-gray_400 absolute right-[160px] top-[64px]'>
      {menuLink.map(link => (
        <div key={link.id} className='text-light  top-[64px] px-[32px] py-[24px] cursor-pointer border-[1px] border-dark_500_text border-b-0'>
          {link.name}
        </div>
      ))}
    </div>
  )
}

export default DrawMenu
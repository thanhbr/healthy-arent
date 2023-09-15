import React from 'react'
import { menuLink } from '../contants'
import { Link } from 'react-scroll'

const DrawMenu = () => {
  return (
    <div className='bg-gray_400 absolute right-[160px] top-[64px] flex flex-col'>
      {menuLink.map(link => (
        <Link 
          key={link.id} 
          to={link?.to || ''}
          offset={-100}
          className='text-light  top-[64px] px-[32px] py-[24px] cursor-pointer border-[1px] border-dark_500_text border-b-0'
        >
          {link.name}
        </Link>
      ))}
    </div>
  )
}

export default DrawMenu
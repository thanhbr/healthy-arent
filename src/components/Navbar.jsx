import React from 'react'
import logo from "../assets/images/logo.png"
import { navLinks } from "../contants"
import { ICON } from '../interface/icons'

const Navbar = () => {
  return (
    <nav className='bg-dark_500_text w-full flex py-4 justify-between items-center fixed z-50'>
      <div className='container-page mx-auto flex'>
        <img src={logo} alt='healthy' className='w-[120px] h-[32px] cursor-pointer' />
        
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          {navLinks?.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-sansCJK_JP font-normal relative cursor-pointer items-center text-[16px] text-white flex gap-2 ${index === navLinks?.length - 1 ? 'mr-0' : 'mr-10'}`}
            >
              {nav?.icon}
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
              {nav.id === 'product' && 
                <span className='absolute top-[-4px] left-[24px] bg-primary_500 w-[16px] text-center rounded-[50%] text-[10px]'>1</span>
              }
            </li>
          ))}
        </ul>

        <span className='ml-[32px] cursor-pointer'>{ICON.menu}</span>
      </div>

    </nav>
  )
}

export default Navbar
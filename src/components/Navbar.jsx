import React, { useEffect, useRef } from 'react'
import logo from "../assets/images/logo.png"
import { navLinks } from "../contants"
import { ICON } from '../interface/icons'
import DrawMenu from './DrawMenu'
import useNavbar from '../pages/Home/hooks/useNavbar'
import { Link } from 'react-scroll'

function useOutsideAlerter(ref) {
  const {methods} = useNavbar()
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setTimeout(() => methods.toggleMenu(),500)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const Navbar = () => {
  const {showMenu, methods} = useNavbar()
  const wrapperRef = useRef()
  useOutsideAlerter(wrapperRef)

  return (
    <nav className='bg-dark_500_text w-full flex py-4 justify-between items-center fixed z-50'>
      <div className='container-page mx-auto flex'>
        <Link to={'home-overview'}>
          <img src={logo} alt='healthy' className='w-[120px] h-[32px] cursor-pointer' />
        </Link>
        
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          {navLinks?.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-sansCJK_JP font-normal relative cursor-pointer items-center text-[16px] text-white flex gap-2 ${index === navLinks?.length - 1 ? 'mr-0' : 'mr-10'}`}
            >
              {nav?.icon}
              <Link to={nav?.to || ''} offset={-100}>
                {nav.title}
              </Link>
              {nav.id === 'product' && 
                <span className='absolute top-[-4px] left-[24px] bg-primary_500 w-[16px] text-center rounded-[50%] text-[10px]'>1</span>
              }
            </li>
          ))}
        </ul>

        <span 
          ref={wrapperRef}
          className='ml-[32px] cursor-pointer' 
          onClick={methods.toggleMenu}
        >
          {showMenu ? ICON.closeMenu : ICON.menu}
        </span>
      </div>
      {showMenu && <DrawMenu />}
    </nav>
  )
}

export default Navbar
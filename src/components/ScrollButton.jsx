import React from 'react'
import useFooter from '../pages/Home/hooks/useFooter';
import { ICON } from '../interface/icons';

const ScrollButton = () => {
  const { scrollTop, methods } = useFooter()
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    methods.handleScrollTop(scrolled > 300)
  }
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    })
  }
  
  window.addEventListener('scroll', toggleVisible)
  
  return (
    <>
      {scrollTop && 
        <button 
          className='fixed w-[100%] left-[95%] bottom-[140px] cursor-pointer'
          onClick={scrollToTop}
        >
          {ICON?.scrollTop}
        </button>
      }
    </>
    
  )
}

export default ScrollButton
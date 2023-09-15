import React from 'react'
import useRecommended from '../pages/Home/hooks/useRecommended'
import ReactImageFallback from 'react-image-fallback'
import Button from './Button'

const Recommended = () => {
  const { categories, listRecommended } = useRecommended()

  return (
    <section className='mt-[56px]'>
      <Category data={categories} />
      <ListRecommended data={listRecommended} />
    </section>
  )
}

export default Recommended

const Category = ({data, ...props}) => {
  return (
    <div 
      {...props}
      className='grid grid-cols-4 gap-[32px] container-page mb-[56px]'
    >
      {data.map(category => (
        <div 
          key={category?.id}
          className='bg-dark_600 h-[144px] py-[24px] px-[8px] flex flex-col items-center'
        >
          <p className='text-[22px] leading-[27px] text-primary_300 w-[200px] font-normal text-center'>{category?.title || '---'}</p>
          <hr className='w-[56px] m-[8px]' />
          <p className='text-light text-[18px] text-center font-light'>{category?.languageJapan || '---'}</p>
        </div>
      ))}
    </div>
  )
}

const ListRecommended = ({data, ...props}) => {
  return (
    <div {...props}>
      <div className='grid grid-cols-4 gap-[8px] container-page'>
        {data.map(item => (
          <div key={item.id}>
            <div className='relative'>
              <ReactImageFallback
                src={item?.image}
                fallbackImage="/no-photo.jpg"
                alt={item?.title}
                className='bg-dark_600 opacity-[0.75] w-[100%]'
              />
              <div className='absolute bottom-0 text-light py-[4px] px-[8px] bg-primary_300 text-[15px]'>
                <span>{item?.date?.split('-')[0]}   </span>
                <span>{item?.date?.split('-')[1]}</span>
              </div>
            </div>
            <div>
              <p className='two-lines'>
                {item?.title || '---'}
              </p>
              <div className='flex'>
                {item?.tags?.map((tag, index) => (
                  <p key={item.id + index} className='text-primary_400 font-thin text-[12px] tracking-[0.06px]'>
                    #{tag || '---'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='w-[100%] flex justify-center mt-[28px] mb-[64px]'>
        <Button>
          コラムをもっと見る
        </Button>
      </div>
    </div>
  )
}
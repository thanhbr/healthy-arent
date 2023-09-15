import React from 'react'
import { foods, periods } from "../contants";
import { ICON } from '../interface/icons';
import Button from './Button';
import ReactImageFallback from 'react-image-fallback';
import useFood from '../pages/Home/hooks/useFood';

const Food = () => {
  const { listFood, methods } = useFood()

  return (
    <section>
      <div className='flex justify-center my-[24px] gap-[64px]'>
        {periods?.map(periods => (
          <div key={periods?.id} className='relative cursor-pointer'>
            <span>{ICON.bgPeriod}</span>  
            <div className='absolute top-[20px] w-[100%] m-auto flex flex-col items-center'>
              <span>{periods?.image}</span>
              <p className='text-[20px] text-light'>{periods?.title}</p>
            </div>
          </div>
        ))}

      </div>

      <div className='grid grid-cols-4 gap-[8px] container-page'>
        {listFood?.map(food => (
          <div key={food.id} className='relative'>
            <ReactImageFallback
              src={food?.image}
              fallbackImage="/no-photo.jpg"
              alt={food?.name}
              className='w-[100%] cursor-pointer'
            />
            <div className='text-light absolute bottom-0 left-0 p-[8px] bg-primary_300 text-[15px]'>
              <span>{food?.date}.</span>
              <spa n>{food?.period}</spa>
            </div>
          </div>
        ))}
      </div>

      <div className='w-[100%] flex justify-center mt-[28px]'>
        <Button onClick={methods.handleShowFoodMore}>記録をもっと見る</Button>
      </div>
    </section>
  )
}

export default Food
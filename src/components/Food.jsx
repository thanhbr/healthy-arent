import React from 'react'
import { periods } from "../contants";
import { ICON } from '../interface/icons';
import Button from './Button';
import ReactImageFallback from 'react-image-fallback';
import useFood from '../pages/Home/hooks/useFood';

const Food = () => {
  const { activePeriod, listFood, methods } = useFood()

  return (
    <section>
      <div className='flex justify-center my-[24px] gap-[64px]'>
        {periods?.map(period => (
          <div 
            key={period?.id} 
            className={`relative cursor-pointer`}
            onClick={() => methods.handleFilterFood(period)}
          >
            <span>{ICON.bgPeriod}</span>  
            <div className='absolute top-[20px] w-[100%] m-auto flex flex-col items-center'>
              <span>{period?.image}</span>
              <p className='text-[20px] text-light'>{period?.title}</p>
            </div>
          </div>
        ))}

      </div>

      <div className='grid grid-cols-4 gap-[8px] container-page'>
        {listFood?.map(food => (
          <div key={food.id} className='relative border-[1px] border-gray_400'>
            <ReactImageFallback
              src={food?.image}
              fallbackImage="/no-photo.jpg"
              alt={food?.name}
              className='w-[100%] cursor-pointer'
            />
            <div className='text-light absolute bottom-0 left-0 p-[8px] bg-primary_300 text-[15px]'>
              <span>{food?.date}.</span>
              <span>{food?.period}</span>
            </div>
          </div>
        ))}
      </div>
      {listFood.length >= 8 && 
        (
          <div className='w-[100%] flex justify-center mt-[28px]'>
            <Button onClick={methods.handleShowFoodMore}>記録をもっと見る</Button>
          </div>
        )
      }
    </section>
  )
}

export default Food
import React from 'react'
import LineChart from './Charts/LineChart'
import useStatistical from '../pages/Home/hooks/useStatistical'
import ReactImageFallback from 'react-image-fallback'
import Button from './Button'

const  Statistical = () => {
  const { myRecord, tableExercise, tableDiary, showMoreDiary, methods } = useStatistical()

  return (
    <section className='container-page mt-[72px]'>
      <div>
        <MyRecord data={myRecord} />
      </div>

      <div className='h-[304px]'>
        <LineChart  />
      </div> 

      <div>
        <Exercise data={tableExercise} />
      </div>

      <div>
        <MyDiary 
          data={tableDiary} 
          showMoreDiary={showMoreDiary}
          handleShowMore={methods.handleShowMoreDiary}
        /> 
      </div>
    </section>
  )
}

export default Statistical

const MyRecord = ({data, ...props}) => {
  return (
    <div 
      {...props}
      className='grid grid-cols-3 gap-[48px]'
    > 
      {data?.map(record => (
        <div 
          key={record.id}
          className='bg-primary_300 relative w-[100%] h-0 pb-[100%] p-[24px] mb-[56px]' 
        >
          <ReactImageFallback
            src={record?.image}
            fallbackImage="/no-img.jpg"
            alt={'avatar'}
            className='bg-dark_600 opacity-[0.75] w-[100%]'
          />
          <div className='absolute w-[200px] h-[100px] statistical-record--title flex flex-col items-center gap-[10px]'>
            <p className='font-inter text-[25px] text-primary_300 font-normal leading-[30px]'>
              {record?.title || '---'}
            </p>
            <p className='w-[160px] font-sansCJK_JP text-light text-[14px] bg-primary_400 p-[4px] text-center font-light'>
              {record?.languageJapan  || '---'}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

const Exercise = ({data, ...props}) => { 
  return (
    <div {...props} className='bg-dark_600 mt-[56px] p-4'>
       <div className='flex text-light'>
        <p className='w-[90px] font-normal text-[15px]'>MY EXERCISE</p>
        <p className='font-normal text-[22px]'>2021.05.21</p>
       </div>
       <div className='grid grid-cols-2 gap-2 max-h-[207px] overflow-y-scroll overflow-x-hidden scroll-custom'>
          {data?.map(exer => (
            <div key={exer.id} className='mt-1 max-h-[40px]'>
              <div className='flex justify-between mr-[48px] border-b-[2px] border-dark_500_text'>
                <ul>
                  <li className='text-light leading-[22px] flex gap-[12px]'>
                    <span className='text-[4px]'>● </span>
                    {exer?.title || '---'}
                  </li>
                  <li className='text-primary_300 leading-[22px] ml-[16px]'>{exer?.caloConsumed || 0}kcal</li>
                </ul>
                <p className='text-primary_300'>{exer?.time || 0} min</p>
              </div>
            </div>
          ))}
       </div>
    </div>
  )
}

const MyDiary = ({data, showMoreDiary, handleShowMore, ...props}) => {
  return (
    <div {...props} className='mt-[56px]'>
      <p className='text-[22px] font-normal'>
        MY DIARY
      </p>
      <div className='grid grid-cols-4 gap-[12px]'>
        {data?.map(diary => (
          <div key={diary?.id} className='border-[3px] border-solid border-[#707070] p-4'>
            <p>{diary?.date?.split('-')?.[0]}</p>
            <p>{diary?.date?.split('-')?.[1]}</p>
            <p>{diary?.content}</p>
          </div>
        ))}
      </div>
      {showMoreDiary 
        && (
          <div className='w-[100%] flex justify-center'>
            <Button 
              className={'mt-[30px]'}
              onClick={handleShowMore}
            >
              自分の日記をもっと見る
            </Button>
          </div>
      )
      }
    </div>
  )
}
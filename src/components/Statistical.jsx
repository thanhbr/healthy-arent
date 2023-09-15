import React from 'react'
import LineChart from './Charts/LineChart'
import useStatistical from '../pages/Home/hooks/useStatistical'
import ReactImageFallback from 'react-image-fallback'

const  Statistical = () => {
  const { myRecord, tableDiary } = useStatistical()

  return (
    <section className='container-page mt-[72px]'>
      <div>
        <MyRecord 
          data={myRecord}
        />
      </div>

      <div className='h-[304px]'>
        <LineChart  />
      </div> 

      <div>
        <Exercise />
      </div>

      <div>
        <MyDiary data={tableDiary} /> 
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
            fallbackImage="/no-photo.jpg"
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

const Exercise = ({...props}) => { 
  return (
    <div {...props}>
       <div>
        <p>MY EXERCISE</p>
        <p>2021.05.21</p>
       </div>
    </div>
  )
}

const MyDiary = ({data, ...props}) => {
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
      <div className='w-[100%] flex justify-center'>
        <button className='font-sansCJK_JP bg-  food-btn-more'>
          自分の日記をもっと見る
        </button>
      </div>
    </div>
  )
}
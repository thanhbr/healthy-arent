import React from 'react'
import { mealOverview } from '../contants'
import LineChart from './Charts/LineChart.jsx';
import useOverview from '../pages/Home/hooks/useOverview';

const Overview = () => {
  const { chartOverview } = useOverview()
  return (
    <section id='home-overview'  className='pt-[64px] flex'>
      <OverviewLeft />
      {!!chartOverview?.labels && <OverviewRight dataChart={chartOverview} />}
    </section>
  )
}

export default Overview

const OverviewLeft = () => {
  return (
    <div className='w-fit relative'>
      <img src={mealOverview?.image} alt='meal' />
      <div className='overview-bg-hidden' />
      <div className='overview-circle' />
      <div className='text-light overview-info-index'>
        <span className='text-[18px]'>0{mealOverview?.complete}/</span>
        <span className='text-[18px]'>{mealOverview?.total}  </span>
        <span className='text-[25px]'>{mealOverview?.percent}%</span>
      </div>
    </div>
  )
}

const OverviewRight = ({dataChart}) => {
  return (
    <div className='h-[312px] xxl:min-w-[1363px] lg:min-w-[740px]'>
      <LineChart dataChart={dataChart}  />
    </div>
  )
}
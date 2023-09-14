import React from 'react'
import { mealOverview } from '../contants'
import LineChart from './Charts/LineChart.jsx';

const Overview = () => {
  return (
    <section className='pt-[64px] flex' id='home'>
      <OverviewLeft />
      <OverviewRight />
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

const OverviewRight = () => {
  return (
    <div className='h-[312px] xxl:min-w-[1363px] lg:min-w-[740px]'>
      <LineChart  />
    </div>
  )
}
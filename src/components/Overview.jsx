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
    <div className='w-fit'>
      <img src={mealOverview.image} alt='meal' />
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
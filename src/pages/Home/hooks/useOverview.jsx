import React, { useContext } from 'react'
import { HomeContext } from '../provider/_context'

const useOverview = () => {
  const {state, } = useContext(HomeContext)

  const chartOverview = state?.overview?.chart
  console.log('state', state);

  return {
    chartOverview
  }
}

export default useOverview
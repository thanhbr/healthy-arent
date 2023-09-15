import React, { useContext } from 'react'
import { HomeContext } from '../provider/_context'

const useStatistical = () => {
  const {state, dispatch} = useContext(HomeContext)

  const myRecord = state?.statistical?.myRecord
  const tableDiary = state?.statistical?.tableDiary

  return {
    myRecord,
    tableDiary
  }
}

export default useStatistical
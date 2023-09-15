import React, { useContext } from 'react'
import { HomeContext } from '../provider/_context'
import { homeAction } from '../provider/_reducer'

const useStatistical = () => {
  const {state, dispatch} = useContext(HomeContext)

  const chartRecord = state?.statistical?.chartRecord
  const myRecord = state?.statistical?.myRecord
  const tableExercise = state?.statistical?.tableExercise
  const tableDiary = state?.statistical?.tableDiary
  const tableDiaryOrigin = state?.statistical?.tableDiaryOrigin
  const showMoreDiary = tableDiary?.length !== tableDiaryOrigin?.length

  const handleShowMoreDiary = _ => {
    dispatch({
      type: homeAction.UPDATE_STATISTICAL_DIARY,
      payload: tableDiaryOrigin
    })
  }

  return {
    chartRecord,
    myRecord,
    tableExercise,
    tableDiary,
    showMoreDiary,
    methods: {
      handleShowMoreDiary
    }
  }
}

export default useStatistical
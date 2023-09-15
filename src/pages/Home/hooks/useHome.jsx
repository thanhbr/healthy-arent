import React, { useReducer } from 'react'
import { homeAction, homeInitialState, homeReducer } from '../provider/_reducer'
import { foods, overviewChart, periods, recommendedCategory, recommendedList, statisticalBodyRecord, statisticalHeader, statisticalMyDiary, statisticalMyExercise } from '../../../contants'

const useHome = () => {
  const [state, dispatch] = useReducer(homeReducer, homeInitialState)

  const fetchOrigin = () => {
    // === OVERVIEW ===
    dispatch({
      type: homeAction.UPDATE_OVERVIEW_CHART,
      payload: overviewChart
    })

    // === FOOD ===
    dispatch({
      type: homeAction.UPDATE_FOOD_PERIODS,
      payload: periods
    })
    dispatch({
      type: homeAction.UPDATE_FOOD_LIST_ORIGIN,
      payload: {
        listFood: foods,
        listOriginFood: foods,
      }
    })

    // === STATISTICAL ===
    dispatch({
      type: homeAction.UPDATE_STATISTICAL_RECORD,
      payload: statisticalHeader
    })
    dispatch({
      type: homeAction.UPDATE_STATISTICAL_CHART,
      payload: statisticalBodyRecord
    })
    dispatch({
      type: homeAction.UPDATE_STATISTICAL_EXERCISE,
      payload: statisticalMyExercise
    })
    dispatch({
      type: homeAction.UPDATE_STATISTICAL_DIARY,
      payload: statisticalMyDiary 
    })

    // === RECOMMENT ===
    dispatch({
      type: homeAction.UPDATE_RECOMMENDED_CATEGORY,
      payload: recommendedCategory
    })
    dispatch({
      type: homeAction.UPDATE_RECOMMENDED_LIST,
      payload: recommendedList
    })
  }
  console.log('state', state)

  return {
    fetchOrigin,
    provider: {state, dispatch},
  }
}

export default useHome
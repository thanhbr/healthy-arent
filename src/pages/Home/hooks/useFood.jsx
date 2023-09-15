import React, { useContext } from 'react'
import { HomeContext } from '../provider/_context'
import { homeAction } from '../provider/_reducer'

const useFood = () => {
  const {state, dispatch} = useContext(HomeContext)

  const activePeriod = state?.foods?.activePeriod
  const listFood = state?.foods?.listFood
  const listOrginFood = state?.foods?.listOriginFood
  const showMoreFood = listFood?.length !== listOrginFood?.length

  console.log('state', state);

  const handleShowFoodMore = _ => {
    dispatch({
      type: homeAction.UPDATE_FOOD_LIST,
      payload: listOrginFood
    })
  }

  const handleFilterFood = opt => {
    const foods = [...listOrginFood]?.filter(food => food.period === opt.title)
    
    dispatch({
      type: homeAction.UPDATE_FOOD_ACTIVE_PERIODS,
      payload: activePeriod === opt.title ? 'all' : opt.title
    })
    dispatch({
      type: homeAction.UPDATE_FOOD_LIST,
      payload: activePeriod === opt.title ? listOrginFood?.slice(0, 8) : foods
    })
  }

  return {
    activePeriod,
    listFood,
    showMoreFood,
    methods: {
      handleShowFoodMore,
      handleFilterFood
    }
  }
}

export default useFood
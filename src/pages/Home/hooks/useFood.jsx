import React, { useContext } from 'react'
import { HomeContext } from '../provider/_context'
import { homeAction } from '../provider/_reducer'

const useFood = () => {
  const {state, dispatch} = useContext(HomeContext)

  const listFood = state?.foods?.listFood
  const listOrginFood = state?.foods?.listOriginFood

  const handleShowFoodMore = _ => {
    dispatch({
      type: homeAction.UPDATE_FOOD_LIST,
      payload: listOrginFood
    })
  }

  return {
    listFood,
    methods: {
      handleShowFoodMore
    }
  }
}

export default useFood
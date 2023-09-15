import React, { useContext } from 'react'
import { HomeContext } from '../provider/_context'
import { homeAction } from '../provider/_reducer'

const useRecommended = () => {
  const {state, dispatch} = useContext(HomeContext)
  
  const categories = state?.recommended?.category || []
  const listRecommended = state?.recommended?.list || []
  const listOriginRecommended = state?.recommended?.listOrigin || []
  const showMoreRecommended = listRecommended?.length !== listOriginRecommended?.length

  const handleShowMoreRecommended = _ => {
    dispatch({
      type: homeAction.UPDATE_RECOMMENDED_LIST,
      payload: listOriginRecommended
    })
  }

  return {
    categories,
    listRecommended,
    showMoreRecommended,
    methods: {
      handleShowMoreRecommended
    }
  }
}

export default useRecommended
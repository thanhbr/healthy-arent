import React, { useContext } from 'react'
import { HomeContext } from '../provider/_context'
import { homeAction } from '../provider/_reducer'

const useFooter = () => {
  const {state, dispatch} = useContext(HomeContext)

  const listFooter = state?.footer?.list
  const scrollTop = state?.scrollTop

  const handleScrollTop = action => {
    dispatch({
      type: homeAction.SCROLL_TO_TOP,
      payload: action
    })
  }

  return {
    listFooter,
    scrollTop,
    methods: {
      handleScrollTop
    }
  }
}

export default useFooter
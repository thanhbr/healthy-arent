import React, { useContext } from 'react'
import { HomeContext } from '../provider/_context'

const useRecommended = () => {
  const {state, } = useContext(HomeContext)
  
  const categories = state?.recommended?.category || []
  const listRecommended = state?.recommended?.list || []

  return {
    categories,
    listRecommended
  }
}

export default useRecommended
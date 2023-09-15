import React, { useReducer } from 'react'
import { homeInitialState, homeReducer } from '../provider/_reducer'

const useHome = () => {
  const [state, dispatch] = useReducer(homeReducer, homeInitialState)

  const fetchOrigin = () => {
    
  }

  return {
    fetchOrigin,
    provider: {state, dispatch},
  }
}

export default useHome
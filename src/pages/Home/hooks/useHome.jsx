import React, { useReducer } from 'react'
import { homeInitialState, homeReducer } from '../provider/_reducer'

const useHome = () => {
  const [state, dispatch] = useReducer(homeReducer, homeInitialState)

  return {
    provider: {state, dispatch},
  }
}

export default useHome
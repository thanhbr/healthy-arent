import React, { useContext } from 'react'
import { HomeContext } from '../provider/_context'

const useFooter = () => {
  const {state, } = useContext(HomeContext)

  const listFooter = state?.footer?.list

  return {
    listFooter
  }
}

export default useFooter
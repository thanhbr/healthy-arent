import React, { useContext } from 'react'
import { HomeContext } from '../provider/_context'
import { homeAction } from '../provider/_reducer'

const useNavbar = () => {
  const {state, dispatch} = useContext(HomeContext)
  const showMenu = state?.showMenu
  const toggleMenu = type => dispatch({
    type: homeAction.SHOW_MENU,
    payload: type
  })

  return {
    showMenu,
    methods: {
      toggleMenu
    }
  }
}

export default useNavbar
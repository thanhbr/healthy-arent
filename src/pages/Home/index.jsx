import React from 'react'
import { Category, Food, Navbar, Overview, Statistical } from '../../components'
import useHome from './hooks/useHome'
import { HomeProvider } from './provider'

const HomePage = () => {
  const {provider} = useHome()
  const {state, dispatch} = provider

  return (
    <HomeProvider value={{state, dispatch}}>
      <Navbar />
      <Overview />
      <Food />
      <Statistical />
      <Category />
    </HomeProvider>
  )
}

export default HomePage
import React, { useEffect } from 'react'
import { Category, Food, Navbar, Overview, Statistical } from '../../components'
import useHome from './hooks/useHome'
import { HomeProvider } from './provider'

const HomePage = () => {
  const {provider, fetchOrigin} = useHome()
  const {state, dispatch} = provider

  useEffect(() => {
    fetchOrigin()
  }, [])

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
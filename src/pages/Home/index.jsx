import React, { useEffect } from 'react'
import { Recommended, Food, Navbar, Overview, Statistical } from '../../components'
import useHome from './hooks/useHome'
import { HomeProvider } from './provider'
import Footer from '../../components/Footer'
import ScrollButton from '../../components/ScrollButton'

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
      <Recommended />
      <Footer />
      <ScrollButton />
    </HomeProvider>
  )
}

export default HomePage
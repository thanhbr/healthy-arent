import React from 'react'
import { Category, Food, Navbar, Overview, Statistical } from '../../components'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Overview />
      <Food />
      <Statistical />
      <Category />
    </>
  )
}

export default HomePage
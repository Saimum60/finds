import React from 'react'
import Manu from './manu/Manu'
import Footer from './footer/Footer'
import Kss from './kss/Kss'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <Manu/>
    <Outlet/>
    <Footer/>
    <Kss/>
    </>
  )
}

export default RootLayout
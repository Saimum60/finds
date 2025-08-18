import React from 'react'
import Home from './pages/Home'
import Aboutusbd from '../src/pages/Aboutusbd'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import FeaturesPg from './pages/FeaturesPg'
import Pricingbd from './pages/Pricingbd'

let router= createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/aboutus" element={ <Aboutusbd/>}></Route>
    <Route path="/featurespg" element={ <FeaturesPg/>}></Route>
    <Route path="/pricing" element={ <Pricingbd/>}></Route>
  </Route>
))

const App = () => {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
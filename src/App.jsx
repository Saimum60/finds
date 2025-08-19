import React from 'react'
import Home from './pages/Home'
import Aboutusbd from '../src/pages/Aboutusbd'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import FeaturesPg from './pages/FeaturesPg'
import Pricingbd from './pages/Pricingbd'
import Blogbd from './pages/Blogbd'
import ContactUs from './pages/ContactUs'
import FaqBd from './pages/FaqBd'


let router= createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/aboutus" element={ <Aboutusbd/>}></Route>
    <Route path="/featurespg" element={ <FeaturesPg/>}></Route>
    <Route path="/pricing" element={ <Pricingbd/>}></Route>
    <Route path="/blogus" element={ <Blogbd/>}></Route>
    <Route path="/contact" element={ <ContactUs/>}></Route>
    <Route path="/faqus" element={ <FaqBd/>}></Route>
    
    
    
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
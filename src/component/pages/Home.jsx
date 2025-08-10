import React from 'react'
import Menu from "../menu/Menu.jsx"
import Banner from '../banner/Banner.jsx'
import Work from '../work/Work.jsx'
import Project from '../project/Project.jsx'
import Features from '../features/Features.jsx'
import About from '../about/About.jsx'
import Frequently from '../frequently/Frequently.jsx'
import Inquiry from '../inquiry/Inquiry.jsx'



const Home = () => {
  return (
    <>
    <Menu/>
    <Banner/>
    <Work/>
    <Project/>
    <Features/>
    <About/>
    <Frequently/>
    <Inquiry/>
    
    </>
  )
}

export default Home
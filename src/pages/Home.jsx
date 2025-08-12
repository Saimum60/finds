import React from 'react'
import Manu from '../components/manu/Manu'
import Banner from '../components/banner/Banner'
import Work from '../components/work/Work'
import Project from '../components/project/Project'
import Features from '../components/features/Features'
import About from '../components/about/About'
import Faq from '../components/faq/Faq'
import Blog from '../components/blog/Blog'
import Inquiry from '../components/inquiry/Inquiry'
import Footer from '../components/footer/Footer'
import Kss from '../components/kss/Kss'


const Home = () => {
  return (
    <div>
        <Manu/>
        <Banner/>
        <Work/>
        <Project/>
        <Features/>
        <About/>
        <Faq/>
        <Inquiry/>
        <Blog/>
        <Footer/>
        <Kss/>
    </div>
  )
}

export default Home
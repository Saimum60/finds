import React from 'react'
import Banner from '../components/banner/Banner'
import Work from '../components/work/Work'
import Project from '../components/project/Project'
import Features from '../components/features/Features'
import About from '../components/about/About'
import Faq from '../components/faq/Faq'
import Blog from '../components/blog/Blog'
import Inquiry from '../components/inquiry/Inquiry'


const Home = () => {
  return (
    <div>
        <Banner/>
        <Work/>
        <Project/>
        <Features/>
        <About/>
        <Faq/>
        <Inquiry/>
        <Blog/>
    </div>
  )
}

export default Home
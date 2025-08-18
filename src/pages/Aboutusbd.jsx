import React from 'react'
import Aboutus from '../components/about/about us/Aboutus'
import Card from '../components/about/about us/card/Card'
import WorkUs from '../components/about/about us/workus/WorkUs'
import Missson from '../components/about/about us/misson/Missson'
import Process from '../components/about/about us/process/Process'
import Follow from '../components/about/about us/follow/Follow'


const About = () => {
  return (
    <>
    <Aboutus/>
    <Process/>
    <Follow/>
    <Missson/>
    <WorkUs/>
    <Card/>
    </>
  )
}

export default About
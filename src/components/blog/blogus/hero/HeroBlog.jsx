import React from 'react'
import './heroblog.css'
import { Container, Row } from 'react-bootstrap'
import Hpl from '../../../../assets/hpl.png'


const HeroBlog = () => {
  return (
    <section className='lj'>
        <Container>
            <div className="lkj">
                <h2>A UX Case Study on Creating a Studious Environment for Students</h2>
                <p className='pl'>Andrew Jonson  Posted on 27th January 2021</p>
                <img src={Hpl} alt="" />
                <p className='pa'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
                <a href="#"> Read more</a>
            </div>
        </Container>

    </section>
  )
}

export default HeroBlog
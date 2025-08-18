import React from 'react'
import './process.css'
import { Col, Container, Row } from 'react-bootstrap'
import Man21 from '../../../../assets/man21.png'
import Processreuse from './Processreuse'

const Process = () => {
  return (
    <section className='pro'>
        <Container className='.rrp'>
            <div className="js">
                <Processreuse pm='Who we are' os='Goal focussed'/>
                <div className="bb">
                    <Processreuse os='Continuous improvement'/>
                </div>
            </div>
            
            <div className="lm">
                <img src={Man21} alt="" />
            </div>
        </Container>
    </section>
  )
}

export default Process
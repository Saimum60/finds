import React from 'react'
import './allsec1.css'
import { Col, Container, Row } from 'react-bootstrap'
import Sec1 from '../../../../assets/sec1.png'

const Allsec1 = () => {
  return (
    <section className='pi'>
        <Container>
            <Row>
                <Col lg={6}>
                <div className="ps">
                    <h6>Use Client-first</h6>
                <h3>Top agencies and freelancers around the world use Client-first </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
                </Col>
                <Col lg={6}>
                <img src={Sec1} alt="" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Allsec1
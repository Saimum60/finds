import React from 'react'
import './sec2.css'
import { Col, Container, Row } from 'react-bootstrap'
import Se2 from '../../../../assets/se2.png'

const Src2 = () => {
  return (
     <section className='ggd'> 
        <Container>
            <Row>
                <Col lg={6}>
                <img src={Se2} alt="" />
                </Col>
                <Col lg={6}>
                <div className="osa">
                  <h6>Free Revision Rounds</h6>
                <h3>Get free Revisions and one week of free maintenance</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Src2
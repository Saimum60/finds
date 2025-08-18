import React from 'react'
import './sec4.css'
import Se4 from '../../../../assets/se4.png'
import { Col, Container, Row } from 'react-bootstrap'

const Sec4 = () => {
  return (
     <section className='ds'>
        <Container>
            <Row>
                <Col lg={6}>
                <div className="sd">
                    <img src={Se4} alt="" />
                    
                </div>
                </Col>
                <Col lg={6}>
                <h6>Quick Delivery</h6>
                <h3>Guranteed 1 week delivery for standard five pager website </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Sec4
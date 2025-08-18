import React from 'react'
import './sec3.css'
import Se3 from '../../../../assets/se3.png'
import { Col, Container, Row } from 'react-bootstrap'

const Sec3 = () => {
  return (
     <section className='ai'>
        <Container>
            <Row>
                <Col lg={6}>
                <div className="pa">
                    <h6>24/7 Support</h6>
                <h3>Working with us, you will be getting 24/7 priority support </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
                </Col>
                <Col lg={6}>
                <img src={Se3} alt="" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Sec3
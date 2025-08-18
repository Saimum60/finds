import React from 'react'
import './pricing.css'
import { Col, Container, Row } from 'react-bootstrap'

const Pricing = () => {
  return (
    <section className='ya'>
      <Container>
        <div className="tss">
          <h2>Our Pricing Plans</h2>
          <p>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
        </div>
        <Row>
          <Col lg={4}></Col>
        </Row>
      </Container>
    </section>
  )
}

export default Pricing
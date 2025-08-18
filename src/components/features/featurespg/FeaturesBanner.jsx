import React from 'react'
import './featuresbanner.css'
import { Col, Container, Row } from 'react-bootstrap'
import Hero from '../../../assets/hero.png'

const FeaturesBanner = () => {
  return (
    <section className='feat'>
        <Container>
            <Row>
                <Col lg={6}>
                <div className="vc">
                  <h1>All the features you need</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button>View Pricing</button>
                </div>
                </Col>
                <Col lg={6}>
                <img src={Hero} alt="" /></Col>
            </Row>
        </Container>
    </section>
  )
}

export default FeaturesBanner
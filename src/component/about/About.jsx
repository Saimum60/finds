import React from 'react'
import "../about/about.css"
import { Col, Container, Row } from 'react-bootstrap'
import Woman from "../../assets/woman.png"

const About = () => {
  return (
    <section className='about'>
        <Container>
            <Row>
                <Col lg={4}>
                <div className='re'>
                    <h3>What our clients say about us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                </div>
                </Col>
                <Col lg={8}>
                <div className='cx'>
                    <h5>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h5>
                    <div className='op'>
                        <img src={Woman} alt="" />
                        <div className='kl'>
                            <h6>Jenny Wilson</h6>
                             <p>Vice President</p>
                        </div>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default About
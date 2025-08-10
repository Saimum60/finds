import React from 'react'
import "../frequently/frequently.css"
import { Col, Container, Row } from 'react-bootstrap'
import Frequentlyreuse from './Frequentlyreuse'

const Frequently = () => {
  return (
    <section className='faq'>
        <Container>
            <Row>
                <Col lg={4}>
                <div className='pa'>
                    <h3>Frequently asked questions</h3>
                    <a href="#">Contact us for more info</a>
                </div>
                </Col>
                <Col lg={8}>
                   <Frequentlyreuse text="How much time does it take?" num="01"/>
                   <Frequentlyreuse text="What is your class naming convention?" num="02"/>
                   <Frequentlyreuse text="How do you communicate?" num="03"/>
                   <Frequentlyreuse text="I have a bigger project. Can you handle it?" num="04"/>
                   <Frequentlyreuse text="What is your class naming convention?" num="05"/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Frequently
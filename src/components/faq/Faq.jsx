import React from 'react'
import "./faq.css"
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import Faqreuse from './Faqreuse'

const Faq = () => {
    return (
        <section className='faq'>
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="hy">
                            <h3>Frequently asked questions</h3>
                            <a href="#">Contact us for more info</a>
                        </div>
                    </Col>
                    <Col lg={{span:7,offset:1}}>
                    <Faqreuse num="01" text="How much time does it take?"/>
                    <Faqreuse num="02" text="What is your class naming convention?"/>
                    <Faqreuse num="03" text="How do you communicate?"/>
                    <Faqreuse num="04"text="I have a bigger project. Can you handle it?"/>
                    <Faqreuse num="05"text="What is your class naming convention?"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Faq
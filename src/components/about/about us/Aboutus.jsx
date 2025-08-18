import React from 'react'
import './aboutus.css'
import { Col, Container, Row } from 'react-bootstrap'
import About1 from "../../../assets/about1.png"

const Aboutus = () => {
    return (
        <section className='ass'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="kn">
                            <h6>About us</h6>
                            <h1>Our designs solve problems</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <img className='rs' src={About1} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Aboutus
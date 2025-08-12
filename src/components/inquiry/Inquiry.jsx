import React from 'react'
import './inquiry.css'
import { Col, Container, Row } from 'react-bootstrap'
import Bg from "../../assets/bg1.png"
import Bg2 from "../../assets/bg2.png"
import { FaArrowRightLong } from "react-icons/fa6";

const Inquiry = () => {
    return (
        <section className='to'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className='ew'>
                            <img src={Bg} alt="" />
                            <div className="bbc">
                                <h1>Building stellar websites for early startups</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='we'>
                            <img src={Bg2} alt="" />
                            <div className="lg">
                                <h5>Send inquiry</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                <div className="zx">
                                    <input type="name" placeholder='Your Name' />
                                    <input type="email" placeholder='Email' />
                                    <input type="paste your Figma design URL" placeholder='Paste your Figma design URL' />
                                </div>
                                <div className="cs">
                                    <button>Send an Inquiry</button>
                                    <a href="#">Get in touch with us <FaArrowRightLong /></a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Inquiry
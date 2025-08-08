import React from 'react'
import "../banner/banner.css"
import { Col, Container, Row } from 'react-bootstrap'
import Ban from "../../assets/ban.png"
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className='bts'>
        <Container>
            <Row>
                <Col lg={5}>
                <div className='bg'>
                    <h1>Building stellar websites for early startups</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div className='bt'>
                        <button className='ba'> <a href="#">View our work</a></button>
                        <a className='bs' href="#">View Pricing <FaArrowRightLong/></a>
                    </div>
                </div>
                </Col>
                <Col lg={{span:6 , offset:1}}>
                <img src={Ban} alt="" />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Banner
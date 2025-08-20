import React from 'react'
import "./banner.css"
import { Col, Container, Row } from 'react-bootstrap'
import Bang from "../../assets/bang.png"
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className='banner'>
        <Container>
            <Row>
                <Col lg={6}>
                <div className="bg-ban">
                    <h1>Building stellar websites for early startups</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <button>View our work</button>
                    <a href="#">View Pricing <FaArrowRightLong/></a>
                </div>
                </Col>
                <Col lg={6}>
                <img className='uv' src={Bang} alt="" /></Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner
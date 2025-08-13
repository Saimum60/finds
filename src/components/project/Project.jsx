import React from 'react'
import "./project.css"
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRightLong } from "react-icons/fa6";
import Card from "../../assets/card.png"
import Card2 from "../../assets/card2.png"
import Card3 from "../../assets/card3.png"

const Project = () => {
  return (
    <section className='proj'>
        <Container>
            <div className="bg-text">
                <h2>View our projects</h2>
                <a className='ms-auto' href="#">View More <FaArrowRightLong/></a>
            </div>
            <Row>
                <Col lg={8}> 
                <div className="img1">
                    <img src={Card} alt="" />
                    <div className="tr">
                        <h4>Workhub office Webflow   Design</h4>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                        <a href=""><FaArrowRightLong/></a>
                    </div>
                </div>
                </Col>
                <Col lg={4}>
                <div className="wa">
                    <div className="img2">
                    <img src={Card2} alt="" />
                    <div className="fd">
                        <h4>Unisaas Website Design</h4>
                        <a href="#">View portfolio <FaArrowRightLong/></a>
                    </div>
                </div>
                <div className="fs">
                    <img  src={Card3} alt="" />
                </div>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Project
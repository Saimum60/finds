import React from 'react'
import "../project/project.css"
import { Col, Container, Row } from 'react-bootstrap'
import Card from "../../assets/card.png"
import Card1 from "../../assets/card1.png"
import Card2 from "../../assets/card2.png"
import { FaArrowRightLong } from "react-icons/fa6";

const Project = () => {
  return (
    <section>
        <Container className='lg'>
            <div className='na'>
                    <h2>View our projects</h2>
                    <a className='ms-auto' href="#">View More <FaArrowRightLong/></a>
                </div>
            <Row>
                <Col lg={7}>
                
                
                    <div className='c-text'>
                        <img className='im' src={Card} alt="" />
                    
                    <div className='text'>
                        <h4>Workhub office Webflow Webflow  Design</h4>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                        <a href="#"><FaArrowRightLong/></a>
                    </div>
                    </div>
                
                </Col>
                <Col lg={{span:4,offset:1}}>
                <div className='ng'>
                    <img className='im1' src={Card1} alt="" />
                    <div className='gh'>
                        <h5>Unisaas Websit Design</h5>
                       <a href="#">View portfolio <FaArrowRightLong/> </a>
                    </div>
                </div>
                <div className='rg'>
                    <img className='im2' src={Card2} alt="" />
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Project
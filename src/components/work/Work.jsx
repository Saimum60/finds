import React from 'react'
import "./work.css"
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRightLong } from "react-icons/fa6";
import Pointer1 from "../../assets/pointer1.png"
import Pointer2 from "../../assets/pointer2.png"
import Pointer3 from "../../assets/pointer3.png"
import Pointer4 from "../../assets/pointer4.png"
import Workreuse from './Workreuse';

const Work = () => {
  return (
    <section className='work'>
        <Container>
            <Row>
                <Col lg={4}>
                <div className="text">
                    <h2>How we work</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <a href="#">Get in touch with us <FaArrowRightLong/> </a>
                </div>
                </Col>
                <Col lg={{span:7, offset:1}}>
                <Row>
                    <Workreuse img={Pointer1} hedding="Strategy"/>
                    <Workreuse img={Pointer2} hedding="Wireframing" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                    <Workreuse img={Pointer3} hedding="Strategy" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." />
                    <Workreuse img={Pointer4} hedding="Strategy" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                    
                    
                </Row>

                
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Work
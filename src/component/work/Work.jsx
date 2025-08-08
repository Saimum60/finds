import React from 'react'
import "../work/work.css"
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRightLong } from "react-icons/fa6";
import Point from "../../assets/pointer1.png"
import Point2 from "../../assets/pointer2.png"
import Point3 from "../../assets/pointer3.png"
import Point4 from "../../assets/pointer4.png"
import Reuse from './Reuse';


const Work = () => {
  return (
    <section className='work-bg'>
        <Container>
            <Row>
                <Col lg={5}>
                <div className='bss'>
                  <h2>How we work</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                  <a className='bsa' href="#">Get in touch with us <FaArrowRightLong/></a>
                </div>
                </Col>
                <Col lg={{span:6,offest:1}}>
                 <Row>
                  <Reuse titel="Strategy" poin={Point}/>
                  <Reuse titel="Wireframing" poin={Point2} pm="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                  <Reuse titel="Design" poin={Point3} pm="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                  <Reuse titel="Development" poin={Point4} pm="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                 </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Work
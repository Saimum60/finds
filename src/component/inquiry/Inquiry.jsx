import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../inquiry/inquiry.css"
import Inq from "../../assets/inq.png"
import Inq1 from "../../assets/inq1.png"
import { FaArrowRightLong } from "react-icons/fa6";

const Inquiry = () => {
  return (
    <section className='inq'>
        <Container>
            <Row>
                <Col lg={6}>
                <div className='ios'>
                <img  src={Inq} alt="" />
                <div className='pi'>
                    <h1>Building stellar websites for early startups</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                </div>
            </div>
                </Col>
                <Col lg={6}>
                <div className='rs'>
                    <img src={Inq1} alt="" />
                    
                        <div className='ha'>
                            <h5>Send inquiry</h5>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                             <div className='input'>
                                <input type="Your Name" />
                                <br />
                             <input type="Email" />
                             <br />
                             <input type="Paste your Figma design URL" />
                             <div className='wq'>
                                <button>Send an Inquiry </button>
                                <br />
                                <a href="#">Get in touch with us <FaArrowRightLong/></a>
                             </div>
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
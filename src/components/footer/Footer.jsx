import React from 'react'
import './footer.css'
import { Col, Container, Row } from 'react-bootstrap'
import fs from '../../assets/logo.png'
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";





const Footer = () => {
    return (
        <section className='ts'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="jpc">
                            <img src={fs} alt="" />
                            <p>We are always open to discuss your project and improve your online presence.</p>
                            <div className='qs'>
                                <h4>Email me at <span className='ass'>Call us</span></h4>
                                <a href="#">contact@website.com <span className='ys'>0927 6277 28525</span></a>
                            
                            </div>
                        </div>

                    </Col>

                    <Col lg={6}>
                        <div className="ks">
                            <h2>Lets Talk!</h2>
                            <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                            <div className='trb'>
                                <a href="#"><MdOutlineFacebook /></a>
                                <a href="#"><FaTwitter /></a>
                                <a href="#"><FaInstagram /></a>
                                <a href="#"><FaLinkedin /></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer
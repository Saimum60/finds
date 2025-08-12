import React from 'react'
import "./about.css"
import { Col, Container, Row } from 'react-bootstrap'
import Man from "../../assets/man.png"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";




function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className='next'
      onClick={onClick}
    ><IoIosArrowForward /></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className='prev'
      onClick={onClick}
    ><IoIosArrowBack /></div>
  );
}

const About = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <section className='about'>
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="hg">
                            <h3>What our clients say about us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <Slider {...settings}>
                            <div className="mn">
                                <h5>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h5>
                                <div className="man">
                                    <img src={Man} alt="" />
                                    <p>Jenny Wilson <br />Vice President</p>
                                </div>
                            </div>
                            <div className="mn">
                                <h5>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h5>
                                <div className="man">
                                    <img src={Man} alt="" />
                                    <p>Jenny Wilson <br />Vice President</p>
                                </div>
                            </div>

                        </Slider>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About
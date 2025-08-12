import React from 'react'
import './features.css'
import { Col, Container, Row } from 'react-bootstrap'
import Icon1 from "../../assets/icon1.png"
import Icon2 from "../../assets/icon2.png"
import Icon3 from "../../assets/icon3.png"
import Icon4 from "../../assets/icon4.png"
import Icon5 from "../../assets/icon5.png"
import Icon6 from "../../assets/icon6.png"
import Featuresreuse from './Featuresreuse'

const Features = () => {
  return (
    <section className='bg-feat'>
        <Container>
            <div className="fea">
                <h6>Features</h6>
                <h2>Design that solves problems, one product at a time</h2>
            </div>
            <Row>
               <Featuresreuse img={Icon1} text="Uses Client First"/>
               <Featuresreuse img={Icon2} text="Two Free Revision Round"/>
               <Featuresreuse img={Icon3} text="Template Customization"/>
               <Featuresreuse img={Icon4} text="24/7 Support"/>
               <Featuresreuse img={Icon5} text="Quick Delivery"/>
               <Featuresreuse img={Icon6} text="Hands-on approach"/>
            </Row>
        </Container>
    </section>
  )
}

export default Features
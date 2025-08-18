import React from 'react'
import './featureswork.css'
import FeaturesworkReuse from './FeaturesworkReuse'
import { Container, Row } from 'react-bootstrap'
import Icon1 from "../../../../assets/icon6.png"
import Icon2 from "../../../../assets/icon3.png"
import Icon3 from "../../../../assets/icon1.png"

const FeaturesWork = () => {
  return (
    <section className='wp'>
        <Container>
            <div className="tes">
                <h2>The benefits of working with us</h2>
            </div>
            <Row>
                <FeaturesworkReuse  ic={Icon1} text='Customize with ease' p='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.'/>                
                <FeaturesworkReuse  ic={Icon2} text='Perfectly Responsive' p='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.'/>                
                <FeaturesworkReuse  ic={Icon3} text='Friendly Support' p='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.'/>                
            </Row>
        </Container>
    </section>
  )
}

export default FeaturesWork
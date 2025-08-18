import React from 'react'
import './workus.css'
import { Col, Container, Row } from 'react-bootstrap'
import Icon1 from "../../../../assets/icon6.png"
import Icon2 from "../../../../assets/icon3.png"
import Icon3 from "../../../../assets/icon1.png"
import WorkusReuse from './WorkusReuse'

const WorkUs = () => {
  return (
    <section className='wo'>
        <Container>
            <div className="tex">
                <h2>The benefits of working with us</h2>
            </div>
            <Row>
                <WorkusReuse icon={Icon1} text='Customize with ease' p='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.'/>                
                <WorkusReuse icon={Icon2} text='Perfectly Responsive' p='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.'/>                
                <WorkusReuse icon={Icon3} text='Friendly Support' p='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.'/>                
            </Row>
        </Container>
    </section>
  )
}

export default WorkUs
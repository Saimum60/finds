import React from 'react'
import './pricing.css'
import { Col, Container, Row } from 'react-bootstrap'

import PricingReuse from './PricingReuse';


const Pricing = () => {
  return (
    <section className='ya'>
      <Container>
        <div className="tss">
          <h2>Our Pricing Plans</h2>
          <br />
          <p>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
        </div>
        <Row>
          <PricingReuse li="$299" oe="Per Design" tep="Landing Page "/>
          <PricingReuse li="$399" oe="Multi Design" tep="Website Page"/>
          <PricingReuse li="$499 " oe="Per Design" tep="Complex Project"/>
        </Row>
      </Container>
    </section>
  )
}

export default Pricing
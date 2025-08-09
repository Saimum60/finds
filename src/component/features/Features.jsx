import React from 'react'
import "../features/features.css"
import { Container, Row } from 'react-bootstrap'
import Icon1 from "../../assets/icon1.png"
import Icon2 from "../../assets/icon2.png"
import Icon3 from "../../assets/icon3.png"
import Icon4 from "../../assets/icon4.png"
import Icon5 from "../../assets/icon5.png"
import Icon6 from "../../assets/icon6.png"
import Reusefea from "../features/Reusefea"

const Features = () => {
  return (
    <section className='feature'>
        <Container>
            <div className='fea'>
                <h6 >Features</h6>
                <h2>Design that solves problems, one product at a time</h2>
            </div>
            <Row>
               <Reusefea className="hg" text="Uses Client First" img={Icon1} />
               <Reusefea text="Two Free Revision Round" img={Icon2} />
               <Reusefea text="Template Customization" img={Icon3} />
               <Reusefea text="24/7 Support" img={Icon4} />
               <Reusefea text="Quick Delivery" img={Icon5} />
               <Reusefea text="Hands-on approach" img={Icon6} />
                
            </Row>
        </Container>
    </section>
  )
}

export default Features;
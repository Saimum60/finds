import React from 'react'
import { Container, Row } from 'react-bootstrap'
import "./card.css"
import CardReuse from './CardReuse'
import C1 from '../../../../assets/c1.png'
import C2 from '../../../../assets/c2.png'
import C3 from '../../../../assets/c3.png'
import C4 from '../../../../assets/c4.png'


const Card = () => {
  return (
    <section className='card'>
        <Container>
           <Row>
             <CardReuse img={C1} h='John Smith' p='CEO'/>
             <CardReuse img={C2} h='Simon Adams' p='CTO'/>
             <CardReuse img={C3} h='Paul Jones' p='Design Lead'/>
             <CardReuse img={C4} h='Sara Hardin' p='Project Manager'/>
           </Row>

        </Container>
    </section>
  )
}

export default Card
import React from 'react'
import "./misson.css"
import { Col, Container, Row } from 'react-bootstrap'
import Rc1 from "../../../../assets/rc1.png"
import Rc2 from "../../../../assets/rc2.png"
import MissonReuse from './MissonReuse'

const Missson = () => {
  return (
    <section className='op'>
        <Container>
            <Row>
                <MissonReuse pq='Our Mission ' text='Inspire, Innovate, Share' pr='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                <MissonReuse rc={Rc1}/>
              
                 <MissonReuse rc={Rc2}/>
                 <MissonReuse pq='Our Vision ' text='Laser focus' pr='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
               
            </Row>
        </Container>
    </section>
  )
}

export default Missson
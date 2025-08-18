import React from 'react'
import "./follow.css"
import { Col, Container, Row } from 'react-bootstrap'
import FollowReuse from './FollowReuse'
import Cir from "../../../../assets/circle.png"

const Follow = () => {
  return (
    <section className='follo'>
        <Container>
            <div>
                <h2>The process we follow</h2>
            </div>
            <Row>
                
                <FollowReuse ig={Cir} ps='Planning'/>
                <FollowReuse ig={Cir} ps='Conception'/>
                <FollowReuse ig={Cir} ps='Design'/>
                <FollowReuse ig={Cir} ps='Development'/>
            </Row>
        </Container>
    </section>
  )
}

export default Follow
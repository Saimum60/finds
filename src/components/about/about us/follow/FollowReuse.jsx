import React from 'react'
import { Col } from 'react-bootstrap'

const FollowReuse = ({ig,ps}) => {
  return (
     <Col lg={3}>
                <div className="bs">
                    <img src={ig} alt="" />
                    <h5>----------------------</h5>
                    <h6>{ps}</h6>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                </div>
                </Col>
  )
}

export default FollowReuse
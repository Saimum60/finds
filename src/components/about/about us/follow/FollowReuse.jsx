import React from 'react'
import { Col } from 'react-bootstrap'

const FollowReuse = ({ig,ps}) => {
  return (
     <Col lg={3}>
                <div className="bs">
                    <div className="te">
                      <img src={ig} alt="" />
                    <div className="ler">
                      <p>--------------------</p>
                    </div>
                    </div>
                    <h6>{ps}</h6>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                </div>
                </Col>
  )
}

export default FollowReuse
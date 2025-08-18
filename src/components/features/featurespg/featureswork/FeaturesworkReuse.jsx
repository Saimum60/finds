import React from 'react'
import { Col } from 'react-bootstrap'

const FeaturesworkReuse = ({ic,text,p}) => {
  return (
    <Col lg={4}>
            <div className="sq">
                <img src={ic} alt="" />
                <h6>{text}</h6>
                <p>{p}</p>
            </div>
        </Col>
    
  )
}

export default FeaturesworkReuse
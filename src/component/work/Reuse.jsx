import React from 'react'
import { Col } from 'react-bootstrap'
import "../work/work.css"

const Reuse = ({titel,poin,pm}) => {
  return (
    <Col lg={6}>
      <img src={poin} alt="" />
      <h3 className='brs'>{titel}</h3>
      <p className='bns'>{pm}</p>
    </Col>
  )
}

export default Reuse
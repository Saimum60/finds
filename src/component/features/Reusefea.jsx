import React from 'react'
import { Col } from 'react-bootstrap'
import "../features/features.css"

const reuse = ({text,img,para}) => {
    return (
        <Col  lg={4}>
           <div className='toto'>
             <img className='dd' src={img} alt="" />
            <h6 className='df'>{text}</h6>
            <p className='ds' >Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.  </p>
           </div>
        </Col>
        
    )
}

export default reuse
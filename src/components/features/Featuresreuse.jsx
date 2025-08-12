import React from 'react'
import { Col } from 'react-bootstrap'

const Featuresreuse = ({img,text}) => {
    return (
        <Col lg={4}>
            <div className="icon">
                <img className='kl' src={img} alt="" />
                <h4 className='kk'>{text}</h4>
                <p className='kj'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
            </div>
        </Col>
    )
}

export default Featuresreuse
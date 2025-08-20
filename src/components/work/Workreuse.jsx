import React from 'react'
import { Col } from 'react-bootstrap'


const Workreuse = ({img,hedding,para}) => {
    return (
        <Col lg={6}>
            <div className="ips">
                <img className='image' src={img} alt="" />
            <h5 className='bg'>{hedding}</h5>
            <p className='mg'> {para} </p>
            </div>
        </Col>
    )
}

export default Workreuse
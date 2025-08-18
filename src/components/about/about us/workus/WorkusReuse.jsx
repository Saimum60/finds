import React from 'react'
import { Col } from 'react-bootstrap'

const WorkusReuse = ({icon,text,p}) => {
    return (
        <Col lg={4}>
            <div className="sd">
                <img src={icon} alt="" />
                <h6>{text}</h6>
                <p>{p}</p>
            </div>
        </Col>
    )
}

export default WorkusReuse
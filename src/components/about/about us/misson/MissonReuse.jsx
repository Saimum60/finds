import React from 'react'
import { Col } from 'react-bootstrap'

const MissonReuse = ({rc,text,pq,pr,ss,ps,texte,pb}) => {
    return (
       <>
        <Col lg={6}>
            <div className="lg">
                <img src={rc} alt="" />
                <h6>{pq} </h6>
                <h3>{text}</h3>
                <p>{pr}</p>
            </div>
        </Col>
       </>
    )
}

export default MissonReuse
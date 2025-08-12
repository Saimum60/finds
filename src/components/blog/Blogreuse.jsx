import React from 'react'
import { Col } from 'react-bootstrap'
import { FaArrowRightLong } from "react-icons/fa6";

const Blogreuse = ({img}) => {
    return (
        <Col lg={4}>
            <div className="xc">
                <img src={img} alt="" />
                <h5>19 Jan 2022</h5>
                <h6>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
                <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                <a href="#">Read More <FaArrowRightLong /> </a>
            </div>
        </Col>
    )
}

export default Blogreuse
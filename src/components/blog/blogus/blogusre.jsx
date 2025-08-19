import React from 'react'
import { Col } from 'react-bootstrap'
import { FaArrowRightLong } from "react-icons/fa6";

const blogusre = ({imh}) => {
    return (
        <Col lg={4}>
            <div className="bl">
                <img src={imh} alt="" />
                <h6>27 Jan 2021</h6>

                <h5>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h5>
                <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                <div className="lp">
                    <a href="#"> Read More <FaArrowRightLong/> </a>
                </div>
            </div>
        </Col>
    )
}

export default blogusre
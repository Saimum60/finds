import React from 'react'
import { Col } from 'react-bootstrap'
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const CardReuse = ({ img, h, p }) => {
    return (
        <Col lg={3}>
            <div className="hp">

                <div className="pre">
                    <img src={img} alt="" />
                    <div className="wes">
                        <div className="aa">
                            < MdOutlineFacebook />
                            <FaTwitter />
                            <FaLinkedin />

                        </div>
                    </div>
                </div>
                <h6>{h}</h6>
                <p>{p}</p>
            </div>
        </Col>
    )
}

export default CardReuse
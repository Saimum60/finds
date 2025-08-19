import React from 'react'
import { Col } from 'react-bootstrap'
import { BiSolidRightArrow } from "react-icons/bi";

const PricingReuse = ({li,oe,tep}) => {
  return (
    <Col lg={4}>
          <div className="jhg">
           <div className="plc">
             <h2>{li} <span className='nmc'>{oe}</span></h2>
          <h3>{tep} </h3>
          <p>When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.</p>
          <ul>
            <li> <BiSolidRightArrow/> All limited links</li>
            <li> <BiSolidRightArrow/> Own analytics platform</li>
            <li> <BiSolidRightArrow/> Chat support</li>
            <li> <BiSolidRightArrow/> Optimize hashtags</li>
            <li> <BiSolidRightArrow/> Unlimited users</li>
          </ul>
           </div>
          <div className="lbt">
            <button>Get started</button>
          </div>
          </div>
          </Col>
  )
}

export default PricingReuse
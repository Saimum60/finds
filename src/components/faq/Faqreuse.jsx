import React from 'react'
import { Accordion } from 'react-bootstrap'

const Faqreuse = ({num,text}) => {
    return (
        <div className="acc">
            <Accordion>
                <Accordion.Item eventKey="0" className='po'>
                    <Accordion.Header> <span className='ml'>{num}</span> <span className='bv'>{text}</span></Accordion.Header>
                    <Accordion.Body>
                        <p className='re'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Faqreuse
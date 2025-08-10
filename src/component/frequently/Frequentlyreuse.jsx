import React from 'react'
import { Accordion} from 'react-bootstrap'
import "../frequently/frequently.css"

const Frequentlyreuse = ({text,num}) => {
  return (
      <Accordion className='np'>
      <Accordion.Item className='as' eventKey="0">
        <Accordion.Header className='heading'> <span>{num}</span>{text}</Accordion.Header>
        <Accordion.Body className='rp'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
  )
}

export default Frequentlyreuse
import React from 'react'
import './blogus.css'
import { Col, Container, Row } from 'react-bootstrap'
import Blog1 from "../../../assets/blog1.png"
import Blog2 from "../../../assets/blog2.png"
import Blog3 from "../../../assets/blog3.png"
import Blog4 from "../../../assets/blog4.png"
import Blog5 from "../../../assets/blog5.png"
import Blog6 from "../../../assets/blog6.png"
import Blogusre from './blogusre'

const Blogus = () => {
  return (
    <section className='dmp'>
        <Container>
            <div className="jp">
                <h2>Our Blog</h2>
            </div>
            <Row>
                <Blogusre imh={Blog1}/>
                <Blogusre imh={Blog2}/>
                <Blogusre imh={Blog3}/>
                <Blogusre imh={Blog4}/>
                <Blogusre imh={Blog5}/>
                <Blogusre imh={Blog6}/>
            </Row>
        </Container>
    </section>
  )
}

export default Blogus
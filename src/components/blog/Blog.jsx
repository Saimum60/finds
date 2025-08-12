import React from 'react'
import "./blog.css"
import {  Col, Container, Row } from 'react-bootstrap'
import Pp1 from '../../assets/pp1.png'
import Pp2 from '../../assets/pp2.png'
import Pp3 from '../../assets/pp3.png'

import Blogreuse from './Blogreuse';
const Blog = () => {
    return (
        <section className='blog'>
            <Container>
                <div className='os'>
                    <h2>Our blog</h2>
                </div>
                <Row>
                    <Blogreuse img={Pp1}/>
                    <Blogreuse img={Pp2}/>
                    <Blogreuse img={Pp3}/>
                </Row>
            </Container>
        </section>
    )
}

export default Blog
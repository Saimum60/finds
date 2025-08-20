import React from 'react'
import "./kss.css"
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Kss = () => {
    return (
        <section className='jq'>
            <Container>
                <div className='pto'>
                    <h4>Copyright 2022, Finsweet.com</h4>
                    <div className=" ms-auto lis">
                        <Link to="/">Home</Link>
                        <Link to="/aboutus">About us</Link>
                        <Link to="/featurespg">Features</Link>
                        <Link to="/pricing" >Pricing</Link>
                        <Link to="/faqus">FAQ</Link>
                        <Link to="/blogus" >Blog</Link>
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default Kss
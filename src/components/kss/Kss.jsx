import React from 'react'
import "./kss.css"
import { Container } from 'react-bootstrap'

const Kss = () => {
    return (
        <section className='jq'>
            <Container>
                <div className='pt'>
                    <h4>Copyright 2022, Finsweet.com</h4>
                    <ul className='ms-auto'>
                        <li><a href="#"></a>Home</li>
                        <li><a href="#"></a>About us</li>
                        <li><a href="#"></a>Features</li>
                        <li><a href="#"></a>Pricing</li>
                        <li><a href="#"></a>FAQ</li>
                        <li><a href="#"></a>Blog</li>
                    </ul>
                </div>

            </Container>
        </section>
    )
}

export default Kss
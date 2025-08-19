import React from 'react'
import './faqus.css'
import { Container } from 'react-bootstrap'
import Faq1 from '../../../assets/faq1.png'
import Faq2 from '../../../assets/faq2.png'

const FaqUs = () => {
  return (
    <section>
        <Container>
            <div className="us">
                
                <div className="pao">

                <h6>Web design and development</h6>
                <h2>Finsweet Design case studies</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                <div className="imp">
                    <img src={Faq1} alt="" />
                    <div className="lz"></div>
                </div>
            </div>
            <div className="lio">
                <h3>About the project</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                    <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
                </ul>
                <div className="kpl">
                    <img src={Faq2} alt="" />
                </div>
                <h4>How we do it</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                    <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
                </ul>
            </div>
            </div>
           
        </Container>
    </section>
  )
}

export default FaqUs
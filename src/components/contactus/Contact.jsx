import React from 'react'
import './contact.css'
import { Container, Form, Row } from 'react-bootstrap'

const Contact = () => {
    return (
        <section>
            <Container>
                <div className="kla">
                    
                    <div className="kio">
                        <h2>Contact Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod tempor incididunt ut labore.</p>
                    </div>
                    <div className="inpu">
                        <form >
                            <label>Name <input type="text" name='First Name' placeholder='Enter your name' /></label>
                            
                            <label>Email <input type="text" email='Email' placeholder='Enter your Email' /></label>
                            
                            <label>Subject <input type="text" name='First Name' placeholder='Provide context' /></label>
                            
                            <label >Subject <input type="text" name='First Name' placeholder='Select Subject' /></label>
                            
                            <label >Message <input  type="text" name='First Name' placeholder='Write your  question here' /></label>
                             
                             
                        </form>
                        <div className="butt">
                            <button>Send Messege</button>
                        </div>
                    </div>

                </div>
                
            </Container>
        </section>
    )
}

export default Contact
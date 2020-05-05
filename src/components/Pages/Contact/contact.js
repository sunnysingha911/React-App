import React from 'react';
import './assets/css/contact.css';
const Contact = ()=>{
    return(
        <div className="contact">
            <div className="contact-container">
                <div className="contact-form">
                    <h1>Contact Us</h1>
                    <form>
                        <div className="container">
                            <div className="items">Name</div>
                            <div className="items"><input type="text" name="name" placeholder="Full name"/></div>
                            <div className="items">Email</div>
                            <div className="items"><input type="text" name="email" placeholder="Email"/></div>
                            <div className="items">Message</div>
                            <div className="items"><textarea name="message" placeholder="Your message..." rows="10"></textarea></div>
                            <div className="items"><button>Submit</button></div>
                        </div>
                    </form>
                </div>
                <div className="get-in-touch">
                    <h2>Get In Touch</h2>
                    <div className="address">
                        <h4>Phone:</h4>
                        <p>+91 1234567890</p>
                        <h4>Email:</h4>
                        <p>dummymail@somemail.com</p>
                        <h4>Address:</h4>
                        <p>1,XYZ Street,
                        Bengaluru,India</p>
                    </div>
                    <div className="map">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
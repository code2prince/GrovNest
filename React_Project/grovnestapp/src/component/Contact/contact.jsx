import React from "react";
import './contact.css';

const Contact=()=>{
    return (
        <>
        <h5>Get In Touch </h5>
        <h2>Contact us</h2>

        <div className="container_contact">
            <form className="form_container">
                <input type="text" name='name' placeholder="Your Full Name" required/>
                <input type="Email" name='Email' placeholder="Your Email" required/>
                <textarea type="message" row="7" placeholder="Your Message" required></textarea>
                <button className="btn">Send Message</button>
            </form>

        </div>

        </>
    )
}
export default Contact;
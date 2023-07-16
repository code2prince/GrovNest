import React from "react";
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
//import { RiMessengerLine } from 'react-icons/ri';



const Contact = () => {
    return (
        <>
            <h5>Get In Touch </h5>
            <h2>Contact us</h2>

            <div className="container_contact">
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>admin@grovnest.com</h5>
                        <a href='mailto:admin@grovnest.com'>Send a message</a>
                    </article>

                    {/* <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messanger</h4>
                        <h5>GrovNest</h5>
                        <a href='https://m.me/pk.sharma.5070276'>Send a message</a>
                    </article> */}

                     <article className='contact__option'>
                    <BsWhatsapp className='contact__option-icon'/>
                    <h4>WhatsApp</h4>
                    <h5>+91 8873091666</h5>
                    <a href='https://api.whatsapp.com/send?phone=918873091666'>Send a message</a>
                    </article> 
                </div>

                <form className="form_container">
                    <input type="text" name='name' placeholder="Your Full Name" required />
                    <input type="Email" name='Email' placeholder="Your Email" required />
                    <textarea type="message" row="7" placeholder="Your Message" required></textarea>
                    <button className="btn">Send Message</button>
                </form>

            </div>

        </>
    )
}
export default Contact;
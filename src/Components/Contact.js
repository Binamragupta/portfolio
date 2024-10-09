import {useRef,React, useState} from 'react'
import "../CSS/contact.css"
// import { motion, } from 'framer-motion'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form=useRef();
    const [error,setError]=useState(false)
    const [success,setSuccess]=useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_sk3dgas', 'template_npra1rs', form.current, {
          publicKey: 'circiokSZ9qHxSb5-',
        })
        .then(
          (result) => {
            setSuccess(true)
            
          },
          (error) => {
            setError(true)
            console.log(error)
          },
        );
    };
    

    const variants={
        initial:{
            y:500,
            opacity:0,
        },
        animate:{
            y:10,
            opacity:1,
            transition:{
                duration:0.5,
                staggerChildren:0.1,
            },
        },
    };



  return (
    <div  variants={variants} className='contact' initial="initial" whileInView="animate" >
      <div variants={variants} className="textContainercon">
        <h1 variants={variants} className='h1con'>Lets Communicate</h1>
        <div variants={variants} className="itemcon">
            <h3>Mail</h3>
            <span className='spana'>guptabinamra@gmail.com</span>
        </div>
        <div className="itemcon">
            <h3>Address</h3>
            <span className='spana'>Hindalco Colony, Hirakud.</span>
        </div>
        <div className="itemcon">
            <h3>Phone</h3>
            <span className='spana'>+91-6372053237</span>
        </div>
      </div>
      <div className="formContainercon">
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" required placeholder='Name' name="name"/>
            <input type="email" required placeholder='Email' name="email"/>
            <textarea rows={8} placeholder='Message' name='message'/>
            <button className='button'>Submit</button>
            {error &&"Error"}
            {success && "Success"}

        </form>
      </div>
    </div>
  )
}

export default Contact

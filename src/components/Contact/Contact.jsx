
import React, { useRef, useState } from 'react'
import{ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form=useRef();
  const [isSent,setIsSent]=useState(false);
  

  const sendEmail=(e)=>{
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x7q1rjm",
        "template_1rnnjau",
        form.current,
        "Djeis16UGBqWKtG-p"
      )
      .then(
        ()=>{
          setIsSent(true);
          form.current.reset();
          toast.success("Message Sent Successfully.")
        },
        (error)=>{
          toast.error("Error Sending Message."+error);
        }
      )
  }

  return (
    <section
      id="contact"
      className='flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]'
    >
      <ToastContainer></ToastContainer>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Contact</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I'd love to hear from you-reach out for any opprtunities or questions!
        </p>
      </div>

      <div className='mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700' >
        <h3 className='text-xl font-semibold text-white text-center' >Connect With Me</h3>

        <form ref={form} onSubmit={(e)=> sendEmail(e)} className='mt-4 flex flex-col space-y-4 ' >
          <input type="email" name="user_email" placeholder='Your Email' className='w-full p-3 rounded-md bg-[#131025]  text-white border border-gray-600 focus:outline-none focus:border-purple-500}' id="" />
          <input type="text" name="name" placeholder='Your Name' className='w-full p-3 rounded-md bg-[#131025]  text-white border border-gray-600 focus:outline-none focus:border-purple-500}' id="" />
          <input type="text" name="subject" placeholder='Your Subject' className='w-full p-3 rounded-md bg-[#131025]  text-white border border-gray-600 focus:outline-none focus:border-purple-500}' id="" />
          <textarea name="message" placeholder="Message" rows="4"
          className='w-full p-3 rounded-md bg-[#131025]  text-white border border-gray-600 focus:outline-none focus:border-purple-500'
          id=""></textarea>
          <button type="submit" 
          className='w-full h-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-md hover:opacity-90 transition '
          >
            Send
          </button>
        </form>
      </div>

    </section>
  )
}

export default Contact
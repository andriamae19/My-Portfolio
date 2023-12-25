import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

function Contact() {

  const [message, setMessage] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();
  
    // emailjs.sendForm(REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, e.target, REACT_APP_EMAILJS_USER_ID)
    //   .then((response) => {
    //     setMessage(response.status, response.text);
    //   }, (error) => {
    //     console.log('FAILED...', error);
    //   });
  };
  return (
    <>
    <div className='contact-spacer'></div>
        <div className='contact'>
          <div className='form-content'>
            <TextField
            className='input-form'
            required
                id="username"
                name='username'
                label="Name"
                type="text"
                autoComplete="username"
              />
            <TextField
            className='input-form'
            required
                id="email"
                name='email'
                label="Email"
                type="email"
                autoComplete="email"
              />
              <TextField
              className='input-form'
              required
                id="message"
                name='message'
                label="How can I help?"
                multiline
                rows={4}
              />
              
              <div className='form-socials'>
                <Button variant="contained" className='form-btn' onClick={sendEmail}>Get in Touch</Button>
                <div className='socials'>
                  <a href='https://www.facebook.com/' target='blank'><FacebookIcon className='banner-icon'/></a>
                  <a href='https://www.linkedin.com/login' target='blank'><LinkedInIcon className='banner-icon'/></a>
                  <a href='https://www.whatsapp.com/' target='blank'><WhatsAppIcon className='banner-icon'/></a>
                  <a href='https://web.telegram.org/' target='blank'><TelegramIcon className='banner-icon'/></a>
                </div>
                
              </div>
          </div>
        <div className='form-information'>
          <h2>
            Let's <span>talk </span>for
          </h2>
          <h2>
            Something special
          </h2>
          <p>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
          <h3>andriadegoma@gmail.com</h3>
          <h3>+63 967 3724 189</h3>
        </div>
      </div>
      <div className='contact-spacer'></div>
    </>
  )
}

export default Contact
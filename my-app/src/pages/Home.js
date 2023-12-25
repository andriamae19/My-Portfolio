import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import '../App.css';
import homeImage from '../assets/img/2.png';




function Home() {
  return (
    <>
        <div className='home-spacer'></div>
        <div className='homepage'>
            <div>
                <h1>
                    <span className='heading-light'>Hello I'am </span>
                    <span className='heading-bold'>Andria Mae.</span>
                </h1>
                <h1>
                    <span className='heading-bold'>Full-Stack </span>
                    <span className='heading-outline'>Developer</span>
                </h1>
                <h1>
                    <span className='heading-light'>Based in the </span>
                    <span className='heading-bold'>Philippines</span>
                </h1>
                <p className='banner-description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id tincidunt quam, a mattis elit. Proin auctor eros a viverra varius. Vivamus gravida tellus ut rhoncus tempor. Aliquam at pellentesque tortor. Praesent vitae leo commodo, suscipit urna sit amet, porta enim. Etiam vel erat tempus nunc luctus eleifend sed at.  
                </p>
                <div className='socials'>
                    <a href='https://www.facebook.com/' target='blank'><FacebookIcon className='banner-icon'/></a>
                    <a href='https://www.linkedin.com/login' target='blank'><LinkedInIcon className='banner-icon'/></a>
                    <a href='https://www.whatsapp.com/' target='blank'><WhatsAppIcon className='banner-icon'/></a>
                    <a href='https://web.telegram.org/' target='blank'><TelegramIcon className='banner-icon'/></a>
                </div>
            </div>
            <div className='img-container'>
                <img src={homeImage} alt='banner img' aria-label='banner img' className='banner-img'/>
            </div>  
        </div>
        <div className='home-spacer'></div>
    </>   
  )
}

export default Home
import React from 'react'
import logo from '../assets/img/1.png';

function Footer() {
  return (
    <div className='footer'>
        <img src={logo} alt='Website Logo' aria-label='Website Logo' width={30} />
        <p>© 2023 by Andria Mae Degoma</p>

    </div>
  )
}

export default Footer
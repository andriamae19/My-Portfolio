import React from 'react'
import Link from '@mui/material/Link';
import project1 from '../assets/img/thumbs.jpg'

function Project() {
  return (
    <>
    <div className='spacer'></div>
    <div className='projects'>
      <h1>
       My <span>Projects</span>
      </h1>
      <div className='personal-projects'>
        <h2>
          Personal <span>Projects</span>
        </h2>
        <div className='personal-project-content'>
          <div className='project1-container'>
            <img src={project1} alt=''/>
            <div className='project-description'>
              <strong>01</strong>
              <h3>Bon Cafe</h3>
              <p>I'm Kalvin Doe Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
              <Link href="https://degomaamd.github.io/" underline="none">
                <i className="fa-solid fa-up-right-from-square"></i>
              </Link>
            </div>  
          </div>
          <div className='project2-container'>
            <img src={project1} alt=''/>
            <div className='project-description'>
              <strong>02</strong>
              <h3>Vizmaker Cafe</h3>
              <p>I'm Kalvin Doe Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
              <Link href="https://degomaamd.github.io/" underline="none">
                <i className="fa-solid fa-up-right-from-square"></i>
              </Link>
            </div>  
          </div>
          <div className='project3-container'>
            <img src={project1} alt=''/>
            <div className='project-description'>
              <strong>03</strong>
              <h3>AMDD | Portfolio</h3>
              <p>I'm Kalvin Doe Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
              <Link href="https://degomaamd.github.io/" underline="none">
                <i className="fa-solid fa-up-right-from-square"></i>
              </Link>
            </div>  
          </div>
        </div>
      </div>
      <div className='work-projects'>
      <h2>
          Work <span>Projects</span>
        </h2>
        <div className='work-project-content'>
          <div className='project1-container'>
            <img src={project1} alt=''/>
            <div className='project-description'>
              <strong>01</strong>
              <h3>Bon Cafe</h3>
              <p>I'm Kalvin Doe Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
              <Link href="https://degomaamd.github.io/" underline="none">
                <i className="fa-solid fa-up-right-from-square"></i>
              </Link>
            </div>  
          </div>
          <div className='project2-container'>
            <img src={project1} alt=''/>
            <div className='project-description'>
              <strong>02</strong>
              <h3>Vizmaker Cafe</h3>
              <p>I'm Kalvin Doe Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
              <Link href="https://degomaamd.github.io/" underline="none">
                <i className="fa-solid fa-up-right-from-square"></i>
              </Link>
            </div>  
          </div>
          <div className='project3-container'>
            <img src={project1} alt=''/>
            <div className='project-description'>
              <strong>03</strong>
              <h3>Bon Cafe</h3>
              <p>I'm Kalvin Doe Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
              <Link href="https://degomaamd.github.io/" underline="none">
                <i className="fa-solid fa-up-right-from-square"></i>
              </Link>
            </div>  
          </div>
        </div>
      </div>
    </div>
    <div className='spacer'></div>
    </>
  )
}

export default Project
import React from 'react'
import home from '../images/home2.jpg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home-section'>
      <img src={home} alt='Home' className='home-photo' />
      <div className='home-text'>
        <p className='big-text'>Building a community through books</p>
        <p className='small-text'>Explore great and amazing stories, share your favourites, and connect with fellow book lovers</p> <br></br>
        <Link to='login' className='home-button'>Join Us</Link>
      </div>
    </div>
  )
}

export default Home

import React from 'react'
import './footer.css'
import { BiCopyright } from 'react-icons/bi'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (

    <footer>
      <div className='footer-wrapper'>
        <section className='footer-top'>
          <div>
            <h2 className='newsletter'>Subscribe to our newsletter</h2>
            <p className='newsletter-text'>Join the Bookclub newsletter for book recommemdations and tips </p>
          </div>

          <div className='subscribe-div'>
            <input className='footer-input' type='text' placeholder='Email address' /> 
            <button className='footer-button'>Subscribe</button>
          </div>
        </section>

        <section className='footer-middle'>
          <div>
            <h3>BookUs</h3>
            <ul>
              <li> <a href='#'>About Us</a> </li>
              <li> <a href='#'>Our Mission</a> </li>
              <li> <a href='#'>Community</a ></li>
              <li> <a href='#'>Contact</a> </li>
             </ul>

          </div>

          <div>
            <h3>Resources</h3>
             <ul>
              <li> <a href='#'>Help Centre</a> </li>
              <li> <a href='#'>Newsletter</a> </li>
              <li> <a href='#'>Support</a> </li>
              <li> <a href='#'>Our Partners</a> </li>
             </ul>
          </div>

          <div>
            <h3>Resources</h3>
             <ul>
              <li> <a href='#'>Help Centre</a> </li>
              <li> <a href='#'>Newsletter</a> </li>
              <li> <a href='#'>Support</a> </li>
              <li> <a href='#'>Our Partners</a> </li>
             </ul>
          </div>
        </section>

        <section className='footer-bottom'>
        <p className='bottom-text'>2023 <BiCopyright size={13} /> All rights reserved by <span>BOOKUS</span></p>
        <div>
          <FaFacebookF className='sm-logo' size={24} />
          <FaInstagram className='sm-logo' size={24} />
          <FaTwitter className='sm-logo' size={24} />
          <FaLinkedin className='sm-logo' size={24} />
        </div>
        </section>
      </div>
    </footer>

  )
}

export default Footer

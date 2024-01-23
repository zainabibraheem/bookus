import React, { useState } from 'react'
import './enquiry.css'


function Enquiry() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''

  })

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prevFormData) => ( { ...prevFormData, [name]: value } ))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className='enquiry-wrapper'>
      <div className='form-container'>
        <form onSubmit={handleSubmit} className='enquiry-form'>
          <input
            placeholder='Name'
            className='form-input'
            id='user-name'
            name='username'
            value={formData.username}
            onChange={handleChange}
          />
          <input
            placeholder='Email'
            className='form-input'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            placeholder='Message'
            className='message'
            id='message'
            rows='8'
            name='message'
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button className='enquiry-button'>Send Message</button>
        </form>
      </div>

      <div className='enquiry-text'>
        <h2>Do you have a question?</h2>
        <p>Learn more about our club</p>
        <p>We'd love to help</p>
      </div>

    </div>
  )
}

export default Enquiry

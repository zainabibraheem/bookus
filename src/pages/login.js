import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const submitForm = (event) =>{
    event.preventDefault()
  }
  return (
    <div className='login-wrapper'>

      <div className='login-container'>

        <h2>Are you part of us? <span>Log in</span></h2>


        <form className='login-form' onSubmit={submitForm}>
          <input
            type='text'
            placeholder='Your Email'
            name='email'
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />

          <input
            type='text'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
          />

          <Link to='' className='forgot-password-link' >Forgot password?</Link>

          <button className='login-btn'>Log In</button>
        </form>

      </div>
    </div>
  )
}

export default Login


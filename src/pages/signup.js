
import React  from 'react'
import { useState } from 'react'

function Signup() {
  const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 
  return (
    <div className='signup-wrapper'>
      <div className='signup-container'>
        <h2>Join our community of readers</h2>
        <form className='signup-form'>

        <input
            type='text'
            placeholder='Your name'
            name='name'
            value={name}
            onChange={(e) => { setName(e.target.value) }}
          />

        <input
            type='text'
            placeholder='Email'
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


          <button className='signup-btn'>Sign Up</button>
        </form>

        
      </div>
    </div>
  )
}

export default Signup

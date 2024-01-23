import React from 'react'
import missionOne from '../images/mission4.jpg'
import missionTwo from '../images/mission1.jpg'
import { BiSolidQuoteLeft } from "react-icons/bi";


function Mission() {
  return (
    <div className='mission-div'>
      <div >
        
        <div><img src={missionTwo} alt='two people reading books' className='mission-two'/></div>
      </div>
      <h2>Our Mission </h2>
      <h3>Bringing people together to read, share, and discuss great stories.</h3>
       <div className='mission-words-div'>
       <div className='mission-words'>
       <BiSolidQuoteLeft size={35}/>
       <p>we aim to cultivate a welcoming space that celebrates a love for reading, promotes lifelong learning, and encourages empathy, connection, and personal growth among our members.</p>
       </div>

       <div className='mission-words'>
        <BiSolidQuoteLeft size={35}/>
       <p>we aim to cultivate a welcoming space that celebrates a love for reading, promotes lifelong learning, and encourages empathy, connection, and personal growth among our members.</p>
       </div>

       <div className='mission-words'>
       <BiSolidQuoteLeft size={35}/>
       <p>we aim to cultivate a welcoming space that celebrates a love for reading, promotes lifelong learning, and encourages empathy, connection, and personal growth among our members.</p>
       </div>

       <div className='mission-words'>
       <BiSolidQuoteLeft size={35}/>
       <p>we aim to cultivate a welcoming space that celebrates a love for reading, promotes lifelong learning, and encourages empathy, connection, and personal growth among our members.</p>
       </div>
      
      
       </div>
    </div>
  )
}

export default Mission

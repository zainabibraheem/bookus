import React from 'react'
import { useState, useEffect } from "react"

function Contact() {

  const [weather, setWeather] = useState([])

  useEffect(() => {

          fetch('http://api.weatherapi.com/v1/current.json?q=ogun&key=26404f9e4c8f42fcac3121425232708')
             .then(response => response.json())
             .then(data => {console.log(data); setWeather(data);})

             



  },)


  return (
    <div className='contact-section'>

    <p>{weather.location.name}</p>

    </div>
  )
}

export default Contact

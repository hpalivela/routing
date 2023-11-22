import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <center>
    <div style={{backgroundColor:'black',height:'100vh',color:'blue'}}>
      <h1>Welcome to About</h1>
    <Link to='/home'><button>click me to go home</button></Link>
    <Link to='/home'>Link</Link>
    
    </div>
    </center>
  )
}

export default About
